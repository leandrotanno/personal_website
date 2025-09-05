import { useEffect, useMemo, useState } from "react";
import { Terminal } from "@/components/ui/terminal";
import {
  profileData,
  terminalCommands,
  terminalConfig,
} from "@/utils/constants";
import DashboardViz from "@/components/DashboardViz";

function useTyping(text: string, speed = 45) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setOut(text.slice(0, i++));
      if (i > text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

export default function HeroSection() {
  const typed = useTyping("Leandro Tanno", 60);
  const [showViz, setShowViz] = useState(false);
  const singleScript = useMemo(() => [terminalCommands[1]], []);

  return (
    <section>
      {/* Linha 1: cabeçalho ocupa toda a largura */}
      <div className="mb-6">
        <h1 className="bg-gradient-to-r from-violet-700 via-violet-600 to-emerald-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
          {typed}
        </h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-violet-100/90">{profileData.title}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-violet-200/80">
          <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-slate-700 dark:border-violet-700/40 dark:bg-violet-900/20 dark:text-inherit">
            {profileData.location}
          </span>
          <span className="rounded-md border border-emerald-300 bg-emerald-50 px-2 py-1 text-emerald-700 dark:border-emerald-700/40 dark:bg-emerald-900/10 dark:text-emerald-300">
            {profileData.availability}
          </span>
        </div>
      </div>

      {/* Linha 2: Terminal e Dashboard lado a lado, com dashboard maior */}
      <div className="grid items-start gap-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Terminal
            commands={singleScript}
            config={terminalConfig}
            onComplete={() => setTimeout(() => setShowViz(true), 800)}
          />
        </div>

        <div className="md:col-span-7">
          {showViz ? (
            <div className="animate-in fade-in-0 duration-500">
              <DashboardViz />
            </div>
          ) : (
            <section
              aria-label="Dashboard carregando"
              className="rounded-2xl border p-5 bg-white border-slate-200 dark:border-violet-700/30 dark:bg-black/20"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="h-3 w-40 animate-pulse rounded bg-slate-200 dark:bg-violet-800/30" />
                <div className="h-2 w-28 animate-pulse rounded bg-slate-200 dark:bg-violet-800/20" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border p-2 bg-white border-slate-200 dark:border-violet-700/30 dark:bg-black/10"
                  >
                    <div className="mb-1 h-3 w-40 animate-pulse rounded bg-slate-200 dark:bg-violet-800/30" />
                    <div className="h-32 animate-pulse rounded-md bg-slate-100 dark:bg-violet-800/20" />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
