"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { Button } from "../ui/button";
import axios from 'axios'; // Import axios for making HTTP requests
import { FaGoogle } from "react-icons/fa";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to handle error messages

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Make a POST request to your API endpoint
            const response = await axios.post('/api/login', { email, password });
            console.log(response.data); // Process the response as needed
            // Redirect or update UI upon successful login
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                // Handle response errors (e.g., 401 Unauthorized)
                setError(error.response.data.message);
            } else {
                // Handle other errors (network issues, etc.)
                setError('An unexpected error occurred');
            }
        }
    };
    return (
            <div className="md:max-w-2xl max-w-md p-20 border rounded-md bg-white shadow-lg"> {/* if we want a darker color then we should use bg-gray-900 */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h1 className="text-5xl font-bold text-center mb-7 text-purple-500">Welcome Back!</h1>
                    <p className="text-md md:text-lg text-center mb-8 text-black">Provide your credentials to kickstart the quiz</p>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-2 border-purple-300 rounded-md py-3 px-7 text-black focus:outline-none focus:border-purple-500"
                        required 
                    />
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border-2 border-purple-300 rounded-md py-3 px-7 text-black focus:outline-none focus:border-purple-500"
                        required 
                    />
                    <div className="text-right">
                        <Link href="" className="hover:text-purple-500 text-black text-sm">Forgot your password?</Link>
                    </div>
                    <Button type="submit" className="w-full bg-purple-500 py-6 text-white rounded-md hover:bg-purple-600">
                        Log in
                    </Button>
                    <div className="w-full flex items-center justify-center relative py-2">
                        <div className="w-full h-[1px] bg-black"></div>
                        <p className="absolute text-black/80 bg-[white] p-4">or</p>
                    </div>
                    <Link href="" className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 py-4 rounded-md ">
                        <FaGoogle className="mr-2"/><span>Log in with Google</span>
                    </Link>
                </form>
                <div className="text-center mt-4 text-black">
                    <p>New here? <Link href="/signup" className="text-purple-500 hover:text-purple-600">sign up</Link></p>
                </div>
            </div>
    );
}
