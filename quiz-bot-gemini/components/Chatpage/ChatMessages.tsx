'use client';

import { cn } from "@/lib/utils";
import ChatAiImage from "./chat-ai-image";
import { FaUser } from "react-icons/fa";


export default function ChatMessages({ messages }: { messages: any[] }) {
    if (!messages.length){
        return null;
    }

    return(
        <div className='relative max-w-2xl px-4  mt-10'>
           {messages.map((message: any, index: number) => (
                <div key={index} className="py-2 border-b border-white/10 flex flex-row gap-2 items-start">
                     <div 
                        className={cn(
                            'flex size-8 shrink-0 select-none items-center justify-center rounded-full shadow'
                        )}
                    >
                        {message.role === 'user' ? <FaUser className='w-4 h-4'/> : <ChatAiImage />}
                    </div>
                    {message.content}
                </div>
            ))}
        </div>
    )
}