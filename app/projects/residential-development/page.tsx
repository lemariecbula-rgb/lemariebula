export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] px-6 py-6 text-[#111] md:px-10">
      <header className="flex items-center justify-between">
        <a
          href="/"
          className="text-sm font-medium"
        >
          LE MARIE BULA
        </a>

        <a
          href="/"
          className="text-sm"
        >
          Projects
        </a>
      </header>

      <section className="pb-16 pt-24">
        <p className="mb-6 text-xs uppercase tracking-widest">
          Academic Project · 2026
        </p>

        <h1 className="max-w-5xl text-6xl font-normal leading-[0.95] tracking-tight md:text-9xl">
          A Proposed Residential Development
        </h1>
      </section>

      <section>
        <img
          src="/images/plpanning1-residential%20development.webp"
          alt="Residential Development"
          className="h-auto w-full"
        />
      </section>

      <section className="grid gap-12 border-t border-black/20 py-16 md:grid-cols-3">
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest">
            Type
          </p>
          <p className="text-sm">
            Residential Development
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest">
            Location
          </p>
          <p className="text-sm">
            Davao City
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-widest">
            Year
          </p>
          <p className="text-sm">
            3rd Yr, 2026
          </p>
        </div>
      </section>

      <section className="border-t border-black/20 py-24">
        <p className="mb-10 text-xs uppercase tracking-widest">
          About the Project
        </p>

        <p className="max-w-4xl text-2xl leading-relaxed md:text-4xl">
          Situated in Matina Crossing, Talomo District, Davao City, the project
          leverages its role as a transitional suburban zone between residential
          enclaves and commercial corridors. Designed under the R-3 zoning
          classification, it envisions a medium-density residential community
          that balances housing clusters, green spaces, and community facilities.
          The proposal emphasizes climate-responsive design, resilient
          circulation systems, and integration with the area’s cultural and
          environmental context, making it both strategic and sustainable for
          suburban growth.
        </p>
      </section>

      <footer className="border-t border-black/20 py-10">
        <a
          href="/"
          className="text-sm"
        >
          ← Back to Selected Work
        </a>
      </footer>
    </main>
  );
}