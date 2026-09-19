import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/next"
import { siteUrl } from './config/links';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#fff8f1'
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '3D Printer Slicer API | Automated FDM & SLA Slicing',
    template: '%s | 3D Printer Slicer API'
  },
  description:
    'Modern 3D printing backend for FDM and SLA workflows with intelligent orientation, 3D model preparation, slicing automation, and dynamic pricing.',
  applicationName: '3D Printer Slicer API',
  keywords: [
    '3D printing API',
    'FDM slicing',
    'SLA slicing',
    'PrusaSlicer API',
    'automated print pricing',
    'CAD to STL',
    '3D model orientation',
    '3D model preparation',
    '3D printing backend',
    'slicing automation',
    'dynamic print pricing',
    '3D printing workflow',
    '3D print automation'
  ],
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/png' }],
    shortcut: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: '3D Printer Slicer API',
    title: '3D Printer Slicer API | Automated FDM & SLA Slicing',
    description:
      'Automate 3D model preparation, orientation, slicing, and pricing in one scalable API for modern 3D printing workflows.',
    images: [
      {
        url: '/_next/image?url=%2Flogo.png&w=256&q=90',
        width: 256,
        height: 256,
        alt: '3D Printer Slicer API icon'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: '3D Printer Slicer API | Automated FDM & SLA Slicing',
    description:
      'Production-ready backend for 3D model preparation, slicing automation, and dynamic print pricing.',
    images: ['/_next/image?url=%2Flogo.png&w=256&q=90']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-cream text-brand-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
