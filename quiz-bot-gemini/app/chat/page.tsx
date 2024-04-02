import Chat from "@/components/Chatpage/Chat"
import Navbar from "@/components/Chatpage/Navbar";
import Footer from "@/components/Chatpage/Footer";

export default function Chatpage(){
    return(
        <main className="flex flex-col items-center justify-between bg-neutral-800 ">
            <Navbar />
                <div className="flex flex-row p-5 lg:p-10 gap-4 z-10 items-center justify-between w-full">
                    <div className="w-full mx-auto h-[78dvh] lg:h-[77dvh] lg:w-4/5 flex-grow flex-col flex">
                        <Chat />
                    </div>
                </div>
            <Footer />
        </main>
    )
}