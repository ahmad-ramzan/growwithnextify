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
    <section className="relative pt-40 md:pt-20 pb-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <span className="section-label">Leading Brands</span>
        </div>

        {/* Slider — masked edges */}
        <div
          className="relative overflow-hidden mt-14"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          }}
        >
          <div className="flex gap-8 md:gap-40 animate-logo-scroll w-max">
            {loop.map((l, i) => (
              <div
                key={`${l.src}-${i}`}
                className="flex items-center justify-center h-20 w-44 shrink-0"
              >
                <img
                  src={l.src}
                  alt={l.alt}
                  className="max-h-12 max-w-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
          animation: logoScroll 70s linear infinite;
        }
      `}</style>
    </section>
  );
}
