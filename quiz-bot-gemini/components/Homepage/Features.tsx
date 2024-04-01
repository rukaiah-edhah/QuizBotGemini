import { MdOutlineQuestionAnswer } from "react-icons/md";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";

export default function Features() {
  return (
    <div id="features" className="bg-violet-300 py-40 w-full">
      <h2 className="text-center text-5xl font-bold text-black mb-10">
        How QuizBot Gemini Works
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-20">
        <div className="flex flex-col items-center justify-center">
          <BiSolidSelectMultiple className="w-10 h-10 mb-8" />
          <h3 className="text-xl font-semibold text-white">Select a topic</h3>
          <p className="text-black text-center">
            Choose from an array of topics to explore.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <MdOutlineQuestionAnswer className="w-10 h-10 mb-8" />
          <h3 className="text-xl font-semibold text-white">Answer Questions</h3>
          <p className="text-black text-center">
            Test your knowledge with tailored questions.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <AiFillThunderbolt className="w-10 h-10 mb-8" />
          <h3 className="text-xl font-semibold text-white">
            Get Instant Feedback
          </h3>
          <p className="text-black text-center">
            Learn from answers and improve your skills.
          </p>
        </div>
      </div>
    </div>
  );
}
