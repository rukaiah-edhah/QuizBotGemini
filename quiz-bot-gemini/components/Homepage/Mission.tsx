import Link from "next/link";

export default function Mission() {
    return (
      <section className="bg-violet-300 text-gray-900 py-40 w-full">
      <div className="text-center">
      <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-white">Our Mission</h2>
      <p className="text-xl lg:text-3xl">Foster ongoing learning through interactive approaches.</p>
      </div>
      <div className="flex justify-center mt-10">
      <Link
          href="/login"
          className="inline-block bg-white text-black font-medium py-4 px-10 rounded hover:bg-purple-400  hover:text-white transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>  
      </section>
    );
}