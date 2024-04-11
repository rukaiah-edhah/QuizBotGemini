import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';

export function QuizResult({
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    unansweredQuestions = 0,
}: any){
    const correctPercentage = Math.round((correctAnswers / totalQuestions) * 100);
    const resultMessage = `You answered ${correctAnswers} out of ${totalQuestions} correctly`;

    let performanceMessage = "Great job!";
    if (correctPercentage < 50){
        performanceMessage = "Good Effort!"
    } else if (correctPercentage >= 50 && correctPercentage < 75){
        performanceMessage = "Well done!"
    }

    return (
        <Card className='max-w-md mx-auto'>
            <CardHeader>
                <CardTitle className='text-2xl font-bold'>Quiz Result</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col items-center space-y-4'>
                <div className='text-4xl font-bold'>{`${correctPercentage}`}</div>
                <div className='text-black'>{resultMessage}</div>
                <div className='text-lg font-medium text-center'>{performanceMessage}</div>
                {unansweredQuestions > 0 && (
                    <div className='text-sm text-red-300'>Note: You did not answer {unansweredQuestions} questions</div>
                )}
            </CardContent>
            <CardFooter className='flex justify-center'>
                <Button
                    className='bg-violet-200 hover:text-white transition-all'
                    onClick={() => window.location.reload()}
                >Try again</Button>
            </CardFooter>
        </Card>
    )
}