import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';


export default function EmptyScreen(){
    return(
        <Card
            className='max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md'
        >
            <CardHeader>
                <CardTitle className='text-center text-2xl font-bold text-black'>
                    Personalize your Quiz
                </CardTitle>
                <CardDescription className='text-center text-black'>
                    Enter your preferences
                </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col items-start space-x-4 p-4'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-violet-500'>
                        Enter your preferences and start your personalized quiz!
                    </p>
                </div>

                <div className='flex flex-col items-center justify-center py-5 mt-10'>
                    <p className='text-violet-500'>Happy Learning!</p>
                    <p>My developing team, you can design this to however you like!</p>
                </div>
            </CardContent>
        </Card>
    )
}