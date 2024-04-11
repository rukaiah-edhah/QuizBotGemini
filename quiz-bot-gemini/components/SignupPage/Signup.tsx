'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { Button } from "../ui/button"; // Assuming Button is a custom component

export default function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsSuccess(false);

        const response = await fetch('/api/signup', { // Adjust the URL as needed
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (response.ok) {
            setMessage('User created successfully. Please login.');
            setIsSuccess(true);
            setFormData({ email: '', password: '', confirmPassword: '' });
            // Optionally, redirect the user to the login page or another page
            // window.location.href = '/login';
        } else {
            setMessage(data.message || 'An error occurred, please try again.');
        }
    };

    return (
        <>  
            <div className="container mx-auto px-4">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-violet-700 text-xl mb-4">Sign Up</h1>
                    {message && (
                        <div className={`message ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                            <p>{message}</p>
                        </div>
                    )}
                    <label htmlFor="email" className="block text-gray-700">
                        Email:
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="border border-gray-300 rounded-md py-2 px-4 text-black focus:outline-none focus:border-blue-500 w-full mt-1"
                            required 
                        />
                    </label>
                    <label htmlFor="password" className="block text-gray-700">
                        Password:
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            className="border border-gray-300 rounded-md py-2 px-4 text-black focus:outline-none focus:border-blue-500 w-full mt-1"
                            required 
                        />
                    </label>
                    <label htmlFor="confirmPassword" className="block text-gray-700">
                        Confirm Password:
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            value={formData.confirmPassword} 
                            onChange={handleChange} 
                            className="border border-gray-300 rounded-md py-2 px-4 text-black focus:outline-none focus:border-blue-500 w-full mt-1"
                            required 
                        />
                    </label>
                    <Button type="submit" className="w-full px-5 bg-violet-700 py-2 text-white rounded-md hover:bg-violet-800">
                        Sign Up
                    </Button>
                </form>
                <div className="flex flex-col items-center justify-center mt-4 space-y-2">
                    <Link href="/login" className="px-5 bg-violet-700 py-2 text-white rounded-md hover:bg-violet-800">
                        Login
                    </Link>
                    <Link href="/" className="px-5 bg-gray-700 py-2 text-white rounded-md hover:bg-gray-800">
                        Back
                    </Link>
                </div>
            </div>
        </>
    );
}
