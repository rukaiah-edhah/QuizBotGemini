import { Button } from "../ui/button"

export default function ChatSetupQuestions(){
    return(
        <>
            <form
                className="w-4/5 text-black pt-5 text-sm"
            >
                <div className="w-full my-5">
                    <p>What subject would you like to challenge yourself with?</p>
                    <input 
                        type="text"
                        className="w-full border border-violet-200 focus:outline-none focus:border-black/40 p-2 rounded-xl mt-2"
                        placeholder="e.g. React, Python, Calculus I"
                    />
                </div>
                <div className="w-full my-5">
                    <p>Provide the preferred number of questions.</p>
                    <input 
                        type="text"
                        className="w-full border border-violet-200 focus:outline-none focus:border-black/40 p-2 rounded-xl mt-2"
                        placeholder="Enter your desired number"
                    />
                </div>
                <div className="w-full my-5">
                    <p>Question Level</p>
                    <select id="question-level" name="question-level" className="border border-violet-200 p-2 rounded-xl mt-2 focus:outline-none ">
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div className="w-full my-5">
                    <p>Question Type</p>
                    <select id="question-type" name="question-type" className="border border-violet-200 p-2 rounded-xl mt-2 focus:outline-none ">
                        <option value="multiple choice">Multiple Choice</option>
                        <option value="true/false">True/False</option>
                    </select>
                </div>
                <Button 
                    type="button"
                    className="bg-violet-200 px-7 py-2 flex items-center justfiy-center text-black hover:text-white"
                >
                    Start Quiz
                </Button>
            </form>
        </>
    )
}