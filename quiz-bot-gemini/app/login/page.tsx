import Login from "@/components/LoginPage/Login"
import purple from "@/public/purple.gif"
import { redirect } from 'next/navigation'
import { Session } from "@/lib/types"

export default async function LoginPage(){
    // const session = (await auth()) as Session

    // if (session) {
    //     redirect('/')
    // }

    return(
        <main className="flex items-center justify-center h-screen" style={{backgroundImage: `url(${purple.src})`}}>
            <Login />
        </main>
    )
}