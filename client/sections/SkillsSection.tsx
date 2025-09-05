import { skills } from "@/utils/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-16">
      <h2 className="mb-6 text-xl font-semibold text-slate-800 dark:text-violet-200">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((s) => (
          <Tooltip key={s.name}>
            <TooltipTrigger asChild>
              <div
                className="group flex cursor-default flex-col items-center rounded-xl border p-4 bg-white border-slate-200 hover:border-violet-500/50 hover:shadow-[0_0_16px_rgba(168,85,247,0.12)] dark:border-violet-700/30 dark:bg-violet-900/10"
                title={s.category}
              >
                <s.icon className="mb-2 size-7 text-slate-700 dark:text-violet-300 transition-transform group-hover:scale-110" />
                <span className="text-sm text-violet-100/90">{s.name}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs text-slate-700 dark:text-violet-100">
              <div className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-violet-300/90">
                {s.category}
              </div>
              <div className="mt-1 text-sm">
                Ferramentas:{" "}
                {Array.isArray((s as any).tools)
                  ? (s as any).tools.join(", ")
                  : ""}
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
