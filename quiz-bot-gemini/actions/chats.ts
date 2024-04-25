'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { kv } from "@vercel/kv"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { type Chat } from "@/lib/types";

export async function getChats(userId?: string | null) {
    if (!userId) {
        return []
    }

    try {
        const pipeline = kv.pipeline()
        const chats: string[] = await kv.zrange(`user:chats:${userId}`, 0, -1, {
            rev: true
        })

        for (const chat of chats){
            pipeline.hgetall(chat)
        }

        const results = await pipeline.exec()

        return results as Chat[]
    } catch(error) {
        return[]
    }
}

export async function getChat(id: string, userId: string){
    const chat = await kv.hgetall<Chat>(`chat:${id}`)

    if (!chat || (userId && chat.userId !== userId)) {
        return null
    }

    return chat
}

export async function removeChat({ id, path}: {id: string, path: string}){
    const { getUser } = getKindeServerSession()
    const session = await getUser();

    if (!session) {
        return {
            error: 'Unauthorized'
        }
    }

    const uid = String(await kv.hget(`chat:${id}`, 'userId'))

    if (uid !== session.id) {
        return {
            error: 'Unauthorized'
        }
    }

    await kv.del(`chat:${id}`)
    await kv.zrem(`user:chats:${session.id}`, `chat:${id}`)

    revalidatePath('/chat')
    return revalidatePath(path)
}

export async function clearChats(){
    const { getUser } = getKindeServerSession()
    const session = await getUser();

    if (!session?.id) {
        return {
            error: 'Unauthorized'
        }
    }

    const chats: string[] = await kv.zrange(`user:chats:${session.id}`, 0, -1)
    if (!chats.length) {
        return redirect('/chat')
    }

    const pipeline = kv.pipeline()

    for (const chat of chats){
        pipeline.del(chat)
        pipeline.zrem(`user:chat:${session.id}`, chat)
    }

    await pipeline.exec()

    revalidatePath('/')
    return redirect('/')
}

export async function saveChat(chat: Chat){
    const { getUser } = getKindeServerSession()
    const session = await getUser();

    if (session && session.id){
        const pipeline = kv.pipeline()
        pipeline.hmset(`chat:${chat.id}`, chat)
        pipeline.zadd(`user:chat:${chat.userId}`, {
            score: Date.now(),
            member: `chat:${chat.id}`
        })
        await pipeline.exec()
    } else {
        return
    }
}

export async function refreshHistory(path: string){
    redirect(path)
}