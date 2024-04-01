import {
    Card,
    CardContent,
} from "@/components/ui/card"
import ChatInput from "./ChatInput"

export default function Chat(){

    return(
        <>
            <Card className="w-full h-[700px] border-none flex flex-col justify-end">
                <div className="flex-1"></div>
                <CardContent className="p-5 lg:p-10">
                    <ChatInput />
                </CardContent>
            </Card>
        </>
    )
}