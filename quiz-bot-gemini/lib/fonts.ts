import { Lora, Inika } from "next/font/google";

export const lora = Lora({ 
  variable: '--font-lora',
  subsets: ["latin"],
});

export const inika = Inika({
  subsets: ['latin'],
  variable: '--font-inika',
  weight: ['400'],
});
