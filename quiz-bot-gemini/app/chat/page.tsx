import { Chat } from "@/components/chat/Chat"
import Navbar from "@/components/chat/Navbar";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ChatAuthCard } from "@/components/chat/chat-auth-card";
import { Button } from "@/components/ui/button";

export default async function Chatpage(){
    const { isAuthenticated } = getKindeServerSession()


    return(
        <main className="flex flex-col items-center justify-between ">
            <Navbar />
            <div className="max-w-3xl w-full flex items-start justify-center">
                {await isAuthenticated() ? (
                    <Chat />
                ) : (
                    <div className="mt-24">
                        <ChatAuthCard>
                            Only signed in users can chat with Quizzara. Please Login to continue.
                            <LoginLink>
                                <Button className="px-7 bg-violet-200 text-black hover:text-white mt-5">
                                    Login
                                </Button>
                            </LoginLink>
                        </ChatAuthCard>
                    </div>
                )}
            </div>
        </main>
    )
}