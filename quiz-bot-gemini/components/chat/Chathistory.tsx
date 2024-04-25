import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import { IoMdMenu} from "react-icons/io";
import ChatHistorySheet from "../chat/chat-history-sheet";
import { getChats } from "@/actions/chats";
import { cache } from "react";

const list_items = [
    "React"
]

const loadChats = cache(async (userId?: string) => {
    return await getChats(userId)
})


export default async function ChatHistory({ userId }: {userId: string}) {

    const chats = await loadChats(userId)

    return(
        <>
            <div className="flex flex-col  h-full">
                <Sheet>
                    <SheetTrigger><IoMdMenu className="w-6 h-6 mr-2"/></SheetTrigger>
                    <SheetContent side="left" className=" border-none rounded-xl overflow-auto w-3/5 lg:w-1/5">
                        {chats?.length ? (
                            <div>
                                <ChatHistorySheet
                                    chats={chats}
                                />
                            </div>
                        ) : (
                            <div className="p-8 text-center">
                                <p className="mt-5 text-center">No chats available</p>
                            </div>
                        )}
                        
                        <div className="fixed bottom-14 items-center justify-center">
                            <Link
                                href="/"
                                className=""
                            >
                                <Button className="px-7 bg-black">
                                    Back
                                </Button>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}