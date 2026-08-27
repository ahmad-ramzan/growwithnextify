import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section
      className="relative py-24 px-6 bg-gray-50 border-y border-gray-100"
      data-avatar-section
      data-avatar-message="Here is a breakdown of exactly what we can do for you."
      data-avatar-side="right"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            What We Do
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            End-to-end solutions to build your product, rank in search, and
            scale your revenue. Choose what you need — or combine them all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                data-avatar-section
                data-avatar-message={service.avatarMessage}
                data-avatar-side="left"
              >
                {/* Colored top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: service.accent }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: service.accentBg,
                    color: service.accent,
                    border: `1px solid ${service.accentBorder}`,
                  }}
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-gray-900 mb-3 transition-colors duration-300"
                  style={{
                    // CSS custom property for hover color
                  }}
                >
                  <span className="group-hover:text-[var(--brand-primary)] transition-colors">
                    {service.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.flatMap(f => f.items).slice(0, 4).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <div
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: service.accent }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold mt-auto pt-5 border-t border-gray-100 transition-colors duration-300"
                  style={{ color: service.accent }}
                >
                  View Details
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
