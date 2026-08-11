import { ExternalLink } from "lucide-react";

/* ── Per-project SVG mockup illustrations ──────────────────────── */

function ShowcaseCmmMockup() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full h-full" aria-hidden>
      <rect width="320" height="180" fill="#0d1912" />
      {/* Status/nav bar */}
      <rect width="320" height="26" fill="#123a26" />
      <circle cx="18" cy="13" r="6" fill="#3ddc84" opacity="0.9" />
      <rect x="32" y="10" width="70" height="6" rx="3" fill="#8be6b0" opacity="0.7" />
      {[210, 245, 280].map((x) => (
        <circle key={x} cx={x} cy="13" r="4" fill="#8be6b0" opacity="0.35" />
      ))}
      {/* Dashboard cards */}
      {[0, 1].map((i) => {
        const x = 16 + i * 156;
        return (
          <g key={i}>
            <rect x={x} y="40" width="140" height="60" rx="8" fill="#123a26" opacity="0.9" />
            <rect x={x + 12} y="52" width="60" height="6" rx="3" fill="#8be6b0" opacity="0.6" />
            <rect x={x + 12} y="66" width="90" height="16" rx="4" fill="#3ddc84" opacity="0.25" />
            <rect x={x + 16} y="72" width="40" height="5" rx="2.5" fill="#3ddc84" opacity="0.8" />
          </g>
        );
      })}
      {/* Bar chart */}
      <rect x="16" y="112" width="288" height="52" rx="8" fill="#123a26" opacity="0.7" />
      {[24, 34, 20, 42, 30, 38, 26].map((h, i) => (
        <rect
          key={i}
          x={30 + i * 38}
          y={156 - h}
          width="16"
          height={h}
          rx="3"
          fill="#3ddc84"
          opacity={0.5 + i * 0.06}
        />
      ))}
      {/* Kotlin badge */}
      <rect x="230" y="8" width="76" height="12" rx="6" fill="#3ddc84" opacity="0.18" />
      <text x="268" y="17" textAnchor="middle" fontSize="7" fill="#3ddc84" fontFamily="monospace" opacity="0.9">
        Kotlin · CMP
      </text>
    </svg>
  );
}

function ShowcaseAndroidMockup() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full h-full" aria-hidden>
      <rect width="320" height="180" fill="#0d1912" />
      <rect width="320" height="26" fill="#123a26" />
      <circle cx="18" cy="13" r="6" fill="#3ddc84" opacity="0.9" />
      <rect x="32" y="10" width="70" height="6" rx="3" fill="#8be6b0" opacity="0.7" />
      {/* Phone frame */}
      <rect x="112" y="40" width="96" height="128" rx="14" fill="#123a26" />
      <rect x="124" y="52" width="72" height="18" rx="4" fill="#3ddc84" opacity="0.3" />
      <rect x="124" y="76" width="72" height="30" rx="4" fill="#3ddc84" opacity="0.2" />
      {/* Bottom nav */}
      <rect x="112" y="140" width="96" height="28" rx="0" fill="#0a2a1b" />
      <circle cx="146" cy="154" r="4" fill="#3ddc84" />
      <circle cx="174" cy="154" r="4" fill="#3ddc84" opacity="0.4" />
      <text x="160" y="30" textAnchor="middle" fontSize="7" fill="#3ddc84" fontFamily="monospace" opacity="0.7">
        Jetpack Compose
      </text>
    </svg>
  );
}

function ShowcaseIosMockup() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full h-full" aria-hidden>
      <rect width="320" height="180" fill="#0a0a0a" />
      <rect x="112" y="40" width="96" height="128" rx="20" fill="#1f1f1f" />
      <rect x="124" y="52" width="72" height="18" rx="4" fill="#007aff" opacity="0.3" />
      <rect x="124" y="76" width="72" height="30" rx="4" fill="#007aff" opacity="0.2" />
      <rect x="112" y="140" width="96" height="28" rx="0" fill="#141414" />
      <circle cx="146" cy="154" r="4" fill="#007aff" />
      <circle cx="174" cy="154" r="4" fill="#007aff" opacity="0.4" />
      <text x="160" y="30" textAnchor="middle" fontSize="7" fill="#007aff" fontFamily="monospace" opacity="0.7">
        SwiftUI
      </text>
    </svg>
  );
}

function ShowcaseNextjsMockup() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full h-full" aria-hidden>
      <rect width="320" height="180" fill="#0a0a0a" />
      {/* Browser chrome */}
      <rect width="320" height="24" fill="#161616" />
      {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
        <circle key={c} cx={16 + i * 14} cy="12" r="4" fill={c} opacity="0.8" />
      ))}
      <rect x="90" y="7" width="140" height="10" rx="5" fill="#242424" />
      <text x="160" y="14.5" textAnchor="middle" fontSize="6" fill="#888" fontFamily="monospace">
        localhost:3000
      </text>
      {/* Hero mock */}
      <circle cx="160" cy="70" r="26" fill="none" stroke="#3ddc84" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="160" cy="70" r="10" fill="#3ddc84" opacity="0.8" />
      <rect x="110" y="108" width="100" height="8" rx="4" fill="#e5e5e5" opacity="0.8" />
      <rect x="128" y="122" width="64" height="5" rx="2.5" fill="#888" opacity="0.5" />
      <rect x="132" y="136" width="56" height="12" rx="6" fill="#3ddc84" opacity="0.85" />
      {/* Terminal strip */}
      <rect x="16" y="158" width="288" height="16" rx="4" fill="#161616" />
      <text x="26" y="169" fontSize="7" fill="#3ddc84" fontFamily="monospace" opacity="0.8">
        ▲ next build — ✓ compiled successfully
      </text>
    </svg>
  );
}

function PapasarMockup() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full h-full" aria-hidden>
      <rect width="320" height="180" fill="#1a1035" />
      <rect width="320" height="32" fill="#2d1f5e" />
      <rect x="12" y="10" width="60" height="12" rx="6" fill="#7c3aed" opacity="0.8" />
      <rect x="84" y="13" width="80" height="6" rx="3" fill="#a78bfa" opacity="0.5" />
      {[260, 276, 292].map((x, i) => (
        <circle key={x} cx={x} cy="16" r="7" fill={["#3ddc84", "#f59e0b", "#60a5fa"][i]} opacity="0.7" />
      ))}
      <rect x="12" y="42" width="296" height="52" rx="8" fill="#2d1f5e" opacity="0.8" />
      <rect x="22" y="50" width="180" height="7" rx="3.5" fill="#e2d9ff" opacity="0.7" />
      <rect x="22" y="62" width="120" height="6" rx="3" fill="#a78bfa" opacity="0.4" />
      {[0, 1, 2, 3].map((i) => {
        const y = 104 + i * 16;
        const selected = i === 1;
        return (
          <g key={i}>
            <rect
              x="12"
              y={y}
              width="296"
              height="12"
              rx="6"
              fill={selected ? "#7c3aed" : "#2d1f5e"}
              opacity={selected ? 0.9 : 0.5}
            />
            <rect
              x="20"
              y={y + 3}
              width={40 + i * 20}
              height="5"
              rx="2.5"
              fill={selected ? "#e2d9ff" : "#a78bfa"}
              opacity={selected ? 0.9 : 0.4}
            />
          </g>
        );
      })}
      <rect x="240" y="42" width="68" height="52" rx="8" fill="#3b1d72" />
      <text x="274" y="70" fontSize="18" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
        85
      </text>
      <text x="274" y="83" fontSize="7" fill="#a78bfa" fontFamily="sans-serif" textAnchor="middle" opacity="0.6">
        puntos
      </text>
    </svg>
  );
}

function ArtificialssAiMockup() {
  return (
    <svg viewBox="-28 -6 348 196" fill="none" className="w-full h-full" aria-hidden>
      <rect x="-28" y="-6" width="348" height="196" fill="#0c0f14" />
      <rect x="-28" y="-6" width="348" height="30" fill="#111820" />
      <circle cx="-8" cy="9" r="8" fill="#347e67" opacity="0.9" />
      <rect x="8" y="6" width="50" height="6" rx="3" fill="#347e67" opacity="0.6" />
      {[80, 130, 185, 240].map((x, i) => (
        <rect
          key={x}
          x={x}
          y="5"
          width={i === 0 ? 40 : 42}
          height="8"
          rx="4"
          fill={i === 0 ? "#347e67" : "#1e2a35"}
          opacity={i === 0 ? 0.8 : 0.5}
        />
      ))}
      <rect x="20" y="40" width="180" height="10" rx="3" fill="#e2e8f0" opacity="0.7" />
      <rect x="20" y="56" width="140" height="7" rx="3" fill="#64748b" opacity="0.4" />
      <rect x="20" y="70" width="80" height="12" rx="6" fill="#347e67" opacity="0.7" />
      {[0, 1, 2].map((i) => {
        const x = 20 + i * 96;
        return (
          <g key={i}>
            <rect x={x} y="92" width="86" height="56" rx="6" fill="#151c25" stroke="#1e2a35" strokeWidth="1" />
            <circle cx={x + 14} cy="106" r="6" fill={["#347e67", "#6366f1", "#f59e0b"][i]} opacity="0.3" />
            <rect x={x + 8} y="118" width="60" height="5" rx="2.5" fill="#94a3b8" opacity="0.3" />
            <rect x={x + 8} y="128" width="40" height="4" rx="2" fill="#64748b" opacity="0.2" />
            <rect x={x + 8} y="138" width="50" height="4" rx="2" fill="#64748b" opacity="0.15" />
          </g>
        );
      })}
      <line x1="-28" y1="24" x2="320" y2="24" stroke="#347e67" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

/* ── Data ────────────────────────────────────────────────────────── */

interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  href: string;
  Mockup: React.FC;
  accent: string;
}

const PORTFOLIO: PortfolioItem[] = [
  {
    id: "showcase-cmm",
    title: "Showcase.CMM",
    subtitle: "Compose Multiplatform showcase app for Android & iOS — MVP architecture, custom Canvas charts.",
    tags: ["Kotlin", "Compose Multiplatform", "MVP"],
    href: "https://github.com/Artificialss/Showcase.CMM",
    Mockup: ShowcaseCmmMockup,
    accent: "from-[#3ddc84]/20 to-[#123a26]/10",
  },
  {
    id: "showcase-nextjs",
    title: "Showcase.NextJS",
    subtitle: "This site's own source — a standalone Next.js landing page adapted from our real design system.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/Artificialss/Showcase.NextJS",
    Mockup: ShowcaseNextjsMockup,
    accent: "from-[#3ddc84]/15 to-[#0a0a0a]/10",
  },
  {
    id: "showcase-android",
    title: "Showcase.Android",
    subtitle: "Native Kotlin, Jetpack Compose showcase app — MVVM, Clean Architecture, Koin DI.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM"],
    href: "https://github.com/Artificialss/Showcase.Android",
    Mockup: ShowcaseAndroidMockup,
    accent: "from-[#3ddc84]/20 to-[#0d1912]/10",
  },
  {
    id: "showcase-ios",
    title: "Showcase.iOS",
    subtitle: "Native SwiftUI showcase app — MVVM, Clean Architecture, the modern @Observable pattern.",
    tags: ["Swift", "SwiftUI", "MVVM"],
    href: "https://github.com/Artificialss/Showcase.iOS",
    Mockup: ShowcaseIosMockup,
    accent: "from-[#007aff]/20 to-[#0a0a0a]/10",
  },
  {
    id: "papasar",
    title: "Papasar",
    subtitle: "AI-powered study platform helping students prepare for exams with adaptive question sets.",
    tags: ["Product", "AI", "Education"],
    href: "https://papasar.cr",
    Mockup: PapasarMockup,
    accent: "from-[#7c3aed]/20 to-[#3b0764]/10",
  },
  {
    id: "artificialss-ai",
    title: "Artificialss.ai",
    subtitle: "Our main website — software development, legal advisory, and AI training services.",
    tags: ["Next.js", "Firebase", "i18n"],
    href: "https://artificialss.ai",
    Mockup: ArtificialssAiMockup,
    accent: "from-[#347e67]/20 to-[#0c0f14]/10",
  },
];

/* ── Card ────────────────────────────────────────────────────────── */

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const { Mockup } = item;
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-border/50 bg-card/80 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/40"
    >
      <div className={`relative h-40 w-full bg-gradient-to-br ${item.accent} overflow-hidden`}>
        <Mockup />
      </div>
      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-headline font-bold text-sm leading-tight">{item.title}</h3>
          <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground mt-0.5" />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{item.subtitle}</p>
        <div className="flex flex-wrap gap-1 pt-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-md bg-muted/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-1 text-[11px] font-medium text-primary">View project</div>
      </div>
    </a>
  );
}

/* ── Section ─────────────────────────────────────────────────────── */

export function PortfolioSection() {
  return (
    <section id="portfolio" className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 max-w-2xl text-left">
          <span className="mb-4 inline-block rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Our Work
          </span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight">Portfolio</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            A few of the products we&apos;ve shipped — including the public showcase repos this page is part of.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
