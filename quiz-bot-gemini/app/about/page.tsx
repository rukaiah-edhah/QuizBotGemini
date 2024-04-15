import Navbar from "@/components/HomePage/Navbar"
import StarryBackground from "@/components/HomePage/StarryBackground"
import Footer from "@/components/HomePage/Footer"
import About from "@/components/AboutPage/About"
import Team from "@/components/AboutPage/TheTeam"
import Contact from "@/components/AboutPage/Contact"

export default function AboutPage(){
    return(
        <>
        <Navbar />
        <main className="flex flex-col items-center justify-between">
            <StarryBackground />
            <About />   
            <Team />
            <Contact />
        </main>
        <Footer />
        </>
    )
}