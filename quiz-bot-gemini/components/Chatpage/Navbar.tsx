import { MdQuiz } from "react-icons/md";
import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="block top-0 z-10 w-full bg-violet-200 text-black">
            <div className="flex flex-row items-center justify-between gap-2 px-4 py-5">
                <div className="flex flex-row gap-2">
                    <MdQuiz className="w-6 h-6"/>
                    <h1 className="font-bold">
                        QuizBot Gemini
                    </h1>
                </div>
                <Link
                    href="/"
                    className="px-4 py-1 bg-white rounded-lg"
                >
                    Back
                </Link>
            </div>
        </nav>
    )
}