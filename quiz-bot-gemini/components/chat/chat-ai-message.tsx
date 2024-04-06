import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ChatAIMessageProps {
    content: string;
}

interface QuizContent {
    subject: string,
    questions: string[]
}

const parseQuestions = (content: string): QuizContent => {
    const content_regex = content.replace(/\*+/g, '');
    let [subject, questionsBlock] = content_regex.split(/Question/, 2);
    const questions = questionsBlock ? questionsBlock.split('Question').filter(question => question.trim() !== '').map((question, index) => `Question\n${question}\n`) : [];

    return { subject: subject.trim(), questions };
}

// customize the quiz ui here

export const ChatAIMessage: React.FC<ChatAIMessageProps> = ({ content }) => {

    const { subject, questions } = parseQuestions(content);

    return(
        <>
            <Card>
                <CardContent className='flex flex-col items-start space-x-4 p-4'>
                    <div className='mb-4'>
                        <h2 className='text-xl font-bold'>{subject}</h2>
                    </div>
                    {questions.map((question, index) => (
                        <div className='grid gap-2'>
                            <div key={index} className='grid gap-2'>
                                <p className='text-sm font-semibold'>{question}</p>
                            </div>   
                        </div>
                    ))}
                </CardContent>
            </Card>
        </>
    )
}