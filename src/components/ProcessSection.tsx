import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      description: "We discuss your business goals, users, current systems, required features, timeline and technical constraints.",
    },
    {
      num: "02",
      title: "Planning",
      description: "We define the project scope, information architecture, feature priorities, technology stack and delivery stages.",
    },
    {
      num: "03",
      title: "Design and Development",
      description: "We build the interface and functionality in structured milestones, allowing progress to be reviewed throughout development.",
    },
    {
      num: "04",
      title: "Testing",
      description: "We test responsive behaviour, application flows, integrations, forms, APIs and production configurations.",
    },
    {
      num: "05",
      title: "Deployment",
      description: "We prepare the project for production, configure hosting and domains and support app-store or website deployment.",
    },
    {
      num: "06",
      title: "Improvement",
      description: "After launch, we monitor issues, resolve bugs and plan future improvements based on actual usage and business priorities.",
    },
  ];

  return (
    <section 
      className="py-24 px-6 bg-white"
      data-avatar-section
      data-avatar-message="Here is exactly how we take you from idea to launch!"
      data-avatar-side="left"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-20 tracking-tight">
          A clear process from idea to launch
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {steps.map((step) => (
            <div key={step.num} className="relative group">
              {/* Giant background number */}
              <div className="absolute -top-10 -left-6 text-8xl font-black text-gray-50/80 z-0 select-none pointer-events-none transition-colors duration-300 group-hover:text-[var(--brand-primary)]/10">
                {step.num}
              </div>
              
              {/* Content */}
              <div className="relative z-10 pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
