"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const CONTACT_EMAIL = "info@artificialss.ai";

// All spacing derived from a single constant so everything stays aligned
const PAD = 22;
const LOGO = 80;
const BAR_H = 64;
const HDR_H = LOGO + PAD * 2; // 124
const barTop = PAD + (LOGO - BAR_H) / 2; // 30
const barBot = barTop + BAR_H; // 94
const lcx = PAD + LOGO / 2; // 62
const lcy = PAD + LOGO / 2; // 62
const lr = LOGO / 2; // 40
const ARC_PAD = 10; // gap between arc and logo edge
const arcRad = lr + ARC_PAD; // 50
const arcDx = Math.sqrt(arcRad * arcRad - (barBot - lcy) ** 2); // ≈38
const arcL = lcx - arcDx; // ≈24
const arcR = lcx + arcDx; // ≈100
const contentL = PAD + LOGO + PAD; // 124

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        height: HDR_H,
        overflow: "visible",
        /* Force dark-mode CSS vars so the header always looks dark */
        "--background": "27 13% 10%",
        "--foreground": "210 40% 98%",
        "--card": "27 13% 15%",
        "--card-foreground": "210 40% 98%",
        "--primary": "158 41% 45%",
        "--primary-foreground": "0 0% 98%",
        "--muted": "305 24% 20%",
        "--muted-foreground": "240 5% 64.9%",
        "--border": "27 13% 20%",
      } as React.CSSProperties}
    >
      {/* ── Full header background — always dark ── */}
      <div
        className="absolute backdrop-blur-lg pointer-events-none"
        style={{ top: 0, left: 0, right: 0, height: HDR_H, background: "rgba(10, 12, 14, 0.88)" }}
      />

      {/* ── Bottom border: curves around the logo ── */}
      <svg
        className="absolute inset-0 w-full pointer-events-none"
        style={{ height: HDR_H, overflow: "visible" }}
        aria-hidden="true"
      >
        <defs>
          <filter id="bar-bottom-glow" x="-2%" y="-200%" width="104%" height="600%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={`M 0,${barBot} L ${arcL},${barBot} A ${arcRad},${arcRad} 0 0,0 ${arcR},${barBot} L 10000,${barBot}`}
          fill="none"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="1"
          filter="url(#bar-bottom-glow)"
        />
      </svg>

      {/* ── Logo ── */}
      <Link href="/" className="absolute z-30" style={{ top: PAD, left: PAD }}>
        <Logo className="h-20 w-20" />
      </Link>

      {/* ── Bar content ── */}
      <div
        className="absolute flex items-center text-[hsl(210_40%_98%)]"
        style={{ top: barTop, height: BAR_H, left: contentL, right: PAD }}
      >
        <Link href="/">
          <span className="font-bold font-headline text-xl whitespace-nowrap">Artificialss</span>
        </Link>

        <div className="flex-1" />

        <div className="flex items-center gap-1">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary border border-primary text-white hover:bg-primary/90 transition-colors"
            aria-label="Contact us"
          >
            <Mail className="w-4 h-4" />
            <span
              className="absolute top-1.5 right-1 w-1.5 h-1.5 rounded-full bg-[#ff2200]"
              style={{ animation: "ping-soft 2s ease-in-out infinite" }}
              aria-hidden="true"
            />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
