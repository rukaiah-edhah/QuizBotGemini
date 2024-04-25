'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import RandomGif from './random-gifs';

export default function EmptyScreen(){
    return(
        <Card
            className='mt-16 max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md'
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
                    <p className='text-violet-500 mb-6 text-lg'>
                        Enter your preferences and start your personalized quiz!
                    </p>
                    <RandomGif/>
                    <p className='text-xs mt-6'>Powered by Giphy</p>
                </div>
            </CardContent>
        </Card>
    )
}