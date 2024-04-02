import ChatInput from "./ChatInput"
import ChatStartup from "./chat-startup"

export default function Chat(){

    return(
        <>
            <div className="w-full h-full bg-inherit flex flex-col justify-between p-2">
                <div className="flex items-center justify-center ">
                    <ChatStartup />
                </div>
                <div className="">
                    <ChatInput />
                </div>
            </div>
        </>
    )
}