import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export const runtime = 'edge';

export async function POST(req: Request) {
    // get data from form
    const formData: any = await req.json();

    const subject = formData.subject;
    const totalQuestions = formData.totalQuestions;
    const question_level = formData.question_level;
    const question_type = formData.question_type;

    // console.log(subject, totalQuestions, question_level, question_type)

    const prompt = `Start a quiz on ${subject} with ${totalQuestions} questions. The questions are ${question_type} and the difficulty is ${question_level}.`;


    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContentStream(prompt);

    const stream = GoogleGenerativeAIStream(result);

    return new StreamingTextResponse(stream);

    // const response = await result.response;
    // const text = response.text();
    // console.log(text)
    // return NextResponse.json({ message: text });
}