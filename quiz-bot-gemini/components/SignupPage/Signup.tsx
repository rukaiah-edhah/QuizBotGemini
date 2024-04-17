"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button"; // Assuming Button is a custom component
import { FaApple, FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from 'sonner'

export default function Signup() {

  return (
    <div className="md:max-w-2xl max-w-md p-20 border rounded-md bg-white shadow-lg">
      <form action={''} className="space-y-6">
        <h1 className="text-5xl font-bold text-center mb-7 text-purple-500">
          Create Your Account
        </h1>
        <p className="text-md md:text-lg text-center mb-8 text-black">
          Sign up to start the adventure
        </p>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          className="w-full border-2 border-purple-300 rounded-md py-3 px-7 text-black focus:outline-none focus:border-purple-500"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className="w-full border-2 border-purple-300 rounded-md py-3 px-7 text-black focus:outline-none focus:border-purple-500"
          required
        />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          className="w-full border-2 border-purple-300 rounded-md py-3 px-7 text-black focus:outline-none focus:border-purple-500"
          required
        />
        <Button
          type="submit"
          className="w-full bg-purple-500 py-6 text-white rounded-md hover:bg-purple-600"
        >
          Sign Up
        </Button>
        <div className="w-full flex items-center justify-center relative py-2">
          <div className="w-full h-[1px] bg-black"></div>
          <p className="absolute text-black/80 bg-[white] p-4">or</p>
        </div>
        <div className="flex justify-center space-x-4 py-4">
          <Link
            href=""
            className="flex items-center justify-center bg-red-500 hover:bg-red-600 py-3 px-2 md:px-10 rounded-md"
          >
            <FaGoogle className="mr-2" />
            <span>Google</span>
          </Link>
          <Link
            href=""
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 py-3 px-2 md:px-10 rounded-md"
          >
            <FaGithub className="mr-2" />
            <span>GitHub</span>
          </Link>
          <Link
            href=""
            className="flex items-center justify-center bg-blue-400 hover:bg-blue-500 py-3 px-2 md:px-10 rounded-md"
          >
            <FaApple className="mr-2" />
            <span>Apple</span>
          </Link>
        </div>
      </form>
      <div className="text-center mt-4 text-black">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-purple-500 hover:text-purple-600">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
