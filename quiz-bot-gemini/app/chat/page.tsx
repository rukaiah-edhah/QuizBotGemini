import Chat from "@/components/Chatpage/Chat"
import Navbar from "@/components/Chatpage/Navbar";

export default function Chatpage(){
    return(
        <main className="flex flex-col items-center justify-between ">
            <Navbar />
                <div className="flex flex-row p-5 lg:p-10 gap-4 z-10 items-center justify-between w-full">
                    <div className="w-full mx-auto  lg:w-4/5  flex-col flex">
                        <Chat />
                    </div>
                </div>
        </main>
    )
}