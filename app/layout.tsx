import type { Metadata} from 'next';
import {Space_Grotesk, Instrument_Serif} from 'next/font/google';
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

export const metadata: Metadata ={
  title: 'Ande — Full Stack Developer',
  description:'I design and build end-to-end digital products — from the systems that power them.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
