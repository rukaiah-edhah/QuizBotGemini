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


const list_items = [
    "React"
]


export default function ChatHistory(){
    return(
        <>
            <div className="flex flex-col  h-full">
                <Sheet>
                    <SheetTrigger><IoMdMenu className="w-6 h-6 mr-2"/></SheetTrigger>
                    <SheetContent side="left" className=" border-none rounded-xl overflow-auto w-3/5 lg:w-1/5">
                        <SheetHeader>
                            <SheetTitle className="opacity-70"> 
                                <small>Today</small>
                            </SheetTitle>
                        </SheetHeader>
                        <div>
                            <ChatHistorySheet
                                list_items={list_items}
                            />
                        </div>
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