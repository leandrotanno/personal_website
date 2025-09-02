import { useEffect, useState } from "react";
import { Terminal } from "@/components/ui/terminal";
import { profileData, terminalCommands, terminalConfig } from "@/utils/constants";
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

  return (
    <section>
      <div className="grid items-start gap-8 md:grid-cols-2">
        {/* Coluna esquerda: título + terminal */}
        <div className="flex min-w-0 flex-col gap-6">
          <div>
            <h1 className="bg-gradient-to-r from-violet-400 via-violet-300 to-emerald-300 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
              {typed}
            </h1>
            <p className="mt-3 text-lg text-violet-100/90">{profileData.title}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-violet-200/80">
              <span className="rounded-md border border-violet-700/40 bg-violet-900/20 px-2 py-1">{profileData.location}</span>
              <span className="rounded-md border border-emerald-700/40 bg-emerald-900/10 px-2 py-1 text-emerald-300">
                {profileData.availability}
              </span>
            </div>
          </div>

          <div>
            <Terminal
              commands={terminalCommands}
              config={terminalConfig}
              onComplete={() => setShowViz(true)}
            />
          </div>
        </div>

        {/* Coluna direita: seção única de dashboard alinhada ao título */}
        <div>
          {showViz ? (
            <div className="animate-in fade-in-0 duration-500">
              <DashboardViz />
            </div>
          ) : (
            <section aria-label="Dashboard carregando" className="rounded-2xl border border-violet-700/30 bg-black/20 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-3 w-40 animate-pulse rounded bg-violet-800/30" />
                <div className="h-2 w-28 animate-pulse rounded bg-violet-800/20" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-xl border border-violet-700/30 bg-black/10 p-2">
                    <div className="mb-1 h-3 w-40 animate-pulse rounded bg-violet-800/30" />
                    <div className="h-28 animate-pulse rounded-md bg-violet-800/20" />
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
