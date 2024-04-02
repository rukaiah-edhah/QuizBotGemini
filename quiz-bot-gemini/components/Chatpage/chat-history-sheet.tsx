export default function ChatHistorySheet({ list_items }: {list_items: string[]} ){
    return(
        <>
            {list_items.map((l) => (
               <p 
                   key={l}
                   className="px-5 py-1 mt-2 rounded-full hover:bg-black/20 hover:cursor-pointer"
               >
                   {l}
               </p>
            ))}
        </>
    )
}