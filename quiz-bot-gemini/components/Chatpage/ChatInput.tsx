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
                className='w-full flex items-center justify-center'
            >
                <input 
                    value={input}
                    placeholder='Send a message...'
                    onChange={handleInputChange}
                    className='flex w-4/5 rounded-full px-5 py-3 items-center justify-center shadow-xl border border-opacity-10 border-black focus:border-black/50 focus:outline-none'
                />
            </form>
        </div>
    )
}