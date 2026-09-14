"use client";

import { useEffect, useState } from "react";

const galleryImages = [
  {
    src: "/images/plpanning1-residential development.webp",
    alt: "Residential Development hero",
  },
  {
    src: "/images/project-one.webp",
    alt: "Residential Development project image 1",
  },
  {
    src: "/images/project-one.webp",
    alt: "Residential Development project image 2",
  },
  {
    src: "/images/project-one.webp",
    alt: "Residential Development project image 3",
  },
];

export default function ProjectPage() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = (index = 0) => {
    setCurrentImage(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  // Keyboard controls
  useEffect(() => {
    if (!galleryOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryOpen]);

  return (
    <main className="min-h-screen bg-[#f5f5f2] px-6 py-6 text-[#111] md:px-10">

      {/* NAVIGATION */}
      <header className="flex items-center justify-between">
        <a
          href="/"
          className="text-sm font-medium transition-opacity hover:opacity-50"
        >
          LE MARIE BULA
        </a>

        <a
          href="/"
          className="text-sm transition-opacity hover:opacity-50"
        >
          Projects
        </a>
      </header>


      {/* PROJECT HEADER */}
      <section className="pb-16 pt-24">

        <p className="mb-6 text-xs uppercase tracking-widest">
          Academic Project · 2026
        </p>

        <h1 className="max-w-5xl text-6xl font-normal leading-[0.95] tracking-tight md:text-9xl">
          A Proposed Residential Development
        </h1>

      </section>


      {/* HERO */}
      <section className="relative">

        <button
          onClick={() => openGallery(0)}
          className="group relative block w-full cursor-pointer text-left"
        >

          <img
            src="/images/plpanning1-residential development.webp"
            alt="Residential Development"
            className="h-auto w-full transition duration-500 group-hover:scale-[1.01] group-hover:opacity-90"
          />

          {/* VIEW GALLERY */}
          <span className="absolute bottom-6 right-6 bg-[#f5f5f2] px-5 py-3 text-xs uppercase tracking-widest transition-all duration-300 group-hover:bg-white">
            View Gallery →
          </span>

        </button>

      </section>


      {/* PROJECT INFORMATION */}
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


      {/* DESCRIPTION */}
      <section className="border-t border-black/20 py-24">

        <p className="mb-10 text-xs uppercase tracking-widest">
          About the Project
        </p>

        <p className="max-w-4xl text-2xl leading-relaxed md:text-4xl">
          Designed as a rest and service hub along the Davao-Tagum corridor,
          combining mobility support with rest areas, commercial and cultural
          amenities.
        </p>

      </section>


      {/* PROJECT IMAGES */}
      <section className="border-t border-black/20 py-16">

        <div className="mb-10 flex items-center justify-between">

          <p className="text-xs uppercase tracking-widest">
            Project Images
          </p>

          <button
            onClick={() => openGallery(0)}
            className="text-xs uppercase tracking-widest transition-opacity hover:opacity-50"
          >
            Open Gallery →
          </button>

        </div>


        <div className="grid gap-6 md:grid-cols-2">

          {galleryImages.slice(1, 3).map((image, index) => (

            <button
              key={image.src + index}
              onClick={() => openGallery(index + 1)}
              className="group text-left"
            >

              <div className="overflow-hidden bg-neutral-200">

                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.02] group-hover:opacity-80"
                />

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-black/20 py-10">

        <a
          href="/"
          className="text-sm transition-opacity hover:opacity-50"
        >
          ← Back to Selected Work
        </a>

      </footer>


      {/* FULLSCREEN GALLERY */}
      {galleryOpen && (

        <div
          className="fixed inset-0 z-50 bg-[#111]"
          onClick={closeGallery}
        >

          {/* TOP BAR */}
          <div
            className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-6 text-white md:px-10"
            onClick={(event) => event.stopPropagation()}
          >

            <p className="text-xs uppercase tracking-widest">
              A Proposed Residential Development
            </p>

            <button
              onClick={closeGallery}
              className="text-3xl leading-none transition-opacity hover:opacity-50"
              aria-label="Close gallery"
            >
              ×
            </button>

          </div>


          {/* MAIN IMAGE */}
          <div
            className="flex h-full items-center justify-center px-16 py-24 md:px-32"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="max-h-full max-w-full object-contain transition-opacity duration-300"
            />

          </div>


          {/* PREVIOUS */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 px-5 py-10 text-3xl text-white transition-opacity hover:opacity-50 md:left-8"
            aria-label="Previous image"
          >
            ←
          </button>


          {/* NEXT */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-5 py-10 text-3xl text-white transition-opacity hover:opacity-50 md:right-8"
            aria-label="Next image"
          >
            →
          </button>


          {/* COUNTER */}
          <div className="absolute bottom-6 left-6 text-xs text-white md:left-10">
            {String(currentImage + 1).padStart(2, "0")} /{" "}
            {String(galleryImages.length).padStart(2, "0")}
          </div>


          {/* THUMBNAILS */}
          <div
            className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2"
            onClick={(event) => event.stopPropagation()}
          >

            {galleryImages.map((image, index) => (

              <button
                key={image.src + index}
                onClick={() => setCurrentImage(index)}
                className={`h-12 w-16 overflow-hidden border transition-opacity ${
                  currentImage === index
                    ? "border-white opacity-100"
                    : "border-transparent opacity-40 hover:opacity-80"
                }`}
              >

                <img
                  src={image.src}
                  alt=""
                  className="h-full w-full object-cover"
                />

              </button>

            ))}

          </div>

        </div>

      )}

    </main>
  );
}