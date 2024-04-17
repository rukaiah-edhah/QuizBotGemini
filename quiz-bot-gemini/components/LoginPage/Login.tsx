"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaExclamation, FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useFormState, useFormStatus } from "react-dom";


export default function Login() {

  return (
    <div className="md:max-w-2xl max-w-md p-20 border rounded-md bg-white shadow-lg">
      {" "}
      {/* if we want a darker color then we should use bg-gray-900 */}
      <form action={''} className="space-y-6">
        <h1 className="text-5xl font-bold text-center mb-7 text-purple-500">
          Welcome Back!
        </h1>
        <p className="text-md md:text-lg text-center mb-8 text-black">
          Provide your credentials to kickstart the quiz
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
        <div className="text-right">
          <Link href="" className="hover:text-purple-500 text-black text-sm">
            Forgot your password?
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 py-6 text-white rounded-md"
        >
          Log in
        </Button>
        <div className="w-full flex items-center justify-center relative py-2">
          <div className="w-full h-[1px] bg-black"></div>
          <p className="absolute text-black/80 bg-[white] p-4">or</p>
        </div>
        <div className="flex justify-center space-x-4 py-4">
          <Link
            href=""
            className="flex items-center justify-center bg-red-500 hover:bg-red-600 py-3 px-2 md:px-8 rounded-md"
          >
            <FaGoogle className="mr-2" />
            <span>Google</span>
          </Link>
          <Link
            href=""
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 py-3 px-2 md:px-8 rounded-md"
          >
            <FaGithub className="mr-2" />
            <span>GitHub</span>
          </Link>
          <Link
            href=""
            className="flex items-center justify-center bg-blue-400 hover:bg-blue-500 py-3 px-2 md:px-8 rounded-md"
          >
            <FaApple className="mr-2" />
            <span>Apple</span>
          </Link>
        </div>
      </form>
      <div className="text-center mt-4 text-black">
        <p>
          New here?{" "}
          <Link
            href="/signup"
            className="text-purple-500 hover:text-purple-600"
          >
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
