import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="flex-1 lg:hidden">
        <Image
          src="/Quizzara.png"
          width={1000}
          height={1000}
          alt="Hero Image of Quizzara"
          className="object-cover"
        />
      </div>
      <div className="flex-1 lg:flex lg:flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-5xl md:text-5xl font-bold mb-4">
          Ready to Test Your Knowledge?
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Engage with fun quizzes on your chosen topic.
        </p>
        <Link
          href="/chat"
          className="inline-block bg-white text-black font-medium py-4 px-10 rounded hover:bg-purple-400 transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
      <div className="flex-1 hidden lg:block">
        <Image
          src="/Quizzara.png"
          width={1000}
          height={1000}
          alt="Hero Image of Quizzara"
          className="object-cover"
        />
      </div>
    </div>
  );
}
