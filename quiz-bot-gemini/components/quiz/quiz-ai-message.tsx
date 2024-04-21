import QuizQuestions from "./quiz-questions"

export function QuizAIMessage({ questions }: any){
    return (
    <>
        <h1>React.js Quiz</h1>
        {questions.map((question: any, index: any) => (
            <QuizQuestions
                key={index}
                question={question.question}
                options={question.options}
            />
        ))}
    </>
)}