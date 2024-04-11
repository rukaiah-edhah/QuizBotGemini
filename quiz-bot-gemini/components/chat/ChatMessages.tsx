import { UIState } from "@/lib/chat/actions";
import { FaExclamation } from "react-icons/fa";
import Link from "next/link";

export interface ChatMessages {
    messages: UIState
    session?: any
    isShared: boolean
}

export function ChatMessages({
    messages, session, isShared
}: ChatMessages) {
    return messages.length ? (
        <div className="relative mx-auto max-w-3xl grid auto-rows-max gap-8 px-4">
        {/* user authentication bit here */}
        {!isShared && !session ? (
            <>
            
            </>
        ): null}

        {messages.map(message => (
            <div key={message.id}>
                {message.spinner}
                {message.display}
                {message.attachments}
            </div>  
        ))}
        </div>
    ): null
}