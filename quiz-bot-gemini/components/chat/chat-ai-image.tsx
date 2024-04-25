import ai_bot from '@/public/Quizzara.png';
import Image from 'next/image';

export default function ChatAiImage(){
    return(
        <>
            <Image 
                src={ai_bot}
                width={24}
                height={24}
                alt="ai image"
                className='rounded-full'
            />
        </>
    )
}