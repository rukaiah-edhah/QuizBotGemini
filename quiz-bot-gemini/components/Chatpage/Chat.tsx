import ChatInput from "./ChatInput"
import ChatStartup from "./chat-startup"

export default function Chat(){

    return(
        <>
            <div className="w-full h-4/5 box-border bg-inherit flex flex-col justify-between p-2 mx-auto">
                {/* <div className="flex items-start justify-center ">
                    <ChatStartup />
                </div> */}
                <div className="">
                    <ChatInput />
                </div>
            </div>
        </>
    )
}