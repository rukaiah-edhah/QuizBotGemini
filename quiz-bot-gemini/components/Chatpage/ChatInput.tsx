'use client';

import { useChat } from 'ai/react'

export default function ChatInput(){
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return(
        <div className='mx-auto'>
            {messages.map(m => (
                <div key={m.id}>
                    {m.role === 'user' ? 'User' : 'AI'}
                    {m.content}
                </div>
            ))}

            <form
                // onSubmit={handleSubmit}
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