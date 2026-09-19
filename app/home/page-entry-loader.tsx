'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

type PageEntryLoaderProps = {
  children: ReactNode;
};

const HOME_ENTRY_LOADER_SEEN_KEY = 'home-entry-loader-seen-v1';

export default function PageEntryLoader({ children }: Readonly<PageEntryLoaderProps>) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let hasSeenLoader = false;

    try {
      hasSeenLoader = globalThis.localStorage.getItem(HOME_ENTRY_LOADER_SEEN_KEY) === '1';
    } catch {
      hasSeenLoader = false;
    }

    if (hasSeenLoader) {
      return;
    }

    setIsLoading(true);

    try {
      globalThis.localStorage.setItem(HOME_ENTRY_LOADER_SEEN_KEY, '1');
    } catch {
      // Ignore storage access errors and keep loader behavior functional.
    }

    const fadeTimer = globalThis.setTimeout(() => setIsFadingOut(true), 2200);
    const hideTimer = globalThis.setTimeout(() => setIsLoading(false), 2700);

    return () => {
      globalThis.clearTimeout(fadeTimer);
      globalThis.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {children}
      {isLoading && (
        <div
          aria-live="polite"
          aria-label="Loading page"
          className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,#ffe8d2_0%,#fff8f1_46%)] transition-opacity duration-500 ${
            isFadingOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Image
            src="/logo.png"
            alt="3D Printer Slicer API icon"
            width={250}
            height={250}
            sizes="250px"
            quality={90}
            priority
            fetchPriority="high"
            draggable={false}
            className="rounded-full border-2 border-brand-ink bg-white p-1 shadow-soft"
          />
          <p className="mt-4 text-2xl font-black tracking-tight text-brand-ink sm:text-3xl">
            Welcome to 3D Printer Slicer API
          </p>
          <div className="mt-8 h-2 w-64 overflow-hidden rounded-full border border-brand-ink/30 bg-white/70">
            <span className="loader-progress block h-full w-full bg-linear-to-r/srgb from-brand-peach to-brand-coral" />
          </div>
        </div>
      )}
    </>
  );
}