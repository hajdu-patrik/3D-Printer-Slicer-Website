'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { documentationUrl } from './config/links';

const REDIRECT_SECONDS = 3;

export default function NotFound() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      router.replace('/');
    }
  }, [router, secondsLeft]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffe8d2_0%,_#fff8f1_46%)] pb-14">
      <header className="mx-auto flex w-[min(1240px,94vw)] items-center justify-between py-6">
        <Link className="inline-flex items-center gap-3" href="/" aria-label="Home">
          <Image
            src="/favicon.ico"
            alt="3D Printer Slicer API icon"
            width={44}
            height={44}
            priority
            unoptimized
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
            Error 404
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-brand-ink sm:text-5xl">
            This page was not found.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">
            You will be redirected to the original homepage in{' '}
            <span className="font-extrabold text-brand-ink">{secondsLeft}</span> seconds.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center justify-center rounded-xl border-2 border-brand-ink bg-gradient-to-b from-brand-coral to-[#ee9160] px-5 py-3 text-sm font-bold text-brand-ink transition hover:-translate-y-0.5 hover:brightness-105"
              href="/"
            >
              Go back now
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-ink bg-white px-5 py-3 text-sm font-bold text-brand-ink transition hover:-translate-y-0.5 hover:bg-[#fff1e4]"
              href={documentationUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/GitHub.webp"
                alt=""
                aria-hidden
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
              Documentation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
