import Signup from "@/components/SignupPage/Signup"
import purple from "@/public/purple.gif"

export default function SignupPage(){
    return(
        <main className="flex items-center justify-center h-screen" style={{backgroundImage: `url(${purple.src})`}}>
            <Signup />
        </main>
    )
}
