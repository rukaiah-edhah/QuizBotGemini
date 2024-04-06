import Login from "@/components/LoginPage/Login"
import purple from "@/public/purple.gif"

export default function LoginPage(){
    return(
        <main className="flex items-center justify-center h-screen" style={{backgroundImage: `url(${purple.src})`}}>
            <div className="bg-white w-4/5 rounded-xl border-4 border-solid border-violet-300">
                <div className="flex flex-col items-center justify-center p-5 lg:p-10 gap-4 z-10">
                    <div className="w-full lg:w-4/5">
                        <Login />
                    </div>
                </div>
            </div>
        </main>
    )
}