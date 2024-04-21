'use client'

import { useEffect, useRef, useState } from 'react';
import { UserMessage } from './message';

import { Button } from '../ui/button';
import { toast } from 'sonner';

export default function ChatForm({
    input, 
    onChange,
    onSubmit
}: any){
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    const formRef = useRef<HTMLFormElement>(null)
    
    
    return(
        <>
            <div className='fixed bottom-10 inset-x-0 px-5 '>
                <div className='mx-auto mt-10 bg-inherit w-full'>
                    <form
                        ref={formRef}
                        onSubmit={onSubmit}
                        className='w-full flex items-center justify-center text-black'
                    >
                       <input 
                            ref={inputRef}
                            name='message'
                            type="text"
                            autoFocus
                            spellCheck={false}
                            value={input}
                            onChange={onChange}
                            placeholder='Send a message...'
                            className='flex w-full lg:w-3/5 rounded-full px-5 py-3 items-center justify-center shadow-xl border bg-[#f5f5f5] border-opacity-10 border-black focus:border-black/50 focus:outline-none'
                       />
                    </form>
                </div>
            </div>
        </>
    )
}