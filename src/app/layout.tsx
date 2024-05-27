import type { Metadata } from "next";
import { Road_Rage, Roboto_Mono, Rock_Salt } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";

const RockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rock",
});
const RoadRage = Road_Rage({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-road",
});
const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "FigPro",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${RockSalt.variable} ${RobotoMono.variable} ${RoadRage.variable}`}
    >
      <body className="font-mono">
        <Header />
        {children}
      </body>
    </html>
  );
}
