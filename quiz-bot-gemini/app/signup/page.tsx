import Signup from "@/components/SignupPage/Signup"
import purple from "@/public/purple.gif"
import { redirect } from 'next/navigation'


export default async function SignupPage(){
    // const session = (await auth())

    // if (session){
    //     redirect('/')
    // }

    return(
        <main className="flex items-center justify-center h-screen" style={{backgroundImage: `url(${purple.src})`}}>
            <Signup />
        </main>
    )
}
