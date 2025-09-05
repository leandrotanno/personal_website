import { Link } from "react-router-dom";
import { socialLinks } from "@/utils/constants";
import { cn } from "@/lib/utils";

export default function SocialButtons() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((s, idx) => {
        const Btn = s.external ? "a" : Link;
        const props: any = s.external
          ? { href: s.href, target: "_blank", rel: "noreferrer" }
          : { to: s.href };
        return (
          <Btn
            key={idx}
            {...props}
            className={cn(
              "group grid place-items-center size-12 rounded-lg border bg-white/60 border-slate-200 text-slate-700/90 dark:bg-violet-900/20 dark:border-violet-700/50 dark:text-violet-200/90 backdrop-blur-md transition",
              "hover:border-violet-500/50 hover:shadow-[0_0_24px_rgba(168,85,247,0.22)]",
            )}
            aria-label={s.label}
            title={s.label}
          >
            <s.icon
              className={cn(
                "size-6 text-slate-700 dark:text-violet-300 transition-transform group-hover:scale-110",
              )}
            />
          </Btn>
        );
      })}
    </div>
  );
}
