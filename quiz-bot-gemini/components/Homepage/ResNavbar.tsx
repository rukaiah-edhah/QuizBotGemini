import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navItems, title, end } from "@/components/HomePage/Navbar";
import { IoMdMenu} from "react-icons/io";
import { PiCirclesThreeFill } from "react-icons/pi";
import { metamorphouse } from "@/app/layout";


export default function ResNavbar(){
    return(
        <div className="flex lg:hidden">
            <Sheet>
                <SheetTrigger><IoMdMenu className="w-6 h-6 mr-2"/></SheetTrigger>
                <SheetContent side="top">
                    <SheetHeader>
                        {title.map((t) => (
                            <SheetTitle key={t.name}>
                                <PiCirclesThreeFill className="w-5 h-5 inline mx-auto mr-2" />
                                <p
                                    className={`inline align-middle --font-metamorphous
                                        ${metamorphouse.className}
                                    `}
                                >
                                    {t.name}
                                </p>
                            </SheetTitle>
                        ))}
                    </SheetHeader>
                    <div className="flex flex-col items-center justify-center p-10 gap-2">
                        <ul className="flex flex-col gap-2 text-center w-full">
                            {navItems.slice(0, -4).map((items: any) => (
                                <div key={items.name}>
                                        <li className="w-full border border-white border-opacity-10 p-2 rounded-xl">
                                            <SheetClose asChild>
                                                <Link
                                                    href={items.path}
                                                >
                                                    {items.name}
                                                </Link>
                                            </SheetClose>
                                        </li>
                                </div>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-2 text-center w-full">
                            {end.map((e) => (
                                <div key={e.name}>
                                        <li className="w-full border border-white border-opacity-10 p-2 rounded-xl">
                                            <SheetClose asChild>
                                                <Link 
                                                    href={e.path}
                                                >{e.name}</Link>
                                            </SheetClose>
                                        </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
