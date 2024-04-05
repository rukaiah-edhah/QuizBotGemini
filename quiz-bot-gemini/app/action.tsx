import 'server-only';

import { createAI, getMutableAIState, render } from 'ai/rsc';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';


import {
    AICard,
    AIMessage
} from '@/components/quiz/message'
import { spinner } from '@/components/quiz/spinner';

import { z } from 'zod';
import { QuizQuestion } from '@/components/quiz/quiz-question';
import { QuizResult } from '@/components/quiz/quiz-result';
import { QuizStart } from '@/components/quiz/quiz-start';
import ShowAnswer from '@/components/quiz/show-answer';
import QuizStartSkeleton from '@/components/quiz/quiz-start-skeleton'
import QuizQuestionSkeleton from '@/components/quiz/quiz-question-skeleton';
import QuizResultSkeleton from '@/components/quiz/quiz-result-skeleton';
import ShowAnswerSkeleton from '@/components/quiz/show-answer-skeleton';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export const runtime = 'edge';

// converting messages from vercel sdk to google  genai sdk
// const buildGoogleGenAIPrompt = (messages: Message[]) => ({
//     contents: messages
//         .filter(message => message.role === 'user' || message.role === 'assistant')
//         .map(message => ({
//             role: message.role === 'user' ? 'user' : 'model',
//             parts: [{ text: message.content }]
//         })),
// })

// const gemStream = async (messages: any) => {
//     const geminiStream = await genAI
//         .getGenerativeModel({ model: 'gemini-pro' })
//         .generateContentStream(buildGoogleGenAIPrompt(messages));

//     const stream = GoogleGenerativeAIStream(geminiStream);
    
//     return new StreamingTextResponse(stream);
// }

async function startQuiz(subject: string, numberOfQuestions: number, showCorrectAnswer: boolean, questionType: string, questionLevel: string) {
    'use server';

    const content = `Create a quiz with ${numberOfQuestions} questions based on the following criteria.
    
    Show correct answer after user submits answer: if ${showCorrectAnswer}`;

    const aiState = getMutableAIState<typeof AI>();
    aiState.update([
        ...aiState.get(),
        {
            role: 'system',
            content
        }
    ]);

    const response = await submitUserMessage(`Create a quiz on ${subject} with ${numberOfQuestions} questions. Show
    
    correct answer after user submits answer: if ${showCorrectAnswer}`);

    return{
        startQuizUI: true,
        newMessage: response,
    };
}

async function submitAnswer(answer: string){
    'use server';

    const response = await submitUserMessage(`${answer}`);

    // const gem_res = gemStream(answer)

    // console.log(gem_res)

    return {
        answerUI: true,
        newMessage: response
    }
}

async function submitUserMessage(content: string){
    'use server';
    const aiState = getMutableAIState<typeof AI>();
    aiState.update([
        ...aiState.get(),
        {
            role: 'user',
            content,
        }
    ]);

    const ui = render({
        provider: genAI,
        model: 'gemini-pro',
        // temperature: 0,
        messages: [{
            role: 'system',
            content: `[\
                You are an AI chatbot designed to help users on quiz preparation based on a chosen topic \
                
            ]`,
        },
        ...aiState.get().map((info: any) => ({
            role: info.role,
            content: info.content,
            name: info.name,
        })),
    ],
    initial: <AIMessage className='items-center'>{spinner}</AIMessage>,
    text: ({ content, done}) => {
        if (done){
            aiState.done([...aiState.get(), {role: 'assistant', content}]);
        }
        return <AIMessage>{content}</AIMessage>
    },
    tools: {
        start_quiz: {
            description: 'Initialize the quiz with a specified topic and number of questions',
            parameters: z.object({
                subject: z.string().optional(),
                numberOfQuestions: z.number().optional(),
                questionType: z.enum(['true/false', 'multiple choice']).optional(),
                questionLevel: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
            }).required(),

            render: async function* ({ subject, numberOfQuestions, questionType, questionLevel}) {

                yield <AICard>
                    <QuizStartSkeleton />
                </AICard>

                aiState.done([
                    ...aiState.get(),
                    {
                        role: 'function',
                        name: 'start_quiz',
                        content: JSON.stringify({ subject, numberOfQuestions, questionType, questionLevel}),
                    }
                ])

                return <AICard>
                    <QuizStart 
                        subjects={subject}
                        numberOfQuestions={numberOfQuestions}
                        questionType={questionType}
                        questionLevel={questionLevel}
                    />
                </AICard>
            }

        },
        quiz_question: {
            description: 'Display a quiz question, including its type and possible answers, and manage user interactions.',
            parameters: z.object({
                question: z.string().describe('The content of the question'),
                questionType: z.enum(['true/false', 'multiple choice']).describe('The type of the question'),
                possibleAnswers: z.array(z.string()).describe('The possible answers to the question'),
                showAnswer: z.boolean().optional(),
                answer: z.string().optional(),
                explanation: z.string().optional(),
                source: z.string().optional(),
            }).required(),

            render: async function* ({ question, questionType, possibleAnswers, showAnswer, answer, source, explanation}) {

                yield <AICard>
                    <QuizQuestionSkeleton />
                </AICard>;

                aiState.done([
                    ...aiState.get(),
                    {
                        role: 'function',
                        name: 'quiz_question',
                        content: JSON.stringify({ question, questionType, possibleAnswers}),
                    },
                ]);

                return <AICard>
                    <QuizQuestion
                        question={question}
                        questionType={questionType}
                        possibleAnswers={possibleAnswers}
                        showAnswer={showAnswer}
                        answer={answer}
                        explanation={explanation}
                        source={source}
                    />
                </AICard>
            }
        },
        show_answer: {
            description: 'Show the correct answer after each question when requested',
            parameters: z.object({
                icon: z.enum(['check', 'exclamation']).optional().default('check'),
                text: z.string().optional().default('This is the correct answer'),
            }),

            render: async function* ({ icon, text }){

                yield <AICard>
                    <ShowAnswerSkeleton />
                </AICard>;

                aiState.done([
                    ...aiState.get(),
                    {
                        role: 'function',
                        name: 'show_answer',
                        content: JSON.stringify({ icon, text }),
                    },
                ]);

                return <AICard>
                    <ShowAnswer
                        icon={icon}
                        text={text}
                    />
                </AICard>
            }
        },
        display_result: {
            description: 'Display user`s overall performance upon completion ',
            parameters: z.object({
                totalQuestions: z.number(),
                correctAnswers: z.number(),
                incorrectAnswers: z.number(),
                unansweredQuestions: z.number().optional(),
            }).required(),

            render: async function* ({ totalQuestions, correctAnswers, incorrectAnswers, unansweredQuestions }){

                yield <AICard>
                    <QuizResultSkeleton />
                </AICard>;

                aiState.done([
                    ...aiState.get(),
                    {
                        role: 'function',
                        name: 'display_result',
                        content: JSON.stringify({ totalQuestions, correctAnswers, incorrectAnswers, unansweredQuestions }),
                    },
                ]);

                return <AICard>
                    <QuizResult
                        totalQuestions={totalQuestions}
                        correctAnswers={correctAnswers}
                        incorrectAnswers={incorrectAnswers}
                        unansweredQuestions={unansweredQuestions}
                    />
                </AICard>
            }
        }
    }
    });

    return {
        id: Date.now(),
        display: ui,
    }
}

const initialAIState: {
    role: 'user' | 'assistant' | 'function' | 'system';
    content: string,
    name?: string;
}[] = [];

const initialUIState: {
    id: number;
    display: React.ReactNode;
}[] = [];

export const AI: any = createAI({
    actions: {
        submitUserMessage,
        startQuiz,
        submitAnswer,
    },
    initialAIState,
    initialUIState
})