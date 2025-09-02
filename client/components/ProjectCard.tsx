import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export default function ProjectCard({ title, description, tech, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group rounded-xl border border-violet-700/30 bg-black/20 p-5 transition-all",
        "hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(109,40,217,0.35)]",
      )}
    >
      <h3 className="text-lg font-semibold text-violet-200">{title}</h3>
      <p className="mt-2 text-sm text-violet-100/80">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-violet-700/40 bg-violet-900/30 px-2 py-1 text-[11px] text-violet-200"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {demoUrl && (
          <a
            href={demoUrl}
            className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200"
          >
            <ExternalLink className="size-4" /> Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            className="inline-flex items-center gap-1 text-sm text-violet-300 hover:text-violet-200"
          >
            <Github className="size-4" /> Repo
          </a>
        )}
      </div>
    </div>
  );
}
