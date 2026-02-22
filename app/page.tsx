import Image from 'next/image';
import { showcaseImages } from './infinite-slider-images';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '3D Printer Slicer API',
  url: 'https://3d-printer-slicer-api.example.com',
  description:
    'Modern API for automated FDM and SLA slicing, conversion, orientation, and pricing workflows.',
  inLanguage: 'en',
  publisher: {
    '@type': 'Organization',
    name: '3D Printer Slicer API'
  }
};

const docsUrl =
  'https://github.com/hajdu-patrik/3D-Printer-Slicer-API/';

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffe8d2_0%,_#fff8f1_46%)] pb-14">
        <header className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-6">
          <a className="inline-flex items-center gap-3" href="/" aria-label="Home">
            <Image
              src="/favicon.ico"
              alt="3D Printer Slicer API icon"
              width={44}
              height={44}
              priority
              unoptimized
              draggable={false}
              className="select-none rounded-full shadow-soft"
            />
            <span className="text-base font-extrabold tracking-tight text-brand-ink sm:text-lg">
              3D Printer Slicer API
            </span>
          </a>

          <a
              className="inline-flex items-center justify-center rounded-xl border-2 border-brand-ink bg-gradient-to-b from-brand-coral to-[#ee9160] px-5 py-3 text-sm font-bold text-brand-ink transition hover:-translate-y-0.5 hover:brightness-105"
              href={docsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Explore API
            </a>
        </header>

        <section className="mx-auto w-[min(1120px,92vw)] py-10 sm:py-14">
          <p className="inline-block rounded-full border-2 border-brand-ink bg-brand-peach px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-ink sm:text-sm">
            FDM &amp; SLA Backend Engine
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            Production-ready slicing automation and pricing intelligence for modern 3D print platforms.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-700 sm:text-lg">
            Transform CAD, mesh, vector, and image inputs into printable outputs through a single API.
            The platform streamlines file conversion, model orientation, slicing execution, and cost estimation
            for reliable FDM and SLA manufacturing workflows.
          </p>
        </section>

        <section className="mx-auto w-[min(1120px,92vw)] pb-10 sm:pb-14" aria-label="3D print showcase">
          <div className="overflow-hidden rounded-3xl border-2 border-brand-ink bg-white/85 p-4 shadow-soft backdrop-blur-sm sm:p-6">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="marquee-row" aria-hidden={copy === 1}>
                  {showcaseImages.map((image) => (
                    <Image
                      key={`${copy}-${image.src}`}
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      draggable={false}
                      className={`${image.className} w-auto shrink-0 select-none object-contain`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-[min(1120px,92vw)] gap-4 md:grid-cols-3" aria-label="Core capabilities">
          <article className="rounded-2xl border-2 border-brand-ink bg-white p-6 shadow-soft">
            <h2 className="text-lg font-extrabold text-brand-ink">Universal Input Processing</h2>
            <p className="mt-2 text-sm leading-7 text-neutral-700 sm:text-base">
              Accept STL, OBJ, 3MF, CAD assemblies, vector assets, and image sources in a unified intake pipeline.
            </p>
          </article>

          <article className="rounded-2xl border-2 border-brand-ink bg-white p-6 shadow-soft">
            <h2 className="text-lg font-extrabold text-brand-ink">Intelligent Orientation</h2>
            <p className="mt-2 text-sm leading-7 text-neutral-700 sm:text-base">
              Automatically optimize model orientation to reduce print height, improve stability, and shorten cycle time.
            </p>
          </article>

          <article className="rounded-2xl border-2 border-brand-ink bg-white p-6 shadow-soft">
            <h2 className="text-lg font-extrabold text-brand-ink">Dynamic Cost Estimation</h2>
            <p className="mt-2 text-sm leading-7 text-neutral-700 sm:text-base">
              Generate pricing from real slicing outputs, technology-specific materials, and configurable hourly rates.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}