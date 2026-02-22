import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://3d-printer-slicer-api.example.com'),
  title: {
    default: '3D Printer Slicer API | Automated FDM & SLA Slicing',
    template: '%s | 3D Printer Slicer API'
  },
  description:
    'Modern 3D printing backend for FDM and SLA workflows with intelligent orientation, file conversion, slicing automation, and dynamic pricing.',
  applicationName: '3D Printer Slicer API',
  keywords: [
    '3D printing API',
    'FDM slicing',
    'SLA slicing',
    'PrusaSlicer API',
    'automated print pricing',
    'CAD to STL',
    '3D model orientation',
    '3D file conversion',
    '3D printing backend',
    'slicing automation',
    'dynamic print pricing',
    'Vector to STL',
    'Image to STL',
    '3D printing workflow',
    '3D print automation'
  ],
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: '3D Printer Slicer API',
    title: '3D Printer Slicer API | Automated FDM & SLA Slicing',
    description:
      'Automate conversion, orientation, slicing, and pricing in one scalable API for modern 3D printing workflows.',
    images: [
      {
        url: '/favicon.ico',
        width: 64,
        height: 64,
        alt: '3D Printer Slicer API icon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Printer Slicer API | Automated FDM & SLA Slicing',
    description:
      'Production-ready backend for 3D file conversion, slicing automation, and dynamic print pricing.',
    images: ['/favicon.ico']
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
      </body>
    </html>
  );
}
