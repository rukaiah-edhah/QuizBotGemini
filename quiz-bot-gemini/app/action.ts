'use server'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// export const runtime = 'edge';

export const start_quiz = async (formData: FormData) => {
    // get data from form
    const subject = formData.get('subject');
    const totalQuestions = formData.get('totalQuestions');
    const question_level = formData.get('question_level');
    const question_type = formData.get('question_type');

    const prompt = `Start a quiz on ${subject} with ${totalQuestions} questions. The questions are ${question_type} and the difficulty is ${question_level}.`;


    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(prompt);

    await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, totalQuestions, question_level, question_type }),
    })
}