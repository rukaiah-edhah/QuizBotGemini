import Chat from "@/components/Chatpage/Chat"
import ChatHistory from "@/components/Chatpage/Chathistory"
import Navbar from "@/components/Chatpage/Navbar";
import Footer from "@/components/Chatpage/Footer";

export default function Chatpage(){
    return(
        <main className="flex flex-col min-h-screen items-center justify-between space-y-0 bg-slate-100 ">
            <Navbar />
                <div className="flex flex-row p-5 lg:p-10 gap-4 z-10 items-center justify-between w-full">
                    {/* Must Debug for correct height, everything else is fine */}
                    <div className="mx-auto h-96 flex-col hidden lg:flex lg:w-1/5">
                      <ChatHistory />
                    </div>

                    <div className="w-full mx-auto h-96 lg:w-4/5 flex-grow flex-col flex">
                        <Chat />
                    </div>
                </div>
            <Footer />
        </main>
    )
}