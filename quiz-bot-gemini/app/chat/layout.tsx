import Navbar from "@/components/Chatpage/Navbar";
import Footer from "@/components/Chatpage/Footer";

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <>
            <Navbar />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}