import {
  Globe,
  Smartphone,
  Search,
  Bot,
  PenLine,
  Megaphone,
  Film,
  Palette,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  heroDescription: string;
  features: {
    heading: string;
    items: string[];
  }[];
  benefits: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  avatarMessage: string;
  pricing: {
    startingAt: string;
    packages: {
      name: string;
      price: string;
      description: string;
      features: string[];
    }[];
  };
  heroImage: string;
}

export const services: ServiceDetail[] = [
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    tagline: "Fast. Modern. Built to Convert.",
    description:
      "We build blazing-fast, responsive, and SEO-friendly websites using modern frameworks like Next.js, React, and Node.js — designed to convert visitors into customers.",
    accent: "#4472C4",
    accentBg: "rgba(68, 114, 196, 0.1)",
    accentBorder: "rgba(68, 114, 196, 0.2)",
    heroDescription:
      "Your website is your most important salesperson — it works 24/7. We build custom, high-performance web applications using Next.js and React that load in under a second, rank higher on Google, and convert visitors into paying customers.",
    features: [
      {
        heading: "Frontend Development",
        items: [
          "Next.js & React Applications",
          "Server-Side Rendering (SSR) & Static Generation",
          "Responsive & Mobile-First Design",
          "Interactive UI with Framer Motion Animations",
        ],
      },
      {
        heading: "Backend & Infrastructure",
        items: [
          "Custom API Development (Node.js, Express)",
          "Database Design (PostgreSQL, MongoDB)",
          "Cloud Hosting Setup (Vercel, AWS)",
          "CI/CD Pipelines & DevOps",
        ],
      },
      {
        heading: "E-Commerce",
        items: [
          "Shopify & Headless Commerce",
          "Payment Gateway Integration",
          "Inventory & Order Management",
          "Custom Checkout Flows",
        ],
      },
    ],
    benefits: [
      "Sub-second page load times for better user experience and SEO",
      "100/100 Core Web Vitals scores on Google PageSpeed",
      "Conversion-optimized layouts backed by UX research",
      "Full ownership of your code — no vendor lock-in",
      "Built-in SEO architecture from day one",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description:
          "We learn about your business, goals, and audience. We audit your current site and define the technical architecture.",
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description:
          "High-fidelity UI/UX designs in Figma, reviewed and refined with your feedback before a single line of code is written.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Agile sprints with weekly demos. We build in Next.js with clean, maintainable code and comprehensive testing.",
      },
      {
        step: "04",
        title: "Launch & Optimize",
        description:
          "Deployment to production with performance monitoring, analytics setup, and ongoing optimization support.",
      },
    ],
    faqs: [
      {
        question: "What technology stack do you use?",
        answer:
          "We primarily build with Next.js (React), TypeScript, Tailwind CSS, and Node.js for the backend. For databases, we use PostgreSQL or MongoDB depending on the project.",
      },
      {
        question: "How long does a typical website project take?",
        answer:
          "A marketing website typically takes 3–5 weeks. A full web application with custom features can take 6–12 weeks depending on complexity.",
      },
      {
        question: "Do you provide hosting and maintenance?",
        answer:
          "Yes. We set up hosting on Vercel or AWS and offer ongoing maintenance packages including updates, monitoring, and feature additions.",
      },
    ],
    avatarMessage: "We build websites that load in under a second!",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    pricing: {
      startingAt: "$2,500",
      packages: [
        { name: "Landing Page", price: "$1,500", description: "High-converting single page", features: ["Custom Design", "Mobile Responsive", "Contact Form Integration", "Basic SEO"] },
        { name: "Standard Website", price: "$3,500", description: "Up to 5 pages", features: ["Next.js & React", "CMS Integration", "Analytics Setup", "Advanced SEO"] },
        { name: "E-Commerce", price: "$6,500+", description: "Full online store", features: ["Shopify / Custom Cart", "Payment Gateways", "Inventory Management", "Custom Checkout"] }
      ]
    },
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Apps Your Users Will Love.",
    description:
      "Native and cross-platform mobile applications for iOS and Android — from MVPs to full-scale products that users love.",
    accent: "#7C3AED",
    accentBg: "rgba(124, 58, 237, 0.1)",
    accentBorder: "rgba(124, 58, 237, 0.2)",
    heroDescription:
      "We build mobile applications that feel native, perform beautifully, and keep users coming back. Whether you need a cross-platform app with React Native or a fully native iOS/Android experience, we deliver polished products from concept to App Store.",
    features: [
      {
        heading: "Cross-Platform",
        items: [
          "React Native Development",
          "Flutter Applications",
          "Shared Codebase for iOS & Android",
          "Near-Native Performance",
        ],
      },
      {
        heading: "Native Development",
        items: [
          "Swift & SwiftUI (iOS)",
          "Kotlin & Jetpack Compose (Android)",
          "Platform-Specific Features",
          "Hardware Integration (Camera, GPS, NFC)",
        ],
      },
      {
        heading: "App Ecosystem",
        items: [
          "Push Notifications & Real-Time Features",
          "In-App Purchases & Subscriptions",
          "App Store Optimization (ASO)",
          "Analytics & Crash Reporting",
        ],
      },
    ],
    benefits: [
      "One team for design, development, and deployment",
      "Cross-platform development reduces cost by up to 40%",
      "App Store submission and approval guidance",
      "Post-launch support with bug fixes and feature updates",
      "User analytics and engagement tracking built-in",
    ],
    process: [
      {
        step: "01",
        title: "Product Strategy",
        description:
          "We define the MVP scope, user personas, and technical requirements to ensure we build the right thing first.",
      },
      {
        step: "02",
        title: "UI/UX Design",
        description:
          "Interactive prototypes in Figma following iOS Human Interface and Material Design guidelines.",
      },
      {
        step: "03",
        title: "Agile Development",
        description:
          "Two-week sprints with testable builds. You get a working app to test after every sprint.",
      },
      {
        step: "04",
        title: "Launch & Scale",
        description:
          "App Store and Play Store submission, ASO optimization, and post-launch monitoring and iteration.",
      },
    ],
    faqs: [
      {
        question: "Should I go native or cross-platform?",
        answer:
          "For most apps, cross-platform (React Native) gives you 90% of native performance at 60% of the cost. We recommend native only when you need heavy hardware access or platform-specific features.",
      },
      {
        question: "How much does a mobile app cost?",
        answer:
          "An MVP typically ranges from $8K–$25K depending on features. A full-featured app with backend can range from $25K–$80K+.",
      },
      {
        question: "Do you handle App Store submissions?",
        answer:
          "Yes. We handle the entire submission process for both Apple App Store and Google Play Store, including metadata, screenshots, and compliance.",
      },
    ],
    avatarMessage: "We build apps your users will love!",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    pricing: {
      startingAt: "$8,000",
      packages: [
        { name: "MVP Concept", price: "$8,000", description: "Core features to test the market", features: ["UI/UX Design", "React Native", "Firebase Backend", "App Store Submission"] },
        { name: "Standard App", price: "$15,000", description: "Fully featured application", features: ["Custom Node.js API", "Push Notifications", "In-App Purchases", "Analytics Dashboard"] },
        { name: "Enterprise Scale", price: "$30,000+", description: "Complex architectures", features: ["Native iOS & Android", "Complex Integrations", "High Security", "Ongoing Maintenance"] }
      ]
    },
  },
  {
    slug: "search-engine-optimization",
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "Rank Higher. Get Found. Grow Organically.",
    description:
      "Dominate Google, Bing, and AI search results with our battle-tested SEO and AEO strategies. We drive qualified organic traffic that converts.",
    accent: "#1d9c39",
    accentBg: "rgba(29, 156, 57, 0.1)",
    accentBorder: "rgba(29, 156, 57, 0.2)",
    heroDescription:
      "SEO is not just about rankings — it's about getting the right people to your website at the right time. We combine technical SEO, content strategy, and AI Search Optimization (AEO) to build a sustainable organic growth engine for your business.",
    features: [
      {
        heading: "Technical SEO",
        items: [
          "Site Architecture & Crawlability Audits",
          "Core Web Vitals Optimization",
          "Schema.org Structured Data",
          "XML Sitemaps & Robots.txt",
        ],
      },
      {
        heading: "Content & On-Page",
        items: [
          "Keyword Research & Mapping",
          "Content Strategy & Editorial Calendars",
          "On-Page Optimization (Titles, Metas, Headers)",
          "Internal Linking Architecture",
        ],
      },
      {
        heading: "AI Search (AEO)",
        items: [
          "ChatGPT & Claude Citation Strategy",
          "Google AI Overview Optimization",
          "Conversational Query Targeting",
          "Entity & Knowledge Graph Building",
        ],
      },
    ],
    benefits: [
      "Long-term traffic growth that doesn't stop when ad spend does",
      "Higher quality leads — organic visitors have 14x higher close rates",
      "Visibility in both traditional and AI-powered search results",
      "Transparent monthly reporting with clear ROI metrics",
      "Local SEO domination for service-area businesses",
    ],
    process: [
      {
        step: "01",
        title: "Deep-Dive Audit",
        description:
          "A 50+ point technical and content audit to identify every opportunity and bottleneck in your current SEO.",
      },
      {
        step: "02",
        title: "Strategy & Roadmap",
        description:
          "A prioritized, 6-month SEO roadmap with keyword targets, content plan, and technical fix list.",
      },
      {
        step: "03",
        title: "Execution",
        description:
          "On-page optimizations, content creation, link building, and technical fixes implemented weekly.",
      },
      {
        step: "04",
        title: "Report & Refine",
        description:
          "Monthly performance reports with ranking changes, traffic growth, and strategy adjustments based on data.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most clients see measurable ranking improvements in 3–4 months and significant traffic growth by 6 months. Quick wins from technical fixes can appear in weeks.",
      },
      {
        question: "What is AEO (AI Engine Optimization)?",
        answer:
          "AEO is the practice of optimizing your content to be cited and recommended by AI tools like ChatGPT, Claude, Google AI Overviews, and Perplexity. It's the next evolution of search.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No legitimate SEO provider can guarantee specific rankings. What we do guarantee is proven strategies, transparent reporting, and relentless optimization based on data.",
      },
    ],
    avatarMessage: "SEO and AEO are our specialties!",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    pricing: {
      startingAt: "$1,200/mo",
      packages: [
        { name: "Local SEO", price: "$1,200/mo", description: "Dominate local search", features: ["Google Business Profile", "Local Citations", "On-page Optimization", "Monthly Reporting"] },
        { name: "Growth SEO", price: "$2,500/mo", description: "For national reach", features: ["Technical Audits", "Keyword Strategy", "Content Briefs", "Backlink Building"] },
        { name: "Enterprise AEO", price: "$4,500/mo", description: "AI & Search dominance", features: ["AI Overview Optimization", "ChatGPT Citations", "Advanced Link Building", "Custom Reporting"] }
      ]
    },
  },
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    tagline: "Automate the Repetitive. Focus on Growth.",
    description:
      "Streamline your workflows with custom AI solutions — from chatbots and content automation to intelligent lead scoring and data pipelines.",
    accent: "#0EA5E9",
    accentBg: "rgba(14, 165, 233, 0.1)",
    accentBorder: "rgba(14, 165, 233, 0.2)",
    heroDescription:
      "Stop wasting hours on repetitive tasks. We build custom AI automation systems that handle lead qualification, content creation, customer support, and data processing — so your team can focus on high-value work that actually grows the business.",
    features: [
      {
        heading: "AI Chatbots & Assistants",
        items: [
          "Custom GPT-Powered Chatbots",
          "Customer Support Automation",
          "Lead Qualification Bots",
          "Knowledge Base Integration",
        ],
      },
      {
        heading: "Workflow Automation",
        items: [
          "Zapier, n8n & Make Integrations",
          "CRM Automation (HubSpot, Salesforce)",
          "Email Sequence Automation",
          "Data Entry & Processing Pipelines",
        ],
      },
      {
        heading: "Custom AI Solutions",
        items: [
          "Content Generation Systems",
          "AI-Powered Analytics Dashboards",
          "Document Processing & Extraction",
          "Custom LLM Fine-Tuning",
        ],
      },
    ],
    benefits: [
      "Reduce manual work by 60–80% on repetitive tasks",
      "24/7 customer support with AI chatbots",
      "Faster lead response times increase conversion by 391%",
      "Custom solutions tailored to your exact workflow",
      "Scalable systems that grow with your business",
    ],
    process: [
      {
        step: "01",
        title: "Workflow Audit",
        description:
          "We map your current processes, identify automation opportunities, and calculate potential time and cost savings.",
      },
      {
        step: "02",
        title: "Solution Design",
        description:
          "We design the automation architecture, select the right tools (APIs, LLMs, platforms), and plan the integration.",
      },
      {
        step: "03",
        title: "Build & Test",
        description:
          "We build the automation, connect it to your existing tools, and run extensive testing with real data.",
      },
      {
        step: "04",
        title: "Deploy & Train",
        description:
          "We deploy the system, train your team, and provide documentation and ongoing support.",
      },
    ],
    faqs: [
      {
        question: "What tools do you use for automation?",
        answer:
          "We use a combination of n8n, Zapier, Make, custom Node.js scripts, and OpenAI/Anthropic APIs depending on the complexity and scale of the automation.",
      },
      {
        question: "Can you integrate with our existing CRM/tools?",
        answer:
          "Yes. We integrate with all major platforms including HubSpot, Salesforce, Slack, Google Workspace, Notion, Airtable, and more.",
      },
      {
        question: "How do you handle data privacy with AI?",
        answer:
          "We follow strict data privacy practices. All AI integrations can be configured with enterprise-grade API keys, data anonymization, and we never train models on your proprietary data without consent.",
      },
    ],
    avatarMessage: "We automate the repetitive so you can focus on growth!",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    pricing: {
      startingAt: "$2,000",
      packages: [
        { name: "Basic Workflow", price: "$2,000", description: "Connect up to 3 apps", features: ["Zapier/Make Setup", "Data Syncing", "Email Notifications", "1 Month Support"] },
        { name: "AI Chatbot", price: "$3,500", description: "Custom trained support bot", features: ["Trained on Your Data", "Website Integration", "Lead Capture", "Handover to Human"] },
        { name: "Full System", price: "$8,000+", description: "End-to-end automation", features: ["Custom Node.js Scripts", "CRM Integrations", "LLM Fine-tuning", "Ongoing Maintenance"] }
      ]
    },
  },
  {
    slug: "blog-content-writing",
    icon: PenLine,
    title: "Blog & Content Writing",
    tagline: "Content That Ranks and Converts.",
    description:
      "High-quality, SEO-optimized content that ranks, engages readers, and establishes your brand as an authority in your industry.",
    accent: "#EC4899",
    accentBg: "rgba(236, 72, 153, 0.1)",
    accentBorder: "rgba(236, 72, 153, 0.2)",
    heroDescription:
      "Content is the fuel that powers SEO, social media, and brand authority. We write high-quality, research-driven articles, blog posts, and marketing copy that ranks on Google, gets shared on social, and positions your brand as the industry expert.",
    features: [
      {
        heading: "Blog & Article Writing",
        items: [
          "Long-Form SEO Blog Posts (1500–3000+ words)",
          "Thought Leadership Articles",
          "Industry News & Commentary",
          "Listicles, How-Tos & Guides",
        ],
      },
      {
        heading: "Marketing Copy",
        items: [
          "Website Copywriting",
          "Landing Page & Sales Copy",
          "Product Descriptions",
          "Email Newsletter Content",
        ],
      },
      {
        heading: "Specialized Content",
        items: [
          "Whitepapers & E-books",
          "Case Studies & Success Stories",
          "Social Media Scripts & Captions",
          "Press Releases & Brand Announcements",
        ],
      },
    ],
    benefits: [
      "SEO-optimized from the first draft — we write for both humans and algorithms",
      "Consistent publishing schedule with editorial calendar management",
      "Industry-specific research ensures accuracy and authority",
      "All content is original, fact-checked, and plagiarism-free",
      "Includes internal linking strategy for SEO amplification",
    ],
    process: [
      {
        step: "01",
        title: "Content Strategy",
        description:
          "We research your industry, competitors, and target keywords to build a content roadmap aligned with your business goals.",
      },
      {
        step: "02",
        title: "Outline & Brief",
        description:
          "Detailed outlines with target keywords, headers, and key points — approved by you before writing begins.",
      },
      {
        step: "03",
        title: "Write & Optimize",
        description:
          "Expert writers craft the content with SEO best practices, internal links, and optimized meta tags.",
      },
      {
        step: "04",
        title: "Publish & Promote",
        description:
          "Content is formatted, published on your CMS, and promoted through social channels and email.",
      },
    ],
    faqs: [
      {
        question: "Do you write for specific industries?",
        answer:
          "Yes. We have experience writing for SaaS, e-commerce, fintech, healthcare, real estate, and professional services. We research deeply before writing.",
      },
      {
        question: "How many blog posts per month do you recommend?",
        answer:
          "For most businesses, 4–8 posts per month is the sweet spot to build momentum. We can scale up based on your growth targets and budget.",
      },
      {
        question: "Is the content AI-generated?",
        answer:
          "We use AI as a research and ideation tool, but all content is written and edited by experienced human writers. Every piece passes quality and originality checks.",
      },
    ],
    avatarMessage:
      "Content is king — and we write for both humans and search engines!",
    heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&w=800&q=80",
    pricing: {
      startingAt: "$800/mo",
      packages: [
        { name: "Starter", price: "$800/mo", description: "4 articles per month", features: ["SEO Research", "1000+ Words", "Royalty-free Images", "1 Round of Revisions"] },
        { name: "Growth", price: "$1,500/mo", description: "8 articles per month", features: ["Deep Topic Research", "1500+ Words", "Custom Graphics", "Internal Linking"] },
        { name: "Authority", price: "$2,500/mo", description: "Comprehensive content strategy", features: ["Whitepapers & Guides", "Interview-based Articles", "Social Media Snippets", "Full CMS Management"] }
      ]
    },
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "Clicks Into Customers. Spend Into Revenue.",
    description:
      "Data-driven paid advertising and marketing campaigns across Google, Meta, LinkedIn, and TikTok to generate high-quality leads at scale.",
    accent: "#F59E0B",
    accentBg: "rgba(245, 158, 11, 0.1)",
    accentBorder: "rgba(245, 158, 11, 0.2)",
    heroDescription:
      "We don't just run ads — we build conversion-optimized marketing systems. From Google and Meta to LinkedIn and TikTok, we manage every dollar of your ad spend with precision targeting, A/B testing, and transparent reporting to maximize your return on investment.",
    features: [
      {
        heading: "Paid Search & Display",
        items: [
          "Google Ads (Search, Display, Shopping)",
          "Bing/Microsoft Ads",
          "YouTube Video Ads",
          "Remarketing & Dynamic Retargeting",
        ],
      },
      {
        heading: "Social Media Ads",
        items: [
          "Meta Ads (Facebook & Instagram)",
          "LinkedIn Advertising",
          "TikTok Ad Campaigns",
          "Lookalike & Custom Audiences",
        ],
      },
      {
        heading: "Optimization & Analytics",
        items: [
          "A/B Testing & Multivariate Testing",
          "Conversion Rate Optimization (CRO)",
          "Landing Page Design & Testing",
          "Custom ROAS Dashboards & Reporting",
        ],
      },
    ],
    benefits: [
      "Average 3–5x ROAS across client campaigns",
      "Granular conversion tracking from click to sale",
      "Monthly strategy calls with transparent performance reports",
      "No long-term contracts — results keep you, not paperwork",
      "Full-funnel approach from awareness to conversion",
    ],
    process: [
      {
        step: "01",
        title: "Account Audit",
        description:
          "We audit your existing ad accounts, landing pages, and tracking to identify quick wins and strategic gaps.",
      },
      {
        step: "02",
        title: "Campaign Architecture",
        description:
          "We design the campaign structure, create ad copy and creatives, and set up precision targeting.",
      },
      {
        step: "03",
        title: "Launch & Test",
        description:
          "Campaigns go live with A/B tests running from day one. We monitor and optimize daily.",
      },
      {
        step: "04",
        title: "Scale & Report",
        description:
          "Weekly optimizations and monthly strategy reports. We double down on what works and cut what doesn't.",
      },
    ],
    faqs: [
      {
        question: "What's the minimum ad budget you work with?",
        answer:
          "We recommend a minimum of $2,000/month in ad spend for meaningful results. Our management fees are separate from ad spend.",
      },
      {
        question: "Do you create ad creatives?",
        answer:
          "Yes. We handle ad copy, static images, and can coordinate video ad production. Creative testing is built into our process.",
      },
      {
        question: "How quickly can I expect results from paid ads?",
        answer:
          "Paid ads can generate leads from day one. However, campaigns typically reach peak performance after 4–6 weeks of optimization and data collection.",
      },
    ],
    avatarMessage: "We make every ad dollar work harder for you!",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    pricing: {
      startingAt: "$1,500/mo",
      packages: [
        { name: "Search Ads", price: "$1,500/mo", description: "Google Ads management", features: ["Keyword Research", "Ad Copy Creation", "Bid Management", "Monthly Reporting"] },
        { name: "Social Ads", price: "$2,000/mo", description: "Meta & TikTok Ads", features: ["Audience Targeting", "A/B Testing", "Pixel Setup", "Creative Direction"] },
        { name: "Omnichannel", price: "$3,500/mo", description: "Search + Social + Retargeting", features: ["Cross-platform Strategy", "Advanced CRO", "Custom Dashboards", "Weekly Strategy Calls"] }
      ]
    },
  },
  {
    slug: "video-editing",
    icon: Film,
    title: "Video Editing",
    tagline: "Stories That Capture Attention.",
    description:
      "Professional video editing for social media, ads, YouTube, and brand storytelling — crafted to capture attention and drive engagement.",
    accent: "#EF4444",
    accentBg: "rgba(239, 68, 68, 0.1)",
    accentBorder: "rgba(239, 68, 68, 0.2)",
    heroDescription:
      "Video is the most engaging content format on every platform. We produce scroll-stopping reels, polished YouTube videos, high-converting ad creatives, and cinematic brand stories that capture attention, tell your story, and drive real business results.",
    features: [
      {
        heading: "Short-Form Content",
        items: [
          "Instagram Reels & TikTok Videos",
          "YouTube Shorts",
          "Social Media Story Content",
          "Micro-Content for Ads",
        ],
      },
      {
        heading: "Long-Form & YouTube",
        items: [
          "Full YouTube Video Editing",
          "Corporate & Brand Videos",
          "Webinar & Event Recordings",
          "Documentary-Style Content",
        ],
      },
      {
        heading: "Motion & Post-Production",
        items: [
          "Motion Graphics & Animations",
          "Lower Thirds & Title Cards",
          "Color Grading & Sound Design",
          "Podcast Video Editing",
        ],
      },
    ],
    benefits: [
      "Faster turnaround — most videos delivered within 48–72 hours",
      "Platform-optimized formats (9:16, 16:9, 1:1)",
      "Revision rounds included in every package",
      "Brand consistency across all video content",
      "Scalable packages from 5 to 30+ videos/month",
    ],
    process: [
      {
        step: "01",
        title: "Brief & Assets",
        description:
          "Share your raw footage, brand guidelines, and creative direction. We handle the rest.",
      },
      {
        step: "02",
        title: "First Cut",
        description:
          "We deliver the first edit within 48 hours for your review and feedback.",
      },
      {
        step: "03",
        title: "Revisions",
        description:
          "Up to 2 revision rounds included. We refine until you're 100% satisfied.",
      },
      {
        step: "04",
        title: "Final Delivery",
        description:
          "Exported in all required formats and resolutions, ready to publish across all platforms.",
      },
    ],
    faqs: [
      {
        question: "What video formats do you deliver?",
        answer:
          "We deliver in all standard formats including MP4, MOV, and platform-optimized exports (9:16 for Reels/TikTok, 16:9 for YouTube, 1:1 for feed posts).",
      },
      {
        question: "Do you provide raw footage or filming?",
        answer:
          "We focus on post-production editing. You provide the raw footage and we transform it. For filming, we can recommend trusted partners in your area.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Every project includes 2 revision rounds. Additional revisions can be arranged at an agreed rate.",
      },
    ],
    avatarMessage:
      "Video is the most engaging medium — let us tell your story!",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    pricing: {
      startingAt: "$1,000/mo",
      packages: [
        { name: "Shorts & Reels", price: "$1,000/mo", description: "15 short-form videos", features: ["Captions & Effects", "Trending Audio", "Color Grading", "48h Turnaround"] },
        { name: "YouTube Creator", price: "$2,500/mo", description: "4 long + 8 short videos", features: ["Thumbnail Design", "Sound Design", "A-Roll/B-Roll Cuts", "SEO Optimization"] },
        { name: "Brand Story", price: "$5,000", description: "High-end corporate video", features: ["Scriptwriting", "Storyboarding", "Motion Graphics", "Unlimited Revisions"] }
      ]
    },
  },
  {
    slug: "graphic-design",
    icon: Palette,
    title: "Graphic Design",
    tagline: "Design That Builds Trust.",
    description:
      "Stunning visual design for your brand — from logos and brand identity to social media creatives, pitch decks, and marketing collateral.",
    accent: "#8B5CF6",
    accentBg: "rgba(139, 92, 246, 0.1)",
    accentBorder: "rgba(139, 92, 246, 0.2)",
    heroDescription:
      "First impressions are visual. We create stunning brand identities, social media graphics, pitch decks, and marketing materials that build trust, convey professionalism, and make your brand unforgettable. Every pixel is intentional.",
    features: [
      {
        heading: "Brand Identity",
        items: [
          "Logo Design & Brand Marks",
          "Brand Guidelines & Style Guides",
          "Color Palette & Typography Systems",
          "Brand Collateral (Business Cards, Letterheads)",
        ],
      },
      {
        heading: "Digital Design",
        items: [
          "Social Media Graphics & Templates",
          "Ad Creatives (Static & Animated)",
          "Email Newsletter Design",
          "Website & App UI Design",
        ],
      },
      {
        heading: "Presentations & Print",
        items: [
          "Pitch Decks & Investor Presentations",
          "Infographics & Data Visualization",
          "Brochures, Flyers & Posters",
          "Packaging & Merchandise Design",
        ],
      },
    ],
    benefits: [
      "Consistent brand identity across all touchpoints",
      "Design assets delivered in all formats (print + digital)",
      "Unlimited design concepts for logo projects",
      "Source files included with every deliverable",
      "Quick turnaround — most projects in 3–5 business days",
    ],
    process: [
      {
        step: "01",
        title: "Creative Brief",
        description:
          "We learn about your brand, audience, competitors, and design preferences to guide the creative direction.",
      },
      {
        step: "02",
        title: "Concept Development",
        description:
          "We present 2–3 unique design concepts for your review, each with a clear rationale.",
      },
      {
        step: "03",
        title: "Refinement",
        description:
          "We refine the chosen direction based on your feedback until every detail is perfect.",
      },
      {
        step: "04",
        title: "Final Delivery",
        description:
          "All assets delivered in required formats (PNG, SVG, PDF, AI) with source files included.",
      },
    ],
    faqs: [
      {
        question: "What design tools do you use?",
        answer:
          "We use Figma for UI/UX and collaborative work, Adobe Illustrator for vector/logo work, and Photoshop for photo editing and complex compositions.",
      },
      {
        question: "Do I get the source files?",
        answer:
          "Yes. All source files (Figma, AI, PSD) are included with the final delivery at no extra cost.",
      },
      {
        question: "Can you match my existing brand style?",
        answer:
          "Absolutely. If you have existing brand guidelines, we follow them precisely. If not, we can create comprehensive brand guidelines as part of the project.",
      },
    ],
    avatarMessage:
      "Great design builds trust — first impressions matter!",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    pricing: {
      startingAt: "$1,000",
      packages: [
        { name: "Brand Identity", price: "$1,500", description: "Logo and style guide", features: ["3 Logo Concepts", "Color Palette", "Typography", "Brand Guidelines"] },
        { name: "Social Media Kit", price: "$1,000/mo", description: "Monthly social graphics", features: ["15 Feed Posts", "Story Templates", "Carousel Designs", "Profile Optimization"] },
        { name: "Full Pitch Deck", price: "$2,500", description: "Investor ready presentations", features: ["Up to 20 Slides", "Data Visualization", "Custom Icons", "PowerPoint & Keynote"] }
      ]
    },
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
