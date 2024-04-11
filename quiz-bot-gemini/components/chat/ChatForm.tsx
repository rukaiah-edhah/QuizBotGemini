'use client'

import { useEffect, useRef, useState } from 'react';
import { UserMessage } from './message';

import { Button } from '../ui/button';

import { type AI } from '@/lib/chat/actions';
import { nanoid } from 'nanoid';
import { useActions, useUIState } from 'ai/rsc';

export default function ChatForm({
    input, 
    setInput
}: {
    input: string,
    setInput: (value: string) => void
}){
    const { submitUserMessage } = useActions()
    const inputRef = useRef<HTMLInputElement>(null);
    const [_, setMessages] = useUIState<typeof AI>()

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
                        onSubmit={ async (e: any) => {
                            e.preventDefault();

                            if (window.innerWidth < 600) {
                                e.target['message']?.blur()
                            }

                            const value = input.trim()
                            console.log(value)
                            setInput('')
                            if (!value) return

                            setMessages((currentMessages: any) => [
                                ...currentMessages,
                                {
                                    id: nanoid(),
                                    display: <UserMessage>{value}</UserMessage>
                                }
                            ])

                            const responseMessage = await submitUserMessage(value)
                            setMessages((currentMessages: any) => [
                                ...currentMessages, responseMessage
                            ])
                        }}
                        className='w-full flex items-center justify-center text-black'
                    >
                       <input 
                            ref={inputRef}
                            name='message'
                            type="text"
                            autoFocus
                            spellCheck={false}
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder='Send a message...'
                            className='flex w-full lg:w-3/5 rounded-full px-5 py-3 items-center justify-center shadow-xl border bg-[#f5f5f5] border-opacity-10 border-black focus:border-black/50 focus:outline-none'
                       />
                    </form>
                </div>
            </div>
        </>
    )
}