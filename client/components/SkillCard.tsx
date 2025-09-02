import { cn } from "@/lib/utils";
import { ElementType } from "react";

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-violet-900/30">
      <div
        className="h-full bg-gradient-to-r from-violet-600 to-emerald-600 transition-all duration-1000"
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
    <div className={cn("rounded-xl border border-violet-700/30 bg-violet-900/10 p-4")}> 
      <div className="flex items-center gap-3">
        <Icon className="size-5 text-violet-300" />
        <div>
          <div className="text-sm font-semibold text-violet-200">{name}</div>
          {category && <div className="text-[11px] text-violet-100/70">{category}</div>}
        </div>
        <div className="ml-auto text-sm text-emerald-400 font-mono">{level}%</div>
      </div>
      <div className="mt-3">
        <ProgressBar value={level} />
      </div>
    </div>
  );
}
