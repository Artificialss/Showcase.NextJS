"use client";

import { useEffect } from "react";

interface LogoProps {
  className?: string;
  animated?: boolean;
  /**
   * looping=true  → orbit loops forever (used in the full-screen loader)
   * looping=false → planet/ship do 1 full orbit then freeze at top-right (header default)
   */
  looping?: boolean;
}

export function Logo({ className = "h-10 w-10", animated = true, looping = false }: LogoProps) {
  useEffect(() => {
    const id = "logo-keyframes";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = `
      @keyframes logo-glow-pulse {
        0%, 100% { opacity: 0.5; }
        50%       { opacity: 0.12; }
      }
    `;
    document.head.appendChild(el);
  }, []);

  // Orbit is a perfect circle with radius 58 to match the dotted line
  const orbitPath = "M -14,50 a 64,64 0 1,1 128,0 a 64,64 0 1,1 -128,0";

  /**
   * Planet stops after 1.2083 orbits * 4s/orbit = ~4.83s
   * Ship starts at -3.2s and must stop at t=4.83s. Total run time = 8.03s
   *   → 8.03s / 4s = 2.0083 iterations.
   */
  const planetRepeat = looping ? "indefinite" : "1.2083";
  const shipRepeat = looping ? "indefinite" : "2.0083";
  const freezeOrNot: "freeze" | "remove" = looping ? "remove" : "freeze";

  /**
   * Ship motion: 2 segments, midpoint at t=0.5.
   * keyPoints "0; 0.55; 1" → first half 1.10× average, second half 0.90×.
   * keySplines slopes are matched at the boundary so speed is C1-continuous.
   * No jerk at the transition; variation is ±10% of average.
   */
  const shipKeyTimes = "0; 0.5; 1";
  const shipKeyPoints = "0; 0.55; 1";
  const shipKeySplines = "0.3,0.3,0.5,0.55; 0.5,0.56,0.7,0.7";

  return (
    <div className={`relative shrink-0 ${className}`} style={{ aspectRatio: "1" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="Artificialss logo"
        className="absolute inset-0 w-full h-full rounded-full"
      />

      {animated && (
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
          style={{ overflow: "visible" }}
        >
          <defs>
            <radialGradient id="planet-grad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#e0fff4" />
              <stop offset="60%" stopColor="#7de8b8" />
              <stop offset="100%" stopColor="#2db37a" />
            </radialGradient>

            <filter id="planet-glow" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="ship-glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0.5 0 0 0  0.3 0.2 0 0 0  0 0 0 0 0  0 0 0 1 0"
                result="orange"
              />
              <feMerge>
                <feMergeNode in="orange" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Pulse glow — continues indefinitely (very subtle) */}
          <circle
            cx="50"
            cy="50"
            r="64"
            fill="#347e6720"
            style={{ animation: "logo-glow-pulse 3s ease-in-out infinite" }}
          />

          {/* Saturn ring back arc */}
          <path
            d="M -13,0 a 13,3.8 0 0,0 26,0"
            fill="none"
            stroke="#1a5c42"
            strokeWidth="2"
            strokeOpacity="0.7"
            filter="url(#planet-glow)"
          >
            <animateMotion dur="4s" repeatCount={planetRepeat} fill={freezeOrNot} path={orbitPath} />
          </path>

          {/* Planet sphere */}
          <circle r="6.5" fill="url(#planet-grad)" filter="url(#planet-glow)">
            <animateMotion dur="4s" repeatCount={planetRepeat} fill={freezeOrNot} path={orbitPath} />
          </circle>

          {/* Saturn ring front arc */}
          <path
            d="M -13,0 a 13,3.8 0 0,1 26,0"
            fill="none"
            stroke="#1a5c42"
            strokeWidth="2.6"
            filter="url(#planet-glow)"
          >
            <animateMotion dur="4s" repeatCount={planetRepeat} fill={freezeOrNot} path={orbitPath} />
          </path>

          {/* Spaceship chasing the planet */}
          {/* opacity="0" + animate: hides for 50ms so SMIL can apply begin="-3.2s" offset before revealing */}
          <g filter="url(#ship-glow)" opacity="0">
            <animate attributeName="opacity" from="0" to="1" begin="0.05s" dur="0.001s" fill="freeze" />
            <ellipse cx="-7" cy="0" rx="5.5" ry="2.2" fill="#f87434">
              <animate
                attributeName="opacity"
                values="0.9; 0.9; 0.15; 0.15; 0.9"
                keyTimes="0; 0.28; 0.45; 0.72; 1"
                dur="4s"
                begin="-3.2s"
                repeatCount={shipRepeat}
                fill={freezeOrNot}
                calcMode="spline"
                keySplines="0,0,1,1; 0.8,0,1,1; 0,0,0.3,1; 0.2,0,0.8,1"
              />
            </ellipse>
            <path d="M 11,0 L -5,-5 L -2.5,0 L -5,5 Z" fill="#c8d8e8" />
            <circle cx="5" cy="0" r="2.2" fill="#4285F4" fillOpacity="0.9" />
            <animateMotion
              dur="4s"
              repeatCount={shipRepeat}
              fill={freezeOrNot}
              path={orbitPath}
              rotate="auto"
              begin="-3.2s"
              calcMode="spline"
              keyTimes={shipKeyTimes}
              keyPoints={shipKeyPoints}
              keySplines={shipKeySplines}
            />
          </g>
        </svg>
      )}
    </div>
  );
}
