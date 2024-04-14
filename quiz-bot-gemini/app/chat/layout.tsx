import { Toaster } from '@/components/ui/toaster';
import { AI } from '@/lib/chat/actions';
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
            <AI initialAIState={{ chatId: id, interactions: [], messages: []}}>
                <main>
                    {children}
                </main>
            </AI>
        </div>
    )
}