import { AI } from '@/app/action';
import { Toaster } from '@/components/ui/toaster';

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <>
            <Toaster />
            <AI>
                <main>
                    {children}
                </main>
            </AI>
        </>
    )
}