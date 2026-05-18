import { Mail, Phone, MapPin } from "lucide-react";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.76c1.4-2.58 7-2.77 7 2.47V19z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.62.07 4.81 0 3.2 0 3.56-.07 4.81-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07-3.2 0-3.56 0-4.81-.07-3.27-.15-4.77-1.69-4.92-4.92C2.21 15.56 2.2 15.19 2.2 12c0-3.2 0-3.56.07-4.81C2.42 3.96 3.93 2.42 7.19 2.27 8.44 2.21 8.8 2.2 12 2.2zm0-2.2C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.63 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12c0-6.63-5.37-12-12-12S0 5.37 0 12c0 5.99 4.39 10.95 10.13 11.85V15.47H7.08V12h3.05V9.36c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.93-1.95 1.88V12h3.32l-.53 3.47h-2.79v8.38C19.61 22.95 24 17.99 24 12z" />
  </svg>
);

const footerLinks = {
  Services: ["SEO Optimization", "AEO / AI Search", "Performance Marketing", "Competitor Analysis"],
};

const contact = [
  { icon: <Mail size={14} />, text: "hello@nextify.com" },
  { icon: <Phone size={14} />, text: "+1 (800) 123-4567" },
  { icon: <MapPin size={14} />, text: "New York, NY · Remote Worldwide" },
];

const socials = [
  { label: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
  { label: "Instagram", icon: <InstagramIcon />, href: "#" },
  { label: "Facebook", icon: <FacebookIcon />, href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0F172A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#" className="inline-flex items-center mb-5 bg-white/5 rounded-xl p-3 border border-white/10">
              <img src="/logo.png" alt="Company Logo" className="h-24 w-auto object-contain brightness-0 invert" style={{ filter: "brightness(0) invert(1)" }} />
            </a>

            <p className="text-sm leading-relaxed max-w-xs text-gray-400">
              Helping businesses grow through SEO, AI Search Optimization (AEO),
              and performance-driven marketing strategies.
            </p>
          </div>

          {/* Services column */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="lg:col-span-1">
              <p className="text-white font-bold text-sm mb-5">{group}</p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-[var(--brand-primary)] transition-colors duration-150"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column (replaces Resources) */}
          <div className="lg:col-span-2">
            <p className="text-white font-bold text-sm mb-5">Contact</p>
            <ul className="flex flex-col gap-3">
              {contact.map((c) => (
                <li
                  key={c.text}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-[var(--brand-primary)] transition-colors cursor-pointer"
                >
                  <span style={{ color: "var(--brand-primary)" }}>{c.icon}</span>
                  {c.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div className="lg:col-span-1">
            <p className="text-white font-bold text-sm mb-5">Follow Us</p>
            <div className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-lg text-xs font-semibold text-gray-300 hover:text-[var(--brand-primary)] transition-colors duration-150 border border-white/10 hover:border-white/30"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span style={{ color: "var(--brand-primary)" }}>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500">
            &copy; {year} Nextify. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-150"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
