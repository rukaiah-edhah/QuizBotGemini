"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { Button } from "../ui/button";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform login logic here (backend integration).
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <>  
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                <div className="mb-4">
                    <h1 className="text-violet-700 mb-9">Login</h1>
                    <label htmlFor="email" className="block text-gray-700">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="border border-gray-300 rounded-md py-2 px-4 text-black focus:outline-none focus:border-blue-500"
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="border border-gray-300 rounded-md py-2 px-4 text-black focus:outline-none focus:border-blue-500"
                        required 
                    />
                </div>
                <Button type="submit" className="px-5 bg-violet-700 py-2 text-white rounded-md hover:bg-gray-900">
                    Login
                </Button>
            </form>
            <div className="flex items-start justify-center mt-4">
                <Link href="/signup" className="px-5 bg-violet-700 py-2 text-white rounded-md hover:bg-gray-900">Sign Up</Link>
                <Link href="/" className="px-5 bg-violet-700 py-2 ml-3 text-white rounded-md hover:bg-gray-900">Back</Link>
            </div>
        </>
    );
}
