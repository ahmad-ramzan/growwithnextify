import {
  ArrowUpRight,
  Search,
  Globe,
  FileText,
  BarChart2,
  Headphones,
  Share2,
  Bot,
  Phone,
  ChevronRight
} from "lucide-react";

export default function HeroSection() {
  const pills = [
    { name: "Outbound", icon: ArrowUpRight },
    { name: "Inbound", icon: Search },
    { name: "SEO · AEO · GEO", icon: Globe },
    { name: "Content Automation", icon: FileText },
    { name: "Ads", icon: BarChart2 },
    { name: "Customer Support", icon: Headphones },
    { name: "Back Office", icon: Share2 },
    { name: "AI Agents", icon: Bot },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 text-center pt-40 md:pt-20 bg-[var(--bg-primary)]">
      <div className="absolute inset-0 max-w-3xl mx-auto opacity-10 pointer-events-none">
        {/* Background elements if any */}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-white mb-4 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)]"></div>
          <span className="text-xs text-[var(--text-secondary)] font-medium">Trusted by 20+ companies worldwide</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-6 tracking-tight">
          Building Solutions That Drive Business Growth
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light max-w-2xl leading-relaxed mb-5 text-center">
          Custom software, automation, and digital experiences tailored to your business.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mb-6">
          {pills.map((pill, index) => {
            const Icon = pill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] bg-white shadow-sm text-xs font-medium text-[var(--text-secondary)] hover:border-gray-300 transition-colors"
              >
                <Icon size={16} className="text-[var(--brand-secondary)] opacity-70" />
                {pill.name}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href="https://calendly.com/sal-growwithnextify/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-alt)] text-white font-medium text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <Phone size={20} className="text-white/80" />
          Book a Consultation Call
          <ChevronRight size={20} className="text-white/80" />
        </a>
      </div>
    </section>
  );
}
