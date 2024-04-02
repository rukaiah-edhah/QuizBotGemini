import { MdQuiz } from "react-icons/md";
import Link from "next/link";
import ChatHistory from "./Chathistory";

export default function Navbar(){
    return (
        <nav className="block top-0 z-10 w-full bg-violet-200 text-black">
            <div className="flex flex-row items-center justify-between gap-2 px-4 py-5">
                <ChatHistory />
                <div className="flex flex-row gap-2">
                    <MdQuiz className="w-6 h-6"/>
                    <h1 className="font-bold flex place-content-center">
                        QuizBot Gemini
                    </h1>
                </div>
                
            </div>
        </nav>
    )
}