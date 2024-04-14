import { Chat } from "@/components/chat/Chat"
import Navbar from "@/components/chat/Navbar";
import { nanoid } from '@/lib/utils';

export default function Chatpage(){
    const id = nanoid()

    return(
        <main className="flex flex-col items-center justify-between ">
            <Navbar />
                <div className="max-w-3xl w-full flex items-start justify-center">
                    <Chat id={id} session={''} missingKeys={[]} initialMessages={[]}/>
                </div>
        </main>
    )
}