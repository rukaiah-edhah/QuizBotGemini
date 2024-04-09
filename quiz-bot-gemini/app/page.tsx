import Navbar from "@/components/HomePage/Navbar";
import Hero from "@/components/HomePage/Hero";
import Features from "@/components/HomePage/Features";
import Overview from "@/components/HomePage/Overview";
import Mission from "@/components/HomePage/Mission";
import Footer from "@/components/HomePage/Footer";
import StarryBackground from "@/components/HomePage/StarryBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <StarryBackground /> 
        <Hero />
        <Features />
        <Overview />
        <Mission />
        <Footer />
      </main>
    </>
  );
}
