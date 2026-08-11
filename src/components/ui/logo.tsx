"use client";

import { useEffect } from "react";

interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function Logo({ className = "h-10 w-10", animated = true }: LogoProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={{ aspectRatio: "1" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="Artificialss logo"
        className="absolute inset-0 w-full h-full rounded-full"
      />
      {animated && <LogoWoodSign />}
    </div>
  );
}

/** Wooden signboard that swings gently — "Powered by AI" */
function LogoWoodSign() {
  useEffect(() => {
    const id = "logo-woodsign-keyframes";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = `
      @keyframes sign-enter {
        0%   { transform: translateY(110%); opacity: 0; }
        30%  { opacity: 1; }
        100% { transform: translateY(0); opacity: 1; }
      }
      @keyframes sign-swing {
        0%, 100% { transform: rotate(-2deg); }
        50%      { transform: rotate(2deg); }
      }
      @keyframes sign-ai-pulse {
        0%, 100% { opacity: 1; }
        50%      { opacity: 0.6; }
      }
    `;
    document.head.appendChild(el);
  }, []);

  return (
    <svg
      viewBox="0 0 48 50"
      className="absolute"
      aria-hidden="true"
      style={{
        width: "50%",
        height: "50%",
        right: "-24%",
        top: "50%",
        marginTop: "-25%",
        overflow: "visible",
        animation: "sign-enter 1.2s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      <g style={{ transformOrigin: "24px 0px", animation: "sign-swing 3s ease-in-out infinite" }}>
        {/* Chains / ropes */}
        <line x1="10" y1="0" x2="10" y2="8" stroke="#8b7355" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="38" y1="0" x2="38" y2="8" stroke="#8b7355" strokeWidth="0.8" strokeLinecap="round" />

        {/* Nails at top */}
        <circle cx="10" cy="1" r="1.2" fill="#a08060" />
        <circle cx="38" cy="1" r="1.2" fill="#a08060" />

        {/* Main wooden plank */}
        <rect x="3" y="8" width="42" height="34" rx="4" fill="#5c3d2e" stroke="#3e2a1e" strokeWidth="1" />

        {/* Wood grain lines */}
        <line x1="7" y1="16" x2="41" y2="16" stroke="#4a3020" strokeWidth="0.4" opacity="0.5" />
        <line x1="5" y1="24" x2="43" y2="24" stroke="#4a3020" strokeWidth="0.4" opacity="0.4" />
        <line x1="7" y1="32" x2="41" y2="32" stroke="#4a3020" strokeWidth="0.4" opacity="0.3" />

        {/* Inner bevel */}
        <rect x="6" y="10" width="36" height="30" rx="1" fill="none" stroke="#7a5840" strokeWidth="0.5" opacity="0.4" />

        <defs>
          <filter id="neon-white" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="neon-green" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Text — "Powered" */}
        <text
          x="24"
          y="22"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="bold"
          fill="#ffffff"
          fontFamily="sans-serif"
          letterSpacing="0.5"
        >
          Powered
        </text>
        {/* Text — "by AI" */}
        <text x="21" y="35" textAnchor="end" fontSize="7.5" fontWeight="bold" fill="#ffffff" fontFamily="sans-serif" letterSpacing="0.5">
          by
        </text>
        <text
          x="23"
          y="35"
          textAnchor="start"
          fontSize="11"
          fontWeight="bold"
          fill="#3ddc84"
          fontFamily="sans-serif"
          letterSpacing="1.2"
          filter="url(#neon-green)"
          style={{ animation: "sign-ai-pulse 2.5s ease-in-out infinite" }}
        >
          AI
        </text>
      </g>
    </svg>
  );
}
