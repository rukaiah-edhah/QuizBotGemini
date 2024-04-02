import {
    Card,
    CardContent,
} from '@/components/ui/card'
import ChatSetupQuestions from './chat-setup-questions'

export default function ChatStartup(){
    return(
        <>
            <Card className='border-none px-5 pt-5  w-full md:w-3/5 lg:w-2/5'>
                <CardContent className=''>
                    <h1 className='font-bold text-2xl leading-5'>Personalize your Quiz</h1>

                    <div>
                        <ChatSetupQuestions />
                    </div>
                </CardContent>
            </Card>
        </>
    )
}