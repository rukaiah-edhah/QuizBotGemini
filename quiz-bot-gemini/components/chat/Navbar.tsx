import { PiCirclesThreeFill } from "react-icons/pi";
import Link from "next/link";
import ChatHistory from "./Chathistory";
import { metamorphouse } from "@/app/layout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {LoginLink, LogoutLink} from '@kinde-oss/kinde-auth-nextjs/components'


export default async function Navbar(){
    const { getUser } = getKindeServerSession()
    const user = await getUser();

    return (
        <nav className="fixed top-0 z-20 w-full bg-violet-200 text-black">
            <div className="flex flex-row items-center justify-between gap-2 px-4 py-5">
                <ChatHistory />
                <div className="flex flex-row gap-2">
                    <PiCirclesThreeFill className="w-6 h-6"/>
                    <h1 className={`font-bold flex place-content-center
                        ${metamorphouse.className}
                    `}>
                        QuizBot Gemini
                    </h1>
                </div>
                <div>
                    <AuthButton user={user} />
                </div>
            </div>
        </nav>
    )
}

export function AuthButton({ user }: any){

    return user ? (
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