import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { TerminalCommand } from "@/utils/constants";

interface TerminalProps {
  commands: TerminalCommand[];
  config?: {
    stepDelay?: number;
    stepVariation?: number;
    commandPause?: number;
    startDelay?: number;
    terminalHeight?: string;
    maxLines?: number;
  };
  className?: string;
  onComplete?: () => void;
}

export function Terminal({
  commands,
  config,
  className,
  onComplete,
}: TerminalProps) {
  const cfg = {
    stepDelay: 1200,
    stepVariation: 800,
    commandPause: 4000,
    startDelay: 1000,
    terminalHeight: "320px",
    maxLines: 15,
    ...config,
  };

  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const flatSequence = useMemo(() => {
    const seq: string[] = [];
    commands.forEach((block, i) => {
      seq.push(`$ ${block.command}`);
      for (const step of block.steps) seq.push(step);
      if (i < commands.length - 1) seq.push("\u200b"); // spacer only between commands
    });
    return seq;
  }, [commands]);

  const devRunRef = useRef(0);
  useEffect(() => {
    let mounted = true;
    let idx = 0;
    const timers: number[] = [];
    let doneCalled = false;
    let raf1: number | null = null;
    let raf2: number | null = null;

    // In React 18 StrictMode (DEV), effects run twice. Skip the first pass and start on the second.
    if (import.meta.env.DEV) {
      if (devRunRef.current === 0) {
        devRunRef.current = 1;
        return () => {};
      }
    }

    setLines([]);

    const scheduleNext = (delay: number) => {
      timers.push(
        window.setTimeout(() => {
          if (!mounted) return;
          const next = flatSequence[idx++];
          if (typeof next !== "undefined") {
            setLines((prev) => {
              const out = [...prev, next];
              const overflow = out.length - cfg.maxLines;
              return overflow > 0 ? out.slice(overflow) : out;
            });
            const base = cfg.stepDelay;
            const jitter = Math.random() * (cfg.stepVariation || 0);
            const after = next.startsWith("$")
              ? cfg.commandPause
              : base + jitter;
            scheduleNext(after);
          } else if (!doneCalled) {
            doneCalled = true;
            onComplete?.();
          }
        }, delay),
      );
    };

    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        if (mounted) scheduleNext(cfg.startDelay);
      });
    });

    return () => {
      mounted = false;
      timers.forEach((t) => clearTimeout(t));
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [
    flatSequence,
    cfg.stepDelay,
    cfg.stepVariation,
    cfg.commandPause,
    cfg.startDelay,
    cfg.maxLines,
    onComplete,
  ]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [lines]);

  return (
    <div
      className={cn(
        "rounded-lg border bg-white shadow-sm border-slate-200 dark:border-violet-700/30 dark:bg-violet-900/20 backdrop-blur-sm",
        className,
      )}
      style={{ height: cfg.terminalHeight }}
    >
      <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-200 bg-slate-50 dark:border-violet-700/30 dark:bg-black/30">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-auto text-[10px] text-slate-500 dark:text-violet-200/70 font-mono">
          tanno@analytics • bash
        </span>
      </div>
      <div
        ref={containerRef}
        className="h-[calc(100%-32px)] overflow-auto px-3 py-2 font-mono text-[13px] leading-relaxed text-slate-800 dark:text-violet-100/90"
      >
        {lines.map((l, i) => (
          <div key={i} className={cn(l.startsWith("$") && "text-blue-600 dark:text-violet-300")}>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
