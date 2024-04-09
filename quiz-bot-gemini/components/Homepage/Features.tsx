import { MdOutlineQuestionAnswer } from "react-icons/md";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";

export default function Features() {
  return (
    <div id="features" className="bg-violet-300 py-40 w-full">
      <h2 className="text-center text-5xl font-bold text-gray-900 mb-20">
        How it Works
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center grid grid-cols-1 md:grid-cols-3 gap-10 space-y-4 lg:space-y-0">
        <div className="flex flex-col items-center justify-center">
          <BiSolidSelectMultiple className="w-14 h-14 mb-9 text-purple-400" />
          <h3 className="font-semibold text-3xl font-semibold text-black text-center ">
            Select a Topic
          </h3>
          <p className="w-64 text-xl mt-4 mb-14 text-center">
            Choose from an array of topics to explore.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <MdOutlineQuestionAnswer className="w-14 h-14 mb-9 text-purple-400" />
          <h3 className="font-semibold  text-3xl font-semibold text-black text-center ">
            Answer Questions
          </h3>
          <p className="w-64 text-xl mt-4 mb-14 text-center">
            Test your knowledge with tailored questions.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <AiFillThunderbolt className="w-14 h-14 mb-9 text-purple-400" />
          <h3 className="font-semibold  text-3xl font-semibold text-black text-center">
            Get Instant Feedback
          </h3>
          <p className="w-64 text-xl mt-4 mb-14 text-center">
            Learn from answers and improve your skills.
          </p>
        </div>
      </div>
    </div>
  );
}
