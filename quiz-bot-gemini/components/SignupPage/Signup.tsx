import SignupButton from "./SignupButton";
import Image from "next/image";
import purple from "@/public/purple.gif"


export default function Signup() {
    return (
        <>
                <div style={{backgroundImage: `url(${purple.src})`}}>
                    <SignupButton/>
                </div>
        </>
    );
}
