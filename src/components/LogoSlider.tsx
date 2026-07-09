"use client";

const logos = [
  { src: "/logos/logo 1.png", alt: "Client logo 1" },
  { src: "/logos/logo 2.png", alt: "Client logo 2" },
  { src: "/logos/logo 3.png", alt: "Client logo 3" },
  { src: "/logos/logo 4.png", alt: "Client logo 4" },
  { src: "/logos/logo 5.png", alt: "Client logo 5" },
  { src: "/logos/logo 6.png", alt: "Client logo 6" },
  { src: "/logos/logo 7.webp", alt: "Client logo 7" },
  { src: "/logos/logo 8.png", alt: "Client logo 8" },
];

export default function LogoSlider() {
  // Duplicate the list once so the marquee loops seamlessly.
  const loop = [...logos, ...logos];

  return (
    <section className="relative py-12 bg-[#fafcff] border-y border-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#8c9fba] mb-12">
          Trusted by high-growth companies worldwide
        </p>

        {/* Slider — masked edges */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
          }}
        >
          <div className="flex items-center gap-16 md:gap-24 animate-logo-scroll w-max">
            {loop.map((l, i) => (
              <div
                key={`${l.src}-${i}`}
                className="flex items-center justify-center shrink-0"
              >
                <img
                  src={l.src}
                  alt={l.alt}
                  className="h-10 md:h-12 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes logoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        :global(.animate-logo-scroll) {
          animation: logoScroll 30s linear infinite;
        }
        :global(.animate-logo-scroll:hover) {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
