import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle
        cx="16"
        cy="16"
        r="15"
        fill="url(#gradient)"
        stroke="url(#strokeGradient)"
        strokeWidth="2"
      />

      {/* Data visualization lines */}
      <path
        d="M6 20L10 16L14 18L18 12L22 14L26 10"
        stroke="#34d399"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M6 24L10 22L14 20L18 16L22 18L26 14"
        stroke="#a78bfa"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Data points */}
      <circle cx="10" cy="16" r="1.5" fill="#34d399" />
      <circle cx="14" cy="18" r="1.5" fill="#34d399" />
      <circle cx="18" cy="12" r="1.5" fill="#34d399" />
      <circle cx="22" cy="14" r="1.5" fill="#34d399" />
      <circle cx="26" cy="10" r="1.5" fill="#34d399" />

      {/* Terminal cursor */}
      <rect x="8" y="6" width="1" height="4" fill="#60a5fa" opacity="0.8" />
      <rect x="10" y="6" width="6" height="1" fill="#60a5fa" opacity="0.6" />

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo size={24} />
      <span className="font-mono text-sm text-slate-800 dark:text-violet-300">
        <span className="text-violet-700 dark:text-violet-400">$</span> tanno.online
      </span>
    </div>
  );
}
