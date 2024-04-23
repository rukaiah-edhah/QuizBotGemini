import QuizQuestions from "./quiz-questions"

const clean_up = (content: string) => {
    content.replace(/[^a-zA-Z ]/g, "");
}

export function QuizAIMessage({ content }: any){
    return (
    <>
        {/* <h1>React.js Quiz</h1>
        {questions.map((question: any, index: any) => (
            <QuizQuestions
                key={index}
                question={question.question}
                options={question.options}
            />
        ))} */}
    </>
)}