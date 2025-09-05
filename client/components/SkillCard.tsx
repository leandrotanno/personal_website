import { cn } from "@/lib/utils";
import { ElementType } from "react";

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-violet-900/30">
      <div
        className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-1000"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export default function SkillCard({
  name,
  level,
  icon: Icon,
  category,
}: {
  name: string;
  level: number;
  icon: ElementType;
  category?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4 bg-white border-slate-200 dark:border-violet-700/30 dark:bg-violet-900/10",
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className="size-5 text-slate-700 dark:text-violet-300" />
        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-violet-200">{name}</div>
          {category && (
            <div className="text-[11px] text-slate-500 dark:text-violet-100/70">{category}</div>
          )}
        </div>
        <div className="ml-auto text-sm text-emerald-400 font-mono">
          {level}%
        </div>
      </div>
      <div className="mt-3">
        <ProgressBar value={level} />
      </div>
    </div>
  );
}
