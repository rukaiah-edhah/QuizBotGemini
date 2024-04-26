import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from "ai";
import { escape } from "validator";

interface Part {
  text: string;
}

interface Content {
  role: 'function' | 'user' | 'model';
  parts: Part[];
}

interface GenerateContentRequest {
  contents: Content[];
}


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export const runtime = "edge";

const buildGoogleGenAIPrompt = (messages: Message[]): GenerateContentRequest => {
  let content = [
    ...messages
    .filter((message) => ["user", "assistant", "function"].includes(message.role))
    .map((message) => {
      // Validating message content by 1) ensureing each message content is a string
      // 2) preventing long inputs that could be used in DoS attacks
      if (
        typeof message.content !== "string" ||
        message.content.length > 1000
      ) {
        console.error(`Invalid message content: ${message.content}`);
        throw new Error("Invalid message content");
      }
      const sanitizedContent: string = escape(message.content); // To prevent XSS attacks ;)
      return {
        role: message.role === "user" ? "user" :  (message.role === "assistant" ? "model" : "function"),
        parts: [{ text: sanitizedContent }],
      };
    }),
  ]
  return { contents: content as Content[] };
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const geminiStream = await genAI
      .getGenerativeModel({ model: "gemini-pro"})
      .generateContentStream(buildGoogleGenAIPrompt(messages));

    const stream = GoogleGenerativeAIStream(geminiStream);
    return new StreamingTextResponse(stream);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error processing request: ${error.message}`);
      return new Response(error.message, { status: 400 });
    } else {
      console.error(`An unexpected error occurred: ${error}`);
      return new Response("An unexpected error occurred", { status: 500 });
    }
  }
}
