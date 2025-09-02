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
      {/* Header e primeiros gráficos */}
      <div className="grid items-start gap-8 md:grid-cols-2">
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
          {showViz ? (
            <div className="animate-in fade-in-0 duration-500">
              <DashboardViz showTopCharts />
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-violet-700/30 bg-violet-900/10 p-4 text-sm text-violet-200/80">
                Aguardando resultados...
                <div className="mt-2 h-24 animate-pulse rounded-lg bg-violet-800/20" />
              </div>
              <div className="rounded-xl border border-violet-700/30 bg-violet-900/10 p-4 text-sm text-violet-200/80">
                Pipeline Titanic...
                <div className="mt-2 h-24 animate-pulse rounded-lg bg-violet-800/20" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Terminal e gráficos inferiores */}
      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        <div>
          <Terminal commands={terminalCommands} config={terminalConfig} onComplete={() => setShowViz(true)} />
        </div>
        <div>
          {showViz && (
            <div className="animate-in fade-in-0 duration-500">
              <DashboardViz showBottomCharts />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
