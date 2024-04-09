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
          priority
        />
      </div>
      <div className="flex-1 lg:flex lg:flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="lg:text-7xl text-5xl font-bold mb-4">
          Unlock Your Potential with <span className="text-purple-400">Every</span> Quiz
        </h1>
        <p className="text-xl lg:text-2xl mb-6 ">
         Your Knowledge Journey, Uniquely Personalized for You
        </p>
        <Link
          href="/chat"
          className="inline-block bg-white text-black font-medium py-4 px-10 rounded hover:bg-purple-400  hover:text-white transition-colors duration-300"
        >
          Meet Quizzara
        </Link>
      </div>
      <div className="flex-1 hidden lg:block">
        <Image
          src="/Quizzara.png"
          width={1000}
          height={1000}
          alt="Hero Image of Quizzara"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
