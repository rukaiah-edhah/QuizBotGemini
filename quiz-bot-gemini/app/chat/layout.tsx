import { Toaster } from '@/components/ui/toaster';

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <>
            <Toaster />
            <main>
                {children}
            </main>
        </>
    )
}