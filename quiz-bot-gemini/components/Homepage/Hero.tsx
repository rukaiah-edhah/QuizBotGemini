import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row  items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold mb-4">
          Ready to Test Your Knowledge?
        </h1>
        <p className="text-lg md:text-xl mb-6 ">
          Engage with fun quizzes on your chosen topic.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-black font-medium py-4 px-10 rounded hover:bg-purple-400 transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
      <div className="flex-1 hidden lg:block">
        <Image
          src="/Hero.png"
          width={1000}
          height={1000}
          alt="logo"
          className="object-cover"
        />
      </div>
    </div>
  );
}
