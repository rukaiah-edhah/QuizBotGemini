import 'server-only'

import { UserMessage, AIMessage, AICard, SpinnerMessage } from '@/components/chat/message';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { google } from 'ai/google'
import { createAI, getMutableAIState, createStreamableValue, createStreamableUI } from 'ai/rsc';

import { number, z } from 'zod';
import { Chat }from '@/lib/types'

import { QuizStart } from '@/components/quiz/quiz-start';
import { QuizResult } from '@/components/quiz/quiz-results';
import { QuizQuestion } from '@/components/quiz/quiz-questions';
import { Answer } from '@/components/quiz/answer';
import { nanoid, sleep } from '@/lib/utils'
import { experimental_streamText } from 'ai';
import React from 'react';

import { rateLimit } from '@/lib/chat/rate-limit';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || '');

async function submitUserMessage(content: string){
    'use server'

    await rateLimit()

    const aiState: any = getMutableAIState()
    
    aiState.update({
        ...aiState.get(),
        messages: [
            ...aiState.get().messages,
            {
                id: nanoid(),
                role: 'user',
                content: `${aiState.get().interactions.join('\n\n')}\n\n${content}`
            }
        ]
    })
    
    const history = aiState.get().messages.map((message: any) => ({
        role: message.role,
        content: message.content
    }))
    
    const textStream = createStreamableValue('')
    const spinnerStream = createStreamableUI(<SpinnerMessage />)
    const messageStream = createStreamableUI(null)
    const uiStream = createStreamableUI()

    ;( async () => {
        try {
            const result = await experimental_streamText({
                model: google.generativeAI('models/gemini-pro'),
                temperature: 0,
                tools: {
                    start_quiz: {
                        description: 'Initialize the quiz given the user inputs',
                        parameters: z.object({
                            topics: z.string().optional().default('reactjs'),
                            numberOfQuestions: z.number().optional(),
                            questionLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional().default('Beginner'),
                            questionType: z.enum(['Multiple Choice', 'True/False']).optional().default('Multiple Choice')
                        })
                    },
                    quiz_question: {
                        description: 'Generate a quiz question',
                        parameters: z.object({
                            question: z.string(),
                            questionType: z.enum(['Multiple Choice', 'True/False']),
                            possibleAnswers: z.array(z.string()).optional(),
                            showAnswer: z.boolean().optional(),
                            answer: z.string().optional(),
                            explanation: z.string().optional(),
                        })
                    },
                    show_answer: {
                        description: 'Show the answer',
                        parameters: z.object({
                            icon: z.enum(['check', 'exclamation']).optional().default('check'),
                            text: z.string().optional().default('Correct!')
                        })
                    },
                    display_result: {
                        description: 'Display the result',
                        parameters: z.object({
                            totalQuestions: z.number(),
                            correctAnswers: z.number(),
                            incorrectAnswers: z.number(),
                            unansweredQuestions: z.number().optional()
                        })
                    }
                },
                system: `\
                You are a quiz bot.
                You are given a topic chosen by the user with the speciified number of questions also provided by the user.
                
                List the questions only and wait till the user answers the questions.
                
                Here's the flow: 
                    1. Prompt for information to start the quiz.
                    2. Start the quiz
                    3. Show the quiz questions.
                    4. Show answer when applicable
                    5. Display the results at the end    
                `,
                messages: [...history]
            })

            let textContent = ''
            spinnerStream.done(null)

            for await (const delta of result.fullStream){
                const { type } = delta

                if (type === 'text-delta'){
                    const { textDelta } = delta

                    textContent += textDelta
                    messageStream.update(<AIMessage content={textContent} />)

                    aiState.update({
                        ...aiState.get(),
                        messages: [
                            ...aiState.get().messages,
                            {
                                id: nanoid(),
                                role: 'assistant',
                                content: textContent
                            }
                        ]
                    })
                } else if (type === 'tool-call'){ // you know what to do here anc continue it
                    const { toolName, args} = delta

                    if (toolName === 'start_quiz'){
                        const { topics, numberOfQuestions, questionLevel, questionType } = args

                        uiStream.update(
                            <AICard>
                                <QuizStart {...args}/>
                            </AICard>
                        )

                        aiState.done({
                            ...aiState.get(),
                            interactions: [],
                            messages: [
                                ...aiState.get().messages,
                                {
                                    id: nanoid(),
                                    role: 'assistant',
                                    content: JSON.stringify({topics, numberOfQuestions, questionLevel, questionType}), //`initialized quiz for ${topics}`,
                                    display: {
                                        name: 'start_quiz',
                                        props: {
                                            topics,
                                            numberOfQuestions,
                                            questionLevel,
                                            questionType
                                        }
                                    }
                                }
                            ]
                        })
                    } else if (toolName === 'quiz_question'){
                        const { question, questionType, possibleAnswers, showAnswer, answer, explanation } = args

                        aiState.done({
                            ...aiState.get(),
                            interactions: [],
                            messages: [
                                ...aiState.get().messages,
                                {
                                    id: nanoid(),
                                    role: 'assistant',
                                    content: JSON.stringify({question, questionType, possibleAnswers, showAnswer, answer, explanation}), //"Here's your question",
                                    display: {
                                        name: 'quiz_question',
                                        props: {
                                            question,
                                            questionType,
                                            possibleAnswers,
                                            showAnswer,
                                            answer,
                                            explanation
                                        }
                                    }
                                }
                            ]
                        })

                        uiStream.update(
                            <AICard>
                                <QuizQuestion  
                                    question={question} 
                                    questionType={questionType}
                                    possibleAnswers={possibleAnswers}
                                    showAnswer={showAnswer}
                                    answer={answer}
                                    explanation={explanation}
                                />
                            </AICard>
                        )
                    } else if (toolName === 'show_answer'){
                        const { icon, text} = args;

                        aiState.done({
                            ...aiState.get(),
                            interactions: [],
                            messages: [
                                ...aiState.get().messages,
                                {
                                    id: nanoid(),
                                    role: 'assistant',
                                    content: JSON.stringify({icon, text}),//`Here is the answer ${text}`,
                                    display: {
                                        name: 'show_answer',
                                        props: {
                                            icon,
                                            text
                                        }
                                    }
                                }
                            ]
                        })

                        uiStream.update(
                            <AICard>
                                <Answer  icon={icon} text={text}/>
                            </AICard>
                        )
                    } else if (toolName === 'display_result'){
                        const { totalQuestions, correctAnswers, incorrectAnswers, unansweredQuestions } = args;

                        aiState.done({
                            ...aiState.get(),
                            interactions: [],
                            messages: [
                                ...aiState.get().messages,
                                {
                                    id: nanoid(),
                                    role: 'assistant',
                                    content: JSON.stringify({totalQuestions,correctAnswers,incorrectAnswers,unansweredQuestions}),//`Here is your results`,
                                    display: {
                                        name: 'display_result',
                                        props: {
                                            totalQuestions,
                                            correctAnswers,
                                            incorrectAnswers, 
                                            unansweredQuestions
                                        }
                                    }
                                }
                            ]
                        })

                        uiStream.update(
                            <AICard>
                                <QuizResult {...args} />
                            </AICard>
                        )
                    }
                }
            }

            uiStream.done()
            textStream.done()
            messageStream.done()
        } catch (e) {
            console.error(e)

            // const error = new Error(
            //     'The AI got rate limited or , please try again later'
            // )

            // uiStream.error(error)
            // textStream.error(error)
            // messageStream.error(error)
            aiState.done()
        }
    })()

    return {
        id: nanoid(),
        attachments: uiStream.value,
        spinner: spinnerStream.value,
        display: messageStream.value
    }
}

async function submitAnswer(answer: string){
    'use server'

    const res = await submitUserMessage(`${answer}`)

    return {
        answerUI: true,
        newMessage: res
    };
}

export type Message = {
    role: 'user' | 'assistant' | 'system' | 'function' | 'data' | 'tool'
    content: string
    id?: string
    name?: string
    display?: {
        name: string
        props: Record<string, any>
    }
}

export type AIState = {
    chatId: string
    interactions?: string[]
    messages: Message[]
}

export type UIState = {
    id: string
    display: React.ReactNode,
    spinner?: React.ReactNode
    attachments?: React.ReactNode
}[]

export const AI = createAI<AIState, UIState>({
    actions: {
        submitUserMessage,
    },
    initialUIState: [],
    initialAIState: { chatId: nanoid(), interactions: [], messages: []},

})

export const getUIStateFromAIState = (aiState: Chat) => {
    return aiState.messages
        .filter((message: any) => message.role !== 'system')
        .map((message: any, index: any) => ({
            id: `${aiState.chatId}-${index}`,
            display: 
                message.role === 'assistant' ? (
                    <AIMessage  content={message.content} />
                ) : message.role ===  'user '? (
                    <UserMessage>{message.content}</UserMessage>
                ) : (
                    <AIMessage content={message.content} />
                )
        }))
}