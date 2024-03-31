import Link from "next/link"
import { MdQuiz } from "react-icons/md";


const navItems = [
    {
        name: 'Home',
        path: '#'
    },
    {
        name: 'Feature',
        path: '#'
    },
    {
        name: 'QuizBot Gemini',
        path: '#'
    },
    {
        name: 'Contact Us',
        path: '#'
    },
    {
        name: 'Login',
        path: '#'
    },
]

const title = [...navItems.filter(items => items.name === 'QuizBot Gemini')]
const end = [...navItems.slice(-2)]

export default function Navbar(){
    return(
        <nav className="sticky flex flex-col w-full max-w-full top-0 z-10 bg-white bg-opacity-70 rounded-full px-4 py-2 h-max backdrop-blur-2xl backdrop-saturate-200">
            <div className="flex items-center justify-between p-3 text-black">
                <ul className="flex flex-row gap-6 justify-center">
                    {navItems.slice(0,2).map((items: any) => (
                        <div key={items.name} className="">
                            <li>
                                <Link 
                                    href={items.path}
                                    className="hover:opacity-70 transition-all"
                                >
                                    {items.name}
                                </Link>
                            </li>
                        </div>
                    ))}
                </ul>

                <ul>
                    {title.map((t) => (
                        <div key={t.name}>
                            <li className="gap-2 font-bold hover:cursor-pointer flex flex-row ">
                                <MdQuiz className="w-5 h-5 inline mx-auto" />
                                <p
                                    className="inline align-middle"
                                >
                                    {t.name}
                                </p>
                            </li>
                        </div>
                    ))}
                </ul>
                <ul className="flex flex-row gap-6 justify-center">
                    {end.map((e) => (
                        <div key={e.name}>
                            <li>
                                <Link 
                                    href={e.path}
                                    className="hover:opacity-70 transition-all"
                                >{e.name}</Link>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </nav>
    )
}