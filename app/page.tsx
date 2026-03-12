import Image from 'next/image';
import { sponsorUrl, documentationUrl, prusaSlicerUrl, orcaSlicerUrl } from './config/links';
import { featureCards, featureCardThemeClasses, resolveFeatureCardTheme } from './home/feature-cards';
import PageEntryLoader from './home/page-entry-loader';

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

const shellClassName = 'mx-auto w-[min(1120px,92vw)]';

export default function HomePage() {
  const marqueeFeatureCards = [...featureCards, ...featureCards];

  return (
    <>
      {/* SEO schema for search engines and rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Main content */}
      <PageEntryLoader>
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffe8d2_0%,_#fff8f1_46%)] pb-14">
        <header className={`${shellClassName} flex items-center justify-between py-6`}>
          <a className="inline-flex items-center gap-3" href="/" aria-label="Home">
            <Image
              src="/favicon.ico"
              alt="3D Printer Slicer API icon"
              width={60}
              height={60}
              priority
              unoptimized
              draggable={false}
              className="select-none rounded-full shadow-soft"
            />
            <span className="text-base font-extrabold tracking-tight text-brand-ink sm:text-xl">
              3D Printer Slicer API
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href={sponsorUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-[#FFDD00] px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:brightness-105"
            >
              ☕ Buy me a coffee
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-ink bg-white from-brand-coral to-[#ee9160] px-5 py-3 text-sm font-bold text-brand-ink transition hover:-translate-y-0.5 hover:brightness-105"
              href={documentationUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/GitHub.webp"
                alt=""
                aria-hidden
                width={20}
                height={20}
                className="h-[18px] w-[18px] object-contain"
              />
              Documentation
            </a>
          </div>
        </header>

        {/* Hero section */}
        <section className={`${shellClassName} py-10 sm:py-14`}>
          <div className="relative max-w-6xl pr-36 sm:pr-44 lg:pr-52">
            <h1 className="mt-5 max-w-5xl text-3xl font-black leading-tight tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Production-ready slicing automation and pricing intelligence for modern 3D print platforms.
            </h1>
          </div>
          <p className="mt-5 max-w-5xl text-base leading-8 text-neutral-700 sm:text-lg">
            Transform CAD, mesh, vector, and image inputs into printable outputs through a single API.
            The platform streamlines file conversion, model orientation, slicing execution, and cost estimation
            for reliable FDM and SLA manufacturing workflows.
          </p>
        </section>
    
        {/* Features section */}
        <section className={`${shellClassName} pb-14`} aria-label="API features">
          <div className="relative max-w-6xl pr-32 sm:pr-40 lg:pr-48">
            <h2 className="text-2xl font-black tracking-tight text-brand-ink sm:text-3xl">
              Complete capability stack for production-grade slicing automation.
            </h2>
          </div>
          <p className="mt-3 max-w-5Xl text-base font-semibold leading-8 text-brand-ink sm:text-lg">
            End-to-end print workflow intelligence, from multi-format intake to engine-level slicing and pricing output.
          </p>
          <p className="mt-1 max-w-5xl text-sm leading-7 text-neutral-700 sm:text-base">
            Designed for platform teams that need predictable, high-throughput, API-first 3D manufacturing operations.
          </p>
          <div className="mt-5 overflow-hidden rounded-3xl backdrop-blur-sm sm:p-6">
            <div className="feature-marquee-track">
              <div className="feature-marquee-row">
                {marqueeFeatureCards.map((feature, index) => {
                  const baseIndex = index % featureCards.length;
                  const theme = resolveFeatureCardTheme(baseIndex, feature.theme);
                  const themeClassName = featureCardThemeClasses[theme];

                  return (
                    <article
                      key={`${feature.title}-${index}`}
                      aria-hidden={index >= featureCards.length}
                      className={`h-full w-[min(320px,82vw)] shrink-0 rounded-2xl border-2 border-brand-ink p-6 ${themeClassName} ${feature.className ?? ''}`}
                    >
                      <h2 className="text-lg font-extrabold text-brand-ink">{feature.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-neutral-700 sm:text-base">{feature.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        
        {/* Supported engines section */}
        <section className={`${shellClassName} pb-10 sm:pb-14`} aria-label="Supported slicing engines">
          <div className="">
            <div className="relative max-w-6xl pr-40 sm:pr-48 lg:pr-56">
              <h2 className="mt-4 text-2xl font-black tracking-tight text-brand-ink sm:text-3xl">
                Built for PrusaSlicer and OrcaSlicer production workflows.
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-700 sm:text-base">
              The API currently runs validated integrations with both engines below. Each engine is maintained one
              release behind the latest stable version to preserve compatibility and deployment reliability.
            </p>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <article className="relative rounded-2xl border-2 border-brand-ink bg-gradient-to-b from-white to-[#fff4eb] p-5 shadow-soft sm:p-6">
                <a
                  href={prusaSlicerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative z-10 flex h-52 items-center justify-center overflow-hidden transition hover:-translate-y-0.5 sm:h-56"
                >
                  <span className="absolute right-3 top-3 z-20 rounded-full border border-brand-ink bg-brand-peach px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-ink">
                    Integrated
                  </span>
                  <Image
                    src="/PrusaSlicer.webp"
                    alt="PrusaSlicer logo"
                      width={500}
                      height={500}
                    className="relative z-10 mx-auto w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-110 sm:h-full"
                  />
                </a>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-extrabold text-brand-ink">We currently integrate with PrusaSlicer v2.9.3</h3>
                  <span className="rounded-full border border-brand-ink bg-brand-peach/75 px-3 py-1 text-xs font-bold text-brand-ink">
                    Latest: v2.9.4
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-neutral-700 sm:text-base">
                  Currently one stable release behind the newest public version, ensuring controlled upgrades with low
                  regression risk across active workloads.
                </p>
              </article>

              <article className="relative rounded-2xl border-2 border-brand-ink bg-gradient-to-b from-white to-[#ebf8ff] p-5 shadow-soft sm:p-6">
                <a
                  href={orcaSlicerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative z-10 flex h-52 items-center justify-center overflow-hidden transition hover:-translate-y-0.5 sm:h-56"
                >
                  <span className="absolute right-3 top-3 z-20 rounded-full border border-brand-ink bg-brand-peach px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-ink">
                    Integrated
                  </span>
                  <Image
                    src="/OrcaSlicer.webp"
                    alt="OrcaSlicer logo"
                    width={500}
                    height={500}
                    className="relative z-10 mx-auto w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-110 sm:h-full"
                  />
                </a>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-extrabold text-brand-ink">We currently integrate with OrcaSlicer v2.3.1</h3>
                  <span className="rounded-full border border-brand-ink bg-brand-peach/75 px-3 py-1 text-xs font-bold text-brand-ink">
                    Latest: v2.3.2
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-neutral-700 sm:text-base">
                  The current project integration targets the official v2.3.1 release and remains one version behind
                  for predictable rollouts and consistent slicing behavior.
                </p>
              </article>
            </div>
          </div>
        </section>
        </main>
      </PageEntryLoader>
    </>
  );
}