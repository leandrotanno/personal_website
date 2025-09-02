import { Link } from "react-router-dom";
import { socialLinks } from "@/utils/constants";
import { cn } from "@/lib/utils";

export default function SocialButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 no-print">
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
              "group flex items-center gap-2 rounded-lg border border-violet-700/50 bg-violet-900/20 px-3 py-2 text-violet-200/90 backdrop-blur-md transition-colors",
              "hover:border-violet-500/50 hover:shadow-[0_0_24px_rgba(168,85,247,0.45)]",
            )}
          >
            <s.icon className={cn("size-4 text-violet-300 transition-transform group-hover:scale-110")} />
            <span className="text-sm">{s.label}</span>
          </Btn>
        );
      })}
    </div>
  );
}
