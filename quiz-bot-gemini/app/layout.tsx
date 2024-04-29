import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { lora } from "@/lib/fonts";

const metadata: Metadata = {
  title: "QuizBot Gemini",
  description: "Your smart educational companion that challenges you with quizzes on a diverse array of subjects!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lora.className}>
        <main>
          {children}
          <SpeedInsights />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
