'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { Button } from "../ui/button"; // Assuming Button is a custom component
import { FaGoogle } from 'react-icons/fa';

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
        <div className="md:max-w-2xl max-w-md p-20 border rounded-md bg-white shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h1 className="text-5xl font-bold text-center mb-7 text-purple-500">Create Your Account</h1>
                <p className="text-md md:text-lg text-center mb-8 text-black">Sign up to start the adventure</p>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-purple-300 rounded-md py-3 px-7 text-black focus:outline-none focus:border-purple-500"
                    required 
                />
                <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border-2 border-purple-300 rounded-md py-3 px-7 text-black focus:outline-none focus:border-purple-500"
                    required 
                />
                <input 
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border-2 border-purple-300 rounded-md py-3 px-7 text-black focus:outline-none focus:border-purple-500"
                    required 
                />
                {message && (
                    <div className={`text-center mt-2 text-${isSuccess ? 'green-600' : 'red-600'}`}>
                        <p>{message}</p>
                    </div>
                )}
                <Button type="submit" className="w-full bg-purple-500 py-6 text-white rounded-md hover:bg-purple-600">
                    Sign Up
                </Button>
                <div className="w-full flex items-center justify-center relative py-2">
                    <div className="w-full h-[1px] bg-black"></div>
                    <p className="absolute text-black/80 bg-[white] p-4">or</p>
                </div>
                <Link href="" className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 py-4 rounded-md">
                    <FaGoogle className="mr-2"/><span>Sign up with Google</span>
                </Link>
            </form>
            <div className="text-center mt-4 text-black">
                <p>Already have an account? <Link href="/login" className="text-purple-500 hover:text-purple-600">Log in</Link></p>
            </div>
        </div>
    );
}
