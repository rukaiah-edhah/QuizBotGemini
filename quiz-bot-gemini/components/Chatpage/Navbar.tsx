import { PiCirclesThreeFill } from "react-icons/pi";
import Link from "next/link";
import ChatHistory from "./Chathistory";

export default function Navbar(){
    return (
        <nav className="fixed top-0 z-20 w-full bg-violet-200 text-black">
            <div className="flex flex-row items-center justify-start gap-2 px-4 py-5">
                <ChatHistory />
                <div className="flex flex-row gap-2">
                    <PiCirclesThreeFill className="w-6 h-6"/>
                    <h1 className="font-bold flex place-content-center">
                        QuizBot Gemini
                    </h1>
                </div>
                
            </div>
        </nav>
    )
}