import {
    Card,
    CardContent,
} from "@/components/ui/card"
import ChatInput from "./ChatInput"


export default function Chat(){

    return(
        <>
            <Card className="w-full h-full border border-black/20 bg-inherit flex flex-col justify-end">
                <div className="flex-1"></div>
                <CardContent className="">
                    <ChatInput />
                </CardContent>
            </Card>
        </>
    )
}