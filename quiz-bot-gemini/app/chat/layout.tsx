import { Toaster } from '@/components/ui/toaster';

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <div suppressHydrationWarning>
            <Toaster />
            <main>
                {children}
            </main>
        </div>
    )
}