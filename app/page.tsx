"use client";

import { useState } from "react";

export default function Home() {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [mediaOpen, setMediaOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f5f2] px-6 py-6 text-[#111] md:px-10">

      {/* Header */}
      <header className="flex items-center justify-between">
        <a href="/" className="text-sm font-medium">
          LE MARIE BULA
        </a>

        <p className="text-xs uppercase tracking-widest">
          Architecture
        </p>
      </header>


      {/* Main Index */}
      <section className="pt-24 md:pt-40">

        {/* PROJECTS */}
        <div className="border-t border-black/20">

          <button
            onClick={() => setProjectsOpen(!projectsOpen)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <h1 className="text-4xl font-normal md:text-7xl">
              Projects
            </h1>

            <span className="text-2xl">
              {projectsOpen ? "−" : "+"}
            </span>
          </button>


          {projectsOpen && (
            <div className="pb-12">

              <a
                href="/projects/tagum-stopover"
                className="group flex items-center justify-between border-t border-black/10 py-4"
              >
                <div>
                  <p className="text-lg">
                    Tagum Stopover
                  </p>

                  <p className="mt-1 text-xs text-black/50">
                    Academic Project · 2026
                  </p>
                </div>

                <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
                  View →
                </span>
              </a>


              <a
                href="#"
                className="group flex items-center justify-between border-t border-black/10 py-4"
              >
                <div>
                  <p className="text-lg">
                    Project Two
                  </p>

                  <p className="mt-1 text-xs text-black/50">
                    Academic Project · 2026
                  </p>
                </div>

                <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
                  View →
                </span>
              </a>


              <a
                href="#"
                className="group flex items-center justify-between border-t border-black/10 py-4"
              >
                <div>
                  <p className="text-lg">
                    Project Three
                  </p>

                  <p className="mt-1 text-xs text-black/50">
                    Academic Project · 2025
                  </p>
                </div>

                <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
                  View →
                </span>
              </a>

            </div>
          )}

        </div>


        {/* MEDIA */}
        <div className="border-t border-black/20">

          <button
            onClick={() => setMediaOpen(!mediaOpen)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <h1 className="text-4xl font-normal md:text-7xl">
              Media
            </h1>

            <span className="text-2xl">
              {mediaOpen ? "−" : "+"}
            </span>
          </button>


          {mediaOpen && (
            <div className="pb-12">

              <a
                href="#"
                className="group flex items-center justify-between border-t border-black/10 py-4"
              >
                <p className="text-lg">
                  Plates
                </p>

                <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
                  View →
                </span>
              </a>


              <a
                href="#"
                className="group flex items-center justify-between border-t border-black/10 py-4"
              >
                <p className="text-lg">
                  Sketches
                </p>

                <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
                  View →
                </span>
              </a>



              <a
                href="#"
                className="group flex items-center justify-between border-t border-black/10 py-4"
              >
                <p className="text-lg">
                  Models
                </p>

                <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
                  View →
                </span>
              </a>

            </div>
          )}

        </div>


        {/* Footer */}
        <footer className="mt-32 border-t border-black/20 py-6">

          <div className="flex flex-col justify-between gap-3 text-xs md:flex-row">

            <p>
              Le Marie Bula 
            </p>

            <p className="text-black/50">
             Academic Portfolio · 2026  
            </p>

            <p className="text-black/50">
              lmcbula@addu.edu.ph
            </p>

          </div>

        </footer>

      </section>

    </main>
  );
}