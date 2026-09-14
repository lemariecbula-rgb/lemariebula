export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] px-6 py-6 text-[#111] md:px-10">

      {/* Navigation */}
      <header className="flex items-center justify-between">
        <a href="/" className="text-sm font-medium">
          LE MARIE BULA
        </a>

        <a
          href="/#work"
          className="text-sm hover:opacity-50"
        >
          Back to Work
        </a>
      </header>

      {/* Project Header */}
      <section className="pb-16 pt-24">

        <p className="mb-6 text-xs uppercase tracking-widest">
          Academic Project · 2026
        </p>

        <h1 className="max-w-5xl text-6xl font-normal leading-[0.95] tracking-tight md:text-9xl">
          A Proposed Tagum Stopover
        </h1>

      </section>

      {/* Hero Image */}
      <section>
        <img
          src="/images/project-1.webp"
          alt="Tagum Stopover"
          className="h-auto w-full"
        />
      </section>

      {/* Project Information */}
      <section className="grid gap-12 border-t border-black/20 py-16 md:grid-cols-3">

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest">
            Type
          </p>

          <p className="text-sm">
            Transportation/Mixed-Used Infrastructure
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest">
            Location
          </p>

          <p className="text-sm">
            Tagum City
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest">
            Year
          </p>

          <p className="text-sm">
            2026
          </p>
        </div>

      </section>

      {/* Description */}
      <section className="border-t border-black/20 py-24">

        <p className="mb-10 text-xs uppercase tracking-widest">
          About the Project
        </p>

        <p className="max-w-4xl text-2xl leading-relaxed md:text-4xl">
          Designed as a rest and service hub along the Davao-Tagum corridor, 
          combining mobility support with rest areas, commercial and cultural amenities.
        </p>

      </section>

      {/* More Images */}
      <section className="border-t border-black/20 py-16">

        <p className="mb-10 text-xs uppercase tracking-widest">
          Project Images
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="bg-neutral-200">
            <img
              src="/images/project-one.webp"
              alt="House in the Forest"
              className="h-auto w-full"
            />
          </div>

          <div className="bg-neutral-200">
            <img
              src="/images/project-one.webp"
              alt="House in the Forest"
              className="h-auto w-full"
            />
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-black/20 py-10">

        <a
          href="/#work"
          className="text-sm hover:opacity-50"
        >
          ← Back to Selected Work
        </a>

      </footer>

    </main>
  );
}