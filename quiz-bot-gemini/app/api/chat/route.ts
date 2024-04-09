import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export const runtime = 'edge';

interface promptMessage {
    // id: string;
    role: "function" | "user" | "system" | "assistant" | "data" | "tool";
    content: string;
}

const buildGoogleGenAIPrompt = (messages: Message[]) => ({
    contents: messages
        .filter(message => message.role === 'user' || message.role === 'assistant')
        .map(message => ({
            role: message.role === 'user' ? 'user' : 'model',
            parts: [{ text: message.content}],
        })),
})

export async function POST(req: Request){
    try {
        const { messages, subject, totalQuestions, question_level, question_type } = await req.json();

        // if (!subject || !totalQuestions || !question_level || !question_type) {
        //     return new Response('Missing required fields', { status: 400 });
        // }

        const q_content = `Start a quiz on ${subject} with ${totalQuestions} questions. The questions are ${question_type} and the difficulty is ${question_level}.`;

        const prompt: promptMessage[] = [{ role: "user", content: q_content }];

        const all_messages: promptMessage[] = prompt.concat(messages);

        console.log({messages})

        const geminiStream = await genAI
            .getGenerativeModel({ model: 'gemini-pro' })
            .generateContentStream(buildGoogleGenAIPrompt(messages));

        const stream = GoogleGenerativeAIStream(geminiStream);

        return new StreamingTextResponse(stream);
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}