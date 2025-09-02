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

export function Terminal({ commands, config, className, onComplete }: TerminalProps) {
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
    for (const block of commands) {
      seq.push(`$ ${block.command}`);
      for (const step of block.steps) seq.push(step);
      seq.push("\u200b"); // spacer between commands
    }
    return seq;
  }, [commands]);

  useEffect(() => {
    let mounted = true;
    let idx = 0;
    const timers: number[] = [];
    let doneCalled = false;

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
            const after = next.startsWith("$") ? cfg.commandPause : base + jitter;
            scheduleNext(after);
          } else if (!doneCalled) {
            doneCalled = true;
            onComplete?.();
          }
        }, delay),
      );
    };

    scheduleNext(cfg.startDelay);

    return () => {
      mounted = false;
      timers.forEach((t) => clearTimeout(t));
    };
  }, [flatSequence, cfg.stepDelay, cfg.stepVariation, cfg.commandPause, cfg.startDelay, cfg.maxLines, onComplete]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [lines]);

  return (
    <div
      className={cn(
        "rounded-lg border border-violet-700/30 bg-violet-900/20 backdrop-blur-sm shadow-[0_0_40px_rgba(109,40,217,0.15)]",
        className,
      )}
      style={{ height: cfg.terminalHeight }}
    >
      <div className="flex items-center gap-2 px-3 py-2 border-b border-violet-700/30 bg-black/30">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-auto text-[10px] text-violet-200/70 font-mono">tanno@analytics • bash</span>
      </div>
      <div
        ref={containerRef}
        className="h-[calc(100%-32px)] overflow-auto px-3 py-2 font-mono text-[13px] leading-relaxed text-violet-100/90"
      >
        {lines.map((l, i) => (
          <div key={i} className={cn(l.startsWith("$") && "text-violet-300")}>{l}</div>
        ))}
      </div>
    </div>
  );
}
