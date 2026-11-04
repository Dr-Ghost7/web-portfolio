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
  title: 'Sinjini Ghosh | Portfolio',
  description:
    'Portfolio of Sinjini Ghosh (Dr-Ghost7). Final year B.Tech CSE student specializing in Frontend Development with React.js, Next.js, JavaScript, and Graphic Design.',
  openGraph: {
    title: 'Sinjini Ghosh | Frontend Developer & Visual Designer',
    description:
      'Final year B.Tech CSE student building responsive web applications with React.js & Next.js, published Godot game, and digital graphics.',
    siteName: 'Sinjini Ghosh Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Sinjini Ghosh Portfolio Social Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sinjini Ghosh | Portfolio',
    description:
      'Frontend Development with React.js, Next.js, JavaScript, and Graphic Design.',
    images: ['/og-image.svg'],
  },
  keywords: [
    'Frontend Developer',
    'React.js',
    'Next.js',
    'JavaScript',
    'Graphic Designer',
    'Canva',
    'Sinjini Ghosh',
    'Dr-Ghost7',
    'Portfolio',
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
