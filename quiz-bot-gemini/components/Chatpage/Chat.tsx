import ChatInput from "./ChatInput"


export default function Chat(){

    return(
        <>
            <div className="w-full h-full bg-inherit flex flex-col justify-end p-2">
                <div>
                    <ChatInput />
                </div>
            </div>
        </>
    )
}