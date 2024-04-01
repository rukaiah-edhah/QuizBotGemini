import Chat from "@/components/Chatpage/Chat"
import ChatHistory from "@/components/Chatpage/Chathistory"

export default function Chatpage(){
    return(
        <main className="flex items-center justify-between bg-slate-100 p-5 lg:p-10 gap-4">
            <div className="w-1/5 hidden lg:block">
              <ChatHistory />
            </div>

            <div className="w-full lg:w-4/5">
                <Chat />
            </div>
        </main>
    )
}