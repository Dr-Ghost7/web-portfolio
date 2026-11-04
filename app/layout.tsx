import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#fcee0a',
};

export const metadata: Metadata = {
  title: 'SINJINI GHOSH // CYBER_PORTFOLIO [DEV & DESIGN]',
  description:
    'Slick cyberpunk portfolio of Sinjini Ghosh (Dr-Ghost7). Frontend Engineering in React, Next.js 15, Vanilla JS, and Graphic Design Systems.',
  keywords: [
    'Frontend Developer',
    'React.js',
    'Next.js',
    'Graphic Designer',
    'UI/UX Designer',
    'Sinjini Ghosh',
    'Dr-Ghost7',
    'Cyberpunk Portfolio',
  ],
  authors: [{ name: 'Sinjini Ghosh', url: 'https://github.com/Dr-Ghost7' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-[#060608] text-[#f5f6fa] font-mono selection:bg-[#fcee0a] selection:text-black">
        {/* Subtle Scanlines overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 scanline-overlay opacity-30" />
        {children}
      </body>
    </html>
  );
}
