import { Toaster } from '@/components/ui/toaster';
import { nanoid } from 'nanoid'

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const id = nanoid()

    return(
        <div suppressHydrationWarning>
            <Toaster />
            <main>
                {children}
            </main>
        </div>
    )
}