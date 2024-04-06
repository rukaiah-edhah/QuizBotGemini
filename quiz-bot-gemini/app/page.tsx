import Navbar from "@/components/HomePage/Navbar";
import Hero from "@/components/HomePage/Hero";
import Features from "@/components/HomePage/Features";
import Overview from "@/components/HomePage/Overview";
import Philosophy from "@/components/HomePage/Philosophy";
import Footer from "@/components/HomePage/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <Hero />
        <Features />
        <Overview />
        <Philosophy />
        <Footer />
      </main>
    </>
  );
}
