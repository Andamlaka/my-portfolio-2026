import type { Metadata} from 'next';
import {Space_Grotesk, Instrument_Serif, Syne} from 'next/font/google';
import './globals.css';


const spaceGrotesk = Space_Grotesk({
  variable:"--font-space-grotesk",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

const instrumentSerif = Instrument_Serif({
  variable:"--font-instrument-serif",
  subsets: ["latin"],
  weight: ['400'],
  style: ['normal', 'italic'],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ['700', '800'],
});

const title = "Andargachew Ewawey — Full-Stack Developer";
const description =
  "Full-stack developer building end-to-end web apps, automation, and 3D experiences with React, Node, Python and more.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "andar.dev",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
