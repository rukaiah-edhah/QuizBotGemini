'use client';

import { ChatAIMessage } from "./chat-ai-message";

import { UserMessage,  AIMessage  } from "./message";

export default function ChatMessages({ messages }: { messages: any[] }) {
    if (!messages.length){
        return null;
    }

    return(
        <div className=' max-w-2xl px-4  mt-10 flex flex-col gap-2 items-start justify-start'>
           {messages.map((message: any, index: number) => (
                <div key={index} className="py-2  flex flex-row gap-2 ">
                    {message.role === 'user' ? (<UserMessage>{message.content}</UserMessage>) : <AIMessage><ChatAIMessage content={message.content} /></AIMessage>}
                </div>
            ))}
        </div>
    )
}