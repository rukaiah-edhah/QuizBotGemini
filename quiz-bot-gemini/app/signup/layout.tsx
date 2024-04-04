export default function SignupLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <>
            <main>
                {children}
            </main>
        </>
    )
}