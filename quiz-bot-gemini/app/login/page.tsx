import Login from "@/components/LoginPage/Login"
import purple from "@/public/purple.gif"

export default function LoginPage(){
    return(
        <main className="flex items-center justify-center h-screen" style={{backgroundImage: `url(${purple.src})`}}>
            <Login />
        </main>
    )
}