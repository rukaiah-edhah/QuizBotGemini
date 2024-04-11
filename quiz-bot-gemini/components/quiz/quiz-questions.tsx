'use client'
import React, { useState } from 'react';
import { useActions, useUIState } from 'ai/rsc';
import { useToast } from '@/components/ui/use-toast';
import { MemoizedReact } from '../chat/markdown';
import { UserMessage } from '../chat/message';
import { ToastAction } from '../ui/toast';
import { nanoid } from 'nanoid'
import { Button } from '../ui/button';

export function QuizQuestion({
    question, 
    questionType, 
    possibleAnswers,
    showAnswer,
    answer,
    explanation
}: any){
    const [answerUI, setAnswerUI] = useState<boolean>(false);
    const toast = useToast();
    const [selectedOption, setSelectedOption] = useState(questionType === 'multiple-choice' ? [] : '');
    const [, setMessages] = useUIState();
    const { submitAnswer } = useActions()
    const isMultipleChoice = questionType === 'multiple-choice';
    const handleOptionChange = (e: any) => {
        const value = e.target.value;
        if (isMultipleChoice) {
            setSelectedOption((prev: any) => 
                prev.includes(value) ? prev.filter((option: any) => option !== value) : [...prev, value]
            );
        } else {
            setSelectedOption(value);
        }
    }

    const handleSubmit = async (e: any) =>{
        e.preventDefault();

        if (isMultipleChoice && selectedOption.length === 0){
            toast.toast({
                title: 'No option selected',
                description: 'Please select one option',
                action: <ToastAction altText='Okay'>Okay</ToastAction>
            });
            return;
        } else if (!isMultipleChoice && !selectedOption){
            toast.toast({
                title: 'No option selected',
                description: 'Please select one option',
                action: <ToastAction altText='Okay'>Okay</ToastAction>
            });
            return;
        }

        setMessages((currentMesages: any) => [
            ...currentMesages,
            {
                id: nanoid(),
                display: <UserMessage>{`My answer is: "${selectedOption}`}</UserMessage>
            },
        ]);

        const res = await submitAnswer(selectedOption);

        setAnswerUI(res.answerUI)
        setMessages((currentMessages: any) => [
            ...currentMessages,
            res.newMessage,
        ])
    };

    return (
        <div className='max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md'>
            <div className='mb-4'>
                <MemoizedReact>
                    {question}
                </MemoizedReact>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='space-y-4'>
                    {possibleAnswers.map((option: string, index: any) => (
                        <label key={index} className='flex items-center'>
                            <input 
                                className={`focus:outline-none focus:border-violet-200 ${isMultipleChoice ? "form-checkbox h-5 w-5" : "form-radio h-5 w-5"}`}
                                name={isMultipleChoice ? `option_${index}` : 'quiz'}
                                type={isMultipleChoice ? "checkbox": "radio"}
                                value={option}
                                onChange={handleOptionChange}
                                checked={isMultipleChoice ? selectedOption.includes(option) : selectedOption === option}
                            />
                            <span className='ml-2 prose'>
                                <MemoizedReact>
                                    {option}
                                </MemoizedReact>
                            </span>
                        </label>
                    ))} 
                </div>
                <div className='mt-6'>
                    <Button
                        className='bg-violet-200 px-7 py-2 flex items-center justfiy-center text-black hover:text-white transition-all'
                        disabled={answerUI}
                    >
                        Submit Answer
                    </Button>
                </div>
            </form>
            {showAnswer && answerUI && (
                <div className='mt-4'>
                    <div className='mt-6'>
                        {explanation && (
                            <p className='text-sm mt-1'>{explanation}</p>
                        )}
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-lg font-semibold'>Explanation</h3>
                        <p>{`The correct answer is: "${answer}"`}</p>
                    </div>
                </div>
            )}
        </div>
    )
}