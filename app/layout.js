import { Inter, Inter_Tight, Fira_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { joinClassNames } from "@/utils/join-class-names";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap"
});

const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-mono",
  display: "swap"
});

const menlo = localFont({
  src: '../Menlo-Regular.ttf',
  variable: "--font-menlo",
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={joinClassNames(
        inter.variable,
        firaMono.variable,
        interTight.variable,
        menlo.variable
      )}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
