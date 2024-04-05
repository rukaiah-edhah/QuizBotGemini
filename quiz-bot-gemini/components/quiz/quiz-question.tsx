'use client'
import React, { useState } from 'react';
import { useActions, useUIState } from 'ai/rsc'
import { useToast } from '../ui/use-toast';
import { ToastAction } from '../ui/toast';
import { MemoizedReact } from '../Chatpage/markdown';
import { UserMessage } from './message';
import { AI } from '@/app/action'
import { Button } from '../ui/button';

export function QuizQuestion({
    question, 
    questionType,
    possibleAnswers,
    showAnswer,
    answer, 
    explanation, 
    // source
}: any) {
    const [answerUI, setAnswerUI] = useState<boolean>(false)
    const toast = useToast();
    const [selectedOption, setSelectedOption] = useState(questionType === 'true/false' ? 'true' : '' || questionType === 'multiple choice' ? possibleAnswers[0] : '');
    const [, setMessages] = useUIState<typeof AI>();
    const { submitAnswer } = useActions<typeof AI>();
    const isMultipleChoice = questionType === 'multiple choice';
    const isTrueFalse = questionType === 'true/false';
    const handleOptionChange = (e: any) => {
        const value = e.target.value;
        if (isMultipleChoice){
            setSelectedOption((prev: any) =>
                prev.includes(value) ? prev.filter((option: any) => option !== value) : [...prev, value]
            );
        } else {
            setSelectedOption(value);
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (isMultipleChoice && selectedOption.length === 0){
            toast.toast({
                title: 'Please select an option',
                description: 'Please select an option',
                action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
            });
            return;
        } else if (!isMultipleChoice && !selectedOption){
            toast.toast({
                title: 'Please select an option',
                description: 'Please select an option',
                action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
            })
            return;
        }

        setMessages((currentMessages: any) => [
            ...currentMessages,
            {
                id: Date.now(),
                display: <UserMessage>{`Answer: "${selectedOption}"`}</UserMessage>
            }
        ]);

        const response = await submitAnswer(selectedOption);
        setAnswerUI(response.answerUI)

        setMessages((currentMessages: any) => [
            ...currentMessages,
            response.newMessage
        ])
    };

    return(
        <div className='max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md'>
            <div className='mb-4'>
                <MemoizedReact>
                    {question}
                </MemoizedReact>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='space-y-4'>
                    {possibleAnswers.map((option: any, index: number) => (
                        <label key={index} className='flex items-center'>
                            <input 
                                className={isMultipleChoice ? "form-checkbox h-5 w-5" : "form-radio h-5 w-5"}
                                name={isMultipleChoice ? `option_${index}` : 'quiz'}
                                type={isMultipleChoice ? 'checkbox' : 'radio'}
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
                <div>
                    <Button
                        disabled={answerUI}
                        className='bg-violet-200 px-7 py-2 flex items-center justfiy-center text-black hover:text-white'
                        type='submit'
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
                    {/* <div className='mt-4'>

                    </div> */}
                    <div className='mt-4'>
                        <h3 className='text-lg font-semibold'>Explanation</h3>
                        <p>{`The correct answer is: "${answer}"`}</p>
                    </div>   
                </div>    
            )}
        </div>
    )


}