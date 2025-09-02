import { Moon, Sun } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SocialButtons from "@/components/SocialButtons";
import { LogoText } from "@/components/ui/logo";

function useTheme() {
  const [theme, setTheme] = useState<string>(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "dark"
      : "dark",
  );
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, setTheme } as const;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const loc = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-gray-50 to-white text-slate-900 dark:from-violet-950 dark:via-gray-900 dark:to-black dark:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-20 no-print [background:radial-gradient(circle_at_center,rgba(109,40,217,0.25),transparent_45%),repeating-linear-gradient(0deg,rgba(168,85,247,0.15)_0px,rgba(168,85,247,0.15)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(90deg,rgba(168,85,247,0.1)_0px,rgba(168,85,247,0.1)_1px,transparent_1px,transparent_32px)]" />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-violet-300/40 bg-white/60 backdrop-blur-md dark:border-violet-700/30 dark:bg-black/40 no-print">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="transition-opacity hover:opacity-80">
            <LogoText />
          </Link>
          <nav className="hidden gap-6 md:flex">
            {[
              { href: "/#sobre", label: "sobre" },
              { href: "/#projetos", label: "projetos" },
              { href: "/#skills", label: "skills" },
              { href: "/#contato", label: "contato" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-violet-200/80 hover:text-violet-100"
              >
                #{item.label}
              </a>
            ))}
            <NavLink
              to="/resume"
              className="text-sm text-emerald-400 hover:text-emerald-300"
            >
              currículo
            </NavLink>
          </nav>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md border border-violet-700/40 bg-violet-900/20 p-2 text-violet-200 hover:border-violet-500/50"
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pt-24 pb-16">{children}</main>

      <footer className="border-t border-violet-300/40 bg-white/50 py-6 dark:border-violet-700/30 dark:bg-black/30 no-print">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <span className="text-xs text-violet-200/80">
            © {new Date().getFullYear()} tanno.online
          </span>
          <SocialButtons />
        </div>
      </footer>
    </div>
  );
}
