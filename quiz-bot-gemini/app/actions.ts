// to save messages and possibly users
'use server'

import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'
import { kv } from "@vercel/kv"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function storeUser(userId?: string | null){
    'use server'
    if (!userId) {
        return
    }
    await kv.set(userId, 'true')
    revalidatePath('/chat')
}