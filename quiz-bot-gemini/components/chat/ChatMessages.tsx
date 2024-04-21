import { SpinnerMessage, UserMessage, AIMessage, AICard } from "@/components/chat/message";
import { QuizAIMessage } from "../quiz/quiz-ai-message";

export function ChatMessages({
    messages
}: any) {
    const question = false; // only here to test out conditional rendering -> once we have quiz questions Card, we'll update

    return messages.length ? (
        <div className="relative mx-auto max-w-3xl grid auto-rows-max gap-8 px-4 mt-16">

        {messages.map((message: any) => (
            <div key={message.id}>
                {/* <SpinnerMessage /> */}
                {message.role === 'user' ? 
                (<UserMessage>{message.content}</UserMessage>) :
                question ? (
                    <QuizAIMessage questions={quizQuestions} />
                ): (
                    <AICard>
                        <AIMessage>
                            {message.content}
                        </AIMessage>
                    </AICard>
                )}
            </div>  
        ))}
        </div>
    ): null
}

const quizQuestions = [
    {
        question: { text: "Which of the following is NOT a core concept of ReactJS?" },
        options: [
            "(a) Components",
            "(b) State",
            "(c) Props",
            "(d) Redux"
        ]
    },
];
