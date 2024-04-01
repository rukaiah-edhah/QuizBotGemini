import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function ChatHistory(){
    return(
        <>
            <Card className="w-full h-[700px] border-none flex flex-col p-2">
                <small className="opacity-70">Today</small>
                <CardContent>
                    <p className="px-5 py-1 mt-2 rounded-full hover:bg-black/20 hover:cursor-pointer">React</p>
                </CardContent>
            </Card>
        </>
    )
}