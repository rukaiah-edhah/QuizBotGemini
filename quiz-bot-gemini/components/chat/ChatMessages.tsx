import { UIState } from "@/lib/chat/actions";
import { FaExclamation } from "react-icons/fa";
import Link from "next/link";
import { SpinnerMessage, UserMessage, AIMessage, AICard } from "@/components/chat/message";

export function ChatMessages({
    messages
}: any) {
    return messages.length ? (
        <div className="relative mx-auto max-w-3xl grid auto-rows-max gap-8 px-4 mt-16">

        {messages.map((message: any) => (
            <div key={message.id}>
                {/* <SpinnerMessage /> */}
                {message.role === 'user' ? 
                (<UserMessage>{message.content}</UserMessage>) :
                (<AICard><AIMessage content={message.content} /></AICard>)}
            </div>  
        ))}
        </div>
    ): null
}