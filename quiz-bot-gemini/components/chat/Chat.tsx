'use client'

import { useEffect, useRef, useState } from 'react';


import { ChatScrollAnchor } from '@/lib/hooks/chat-scroll-anchor';
import { Button } from '../ui/button';
import { QuizStart } from './quiz-start';
import ChatMessages from './ChatMessages';
import { useChat } from 'ai/react'

export default function Chat(){
    
    const inputRef = useRef<HTMLInputElement>(null);

    const { messages, input, handleInputChange, handleSubmit } = useChat();

    
    return(
        <>
            <div className='pb-[200px] pt-4 md:pt-10 '>
                {messages.length ? (
                    <ChatMessages messages={messages}/>
                ): (
                    <QuizStart />
                )}
                <ChatScrollAnchor trackVisibility={true} />
            </div>
            <div className='fixed bottom-10 inset-x-0 px-5 '>
                <div className='mx-auto mt-10 bg-inherit w-full'>
                    <form
                        onSubmit={handleSubmit}
                        className='w-full flex items-center justify-center text-black'
                    >
                       <input 
                            ref={inputRef}
                            name='message'
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder='Send a message...'
                            className='flex w-full lg:w-3/5 rounded-full px-5 py-3 items-center justify-center shadow-xl border bg-[#f5f5f5] border-opacity-10 border-black focus:border-black/50 focus:outline-none'
                       />
                    </form>
                </div>
            </div>
        </>
    )
}