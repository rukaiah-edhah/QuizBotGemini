export default function Footer(){
    const support = ['Contact Us', 'Feedback']

    return(
        <footer className="block inset-x-0 bottom-0 w-full bg-violet-200 text-black text-sm lg:text-base">
            <div className="flex flex-row items-center justify-between px-4 py-5">
                <p>©QuizBot Gemini {new Date().getFullYear()}</p>
                <ul className="flex flex-row gap-5">
                    {support.map((s) => (
                        <li key={s} className="hover:opacity-70 transition-all hover:cursor-pointer">
                            {s}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}