import Chat from "@/components/Chatpage/Chat"
import Navbar from "@/components/Chatpage/Navbar";

export default function Chatpage(){
    return(
        <main className="flex flex-col items-center justify-between ">
            <Navbar />
                <div className="max-w-3xl w-full">
                    <Chat />
                </div>
        </main>
    )
}