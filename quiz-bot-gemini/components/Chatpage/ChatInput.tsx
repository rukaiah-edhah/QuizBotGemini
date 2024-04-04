'use client';

import { useChat } from 'ai/react'
import { FaUser } from "react-icons/fa";
import ChatAiImage from './chat-ai-image';
import { cn } from '@/lib/utils';
import { MemoizedReact } from './markdown';

export default function ChatInput(){
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return(
        <div className='mx-auto mt-10'>
            {messages.map(m => (
                <div key={m.id}
                    className='flex flex-row gap-2 border-b border-white/10 my-2 py-5'
                >
                    <div 
                        className={cn(
                            'flex size-8 shrink-0 select-none items-center justify-center rounded-full shadow'
                        )}
                    >
                        {m.role === 'user' ? <FaUser className='w-4 h-4'/> : <ChatAiImage />}
                    </div>
                    <div className='flex-1 px-1 ml-4 space-y-2 overflow-hidden'>
                        <MemoizedReact >
                            {m.content}
                        </MemoizedReact>
                    </div>
                </div>
            ))}

            <form
                onSubmit={handleSubmit}
                className='w-full flex items-center justify-center text-black fixed bottom-10 inset-x-0 px-5'
            >
                <input 
                    value={input}
                    placeholder='Send a message...'
                    onChange={handleInputChange}
                    className='flex w-full md:w-3/5 rounded-full px-5 py-3 items-center justify-center shadow-xl border bg-[#f5f5f5] border-opacity-10 border-black focus:border-black/50 focus:outline-none'
                />
            </form>
        </div>
    )
}