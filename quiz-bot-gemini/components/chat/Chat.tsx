'use client'

import { ChatMessages } from "./ChatMessages"
import EmptyScreen from "./empty-screen"
import { Message } from "@/lib/chat/actions"
import { useAIState, useUIState } from "ai/rsc"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useScrollAnchor } from "@/lib/hooks/chat-scroll-anchor"
import ChatForm from "./ChatForm"
import { cn } from "@/lib/utils"
import { toast } from 'sonner'

import { useChat } from 'ai/react'

export interface ChatProps extends React.ComponentProps<'div'> {
    initialMessages: Message[]
    id?: string
    session?: any
    missingKeys: string[]
}

export function Chat({
    id,
    className,
    session,
    missingKeys
}: ChatProps){
    const router = useRouter()
    // const [input, setInput] = useState('')
    const [aiState] = useAIState()


    useEffect(() => {
        const messagesLength = aiState.messages?.length
        if (messagesLength === 2){
            router.refresh()
        }
    }, [aiState.messages, router])

    useEffect(() => {
        missingKeys.map(key => {
            toast.error(`Missing ${key} env variable`)
        })
    }, [missingKeys])

    const { messagesRef, scrollRef, scrollToBottom, visibilityRef, isAtBottom } = useScrollAnchor()
    const { messages, input, handleInputChange, handleSubmit } = useChat()

    return(
        <div
            className="group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]"
            ref={scrollRef}
        >
            <div className={cn('pb-[200px] pt-4', className)} ref={messagesRef}>
                {messages.length ? (
                    <ChatMessages messages={messages}/>
                ): (
                    <EmptyScreen />
                )}
                <div className="h-px w-full" ref={visibilityRef}/>
            </div>
            <ChatForm 
                input={input} 
                onChange={handleInputChange} 
                onSubmit={handleSubmit}
            />
        </div>
    )
}