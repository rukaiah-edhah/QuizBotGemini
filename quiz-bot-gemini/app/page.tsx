import Navbar from "@/components/Homepage/Navbar";
import Hero from "@/components/Homepage/Hero";
import Features from "@/components/Homepage/Features";
import Overview from "@/components/Homepage/Overview";
import Philosophy from "@/components/Homepage/Philosophy";
import Footer from "@/components/Homepage/Footer";

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
