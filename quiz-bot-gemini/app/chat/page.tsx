import Chat from "@/components/chat/Chat"
import Navbar from "@/components/chat/Navbar";

export default function Chatpage(){
    return(
        <main className="flex flex-col items-center justify-between ">
            <Navbar />
                <div className="max-w-3xl w-full flex items-start justify-center">
                    <Chat />
                </div>
        </main>
    )
}