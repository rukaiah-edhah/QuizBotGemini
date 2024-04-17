"use client"
import Link from "next/link"
import { PiCirclesThreeFill } from "react-icons/pi";
import ResNavbar from "./ResNavbar";
import { metamorphouse } from "@/app/layout";
import {LoginLink, LogoutLink} from '@kinde-oss/kinde-auth-nextjs/components'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';


export const navItems = [
    {
        name: 'QuizBot Gemini',
        path: '#'
    },
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Quizzara',
        path: '/chat'
    },
]

export const title = [...navItems.filter(items => items.name === 'QuizBot Gemini')]
export const end = [...navItems.slice(-3)] 

export default function Navbar(){
    return(
        <nav className="sticky flex flex-col w-full max-w-full top-0 z-10 bg-white bg-opacity-70 rounded-full px-4 py-2 h-max backdrop-blur-2xl backdrop-saturate-200">
            <div className="flex items-center justify-between p-3 text-black">
                <ul className=" flex-row gap-6 justify-center hidden">
                    {navItems.slice(0,2).map((items: any) => (
                        <div key={items.name} className="">
                            <li>
                                <Link 
                                    href={items.path}
                                    className="hover:opacity-70 transition-all"
                                >
                                    {items.name}
                                </Link>
                            </li>
                        </div>
                    ))}
                </ul>

                <ul className="hidden lg:block">
                    {title.map((t) => (
                        <div key={t.name}>
                            <li className="gap-2 font-bold hover:cursor-pointer flex flex-row">
                                <PiCirclesThreeFill className="w-5 h-5 inline mx-auto" />
                                <p
                                    className={`inline align-middle
                                        ${metamorphouse.className}
                                    `}
                                >
                                    {t.name}
                                </p>
                            </li>
                        </div>
                    ))}
                </ul>
                <ul className="hidden lg:flex flex-row gap-6 justify-center">
                    {end.map((e) => (
                        <div key={e.name}>
                            <li>
                                <Link 
                                    href={e.path}
                                    className="hover:opacity-70 transition-all"
                                >{e.name}</Link>
                            </li>
                        </div>
                    ))}
                    <li>
                        <AuthButton />
                    </li>
                </ul>
                <ResNavbar />
            </div>
        </nav>
    )
}

export function AuthButton(){
    const { isAuthenticated } = useKindeBrowserClient();

    return isAuthenticated ? (
        <>
            <LogoutLink className="p-0 hover:opacity-70 transition-all">
                Logout
            </LogoutLink>
        </>
    ) : (
        <>
            <LoginLink 
                className="p-0 hover:opacity-70 transition-all"
            >
                Login
            </LoginLink>
        </>
    )
}