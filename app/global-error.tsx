'use client';

import Link from 'next/link';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Readonly<GlobalErrorProps>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffe8d2_0%,_#fff8f1_46%)] text-brand-ink antialiased">
        <main className="mx-auto w-[min(820px,92vw)] py-20">
          <div className="rounded-2xl border-2 border-brand-ink bg-white p-8 shadow-soft sm:p-10">
            <p className="inline-block rounded-full border-2 border-brand-ink bg-brand-peach px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-ink sm:text-sm">
              Critical Error
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-brand-ink sm:text-5xl">
              Unexpected application failure.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">
              {error.message || 'Please try again or return to the homepage.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="inline-flex items-center justify-center rounded-xl border-2 border-brand-ink bg-gradient-to-b from-brand-coral to-[#ee9160] px-5 py-3 text-sm font-bold text-brand-ink transition hover:-translate-y-0.5 hover:brightness-105"
                onClick={reset}
                type="button"
              >
                Retry
              </button>
              <Link
                className="inline-flex items-center justify-center rounded-xl border-2 border-brand-ink bg-white px-5 py-3 text-sm font-bold text-brand-ink transition hover:-translate-y-0.5 hover:bg-[#fff1e4]"
                href="/"
              >
                Back to home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
