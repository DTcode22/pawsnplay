import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Paws n' Play - A Pets Dream",
  description:
    "Welcome to Paws n' Play, the ultimate destination for pet lovers! Explore our wide range of pet products and services.",
  keywords: 'pet care, dog walking, pet sitting, grooming, pet services',
  authors: [{ name: "Paws n' Play Team" }],
  openGraph: {
    title: "Paws n' Play - Premium Pet Care Services",
    description: 'Professional pet care services with love and dedication',
    url: 'https://pawsnplay.com',
    siteName: "Paws n' Play",
    images: [
      {
        url: '/hero-dog.webp',
        width: 1200,
        height: 630,
        alt: "Paws n' Play - Pet Care Services",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Paws n' Play - Premium Pet Care",
    description: 'A Pets Dream',
    images: ['/hero-dog.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-gray-900 overflow-x-hidden`}
      >
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
