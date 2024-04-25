import { Chat } from "@/lib/types"



export default function ChatHistorySheet({ chats}: {chats: Chat[]}) {
    if (!chats?.length) return null

    return(
        <>
            {chats.map((chat, index) => (
                <span key={index}>{chat.title}</span>
            ))}
        </>
    )
}