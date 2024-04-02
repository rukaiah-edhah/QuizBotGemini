import {
    Card,
    CardContent,
} from "@/components/ui/card"

const list_items = [
    "React",
]


export default function ChatHistory(){
    return(
        <>
            <div className="flex flex-col overflow-auto h-full">
                <Card className="w-full h-full border-none flex flex-col p-2 overflow-auto">
                    <small className="opacity-70">Today</small>
                    <CardContent>
                        {list_items.map((l) => (
                            <p 
                                key={l}
                                className="px-5 py-1 mt-2 rounded-full hover:bg-black/20 hover:cursor-pointer"
                            >
                                {l}
                            </p>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </>
    )
}