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
import { IoMdMenu} from "react-icons/io";
import ChatHistorySheet from "../Chatpage/chat-history-sheet";


const list_items = [
    "React"
]


export default function ChatHistory(){
    return(
        <>
            <div className="flex flex-col  h-full">
                <Sheet>
                    <SheetTrigger><IoMdMenu className="w-6 h-6 mr-2"/></SheetTrigger>
                    <SheetContent side="left" className="bg-[#f5f5f5] text-black rounded-xl overflow-auto w-3/5 lg:w-1/5">
                        <SheetHeader>
                            <SheetTitle className="text-black"> 
                                <small>Today</small>
                            </SheetTitle>
                        </SheetHeader>
                        <div>
                            <ChatHistorySheet
                                list_items={list_items}
                            />
                        </div>
                        <div className="fixed bottom-14 text-white items-center justify-center">
                            <Link
                                href="/"
                                className="px-4 py-1 bg-black rounded-lg"
                            >
                                Back
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}