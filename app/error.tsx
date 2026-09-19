'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Button from './components/ui/Button';
import { documentationUrl } from './config/links';

type ErrorProps = {
  error: Error & { digest?: string };
};

export default function AppError({ error }: Readonly<ErrorProps>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#ffe8d2_0%,#fff8f1_46%)] pb-14">
      <header className="mx-auto flex w-[min(1240px,94vw)] items-center justify-between py-6">
        <Link className="inline-flex items-center gap-3" href="/" aria-label="Home">
          {/* sizes is intentionally larger than the 44px shown size: this round logo has fine
              text detail that visibly softens in AVIF/WebP below ~128px source width. */}
          <Image
            src="/logo.png"
            alt="3D Printer Slicer API icon"
            width={44}
            height={44}
            sizes="128px"
            quality={90}
            priority
            fetchPriority="high"
            className="rounded-full shadow-soft"
          />
          <span className="text-base font-extrabold tracking-tight text-brand-ink sm:text-lg">
            3D Printer Slicer API
          </span>
        </Link>
      </header>

      <section className="mx-auto w-[min(820px,92vw)] py-20">
        <div className="rounded-2xl border-2 border-brand-ink bg-white p-8 shadow-soft sm:p-10">
          <p className="inline-block rounded-full border-2 border-brand-ink bg-brand-peach px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-ink sm:text-sm">
            Application Error
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-brand-ink sm:text-5xl sm:leading-none">
            Something went wrong.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg sm:leading-7">
            Press try again to restart the main page.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="button" variant="primary-gradient" onClick={() => globalThis.location.assign('/')}>
              Try again
            </Button>
            <Button as="a" variant="secondary-doc" href={documentationUrl} target="_blank" rel="noreferrer">
              <Image
                src="/GitHub.webp"
                alt=""
                aria-hidden
                width={18}
                height={18}
                loading="eager"
                className="h-[18px] w-[18px] object-contain"
              />
              Documentation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
