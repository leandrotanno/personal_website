import Layout from "@/components/Layout";
import { ProgressBar } from "@/components/SkillCard";
import { profileData, skills } from "@/utils/constants";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-blue-300/50 bg-blue-50/50 px-2 py-0.5 text-[11px] text-blue-800 dark:border-blue-400/40 dark:bg-blue-400/10 dark:text-blue-200 print-card">
      {children}
    </span>
  );
}

export default function Resume() {
  return (
    <Layout>
      <div className="no-print mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-violet-200">Currículo</h1>
        <button
          onClick={() => window.print()}
          className="rounded-md border border-violet-700/40 bg-violet-900/20 px-3 py-2 text-sm text-violet-100 hover:border-violet-500/50"
        >
          Imprimir / PDF
        </button>
      </div>

      <article className="mx-auto max-w-3xl rounded-xl border border-blue-200/40 bg-white/5 p-6 backdrop-blur print-card">
        {/* Header */}
        <header className="mb-5 grid gap-4 sm:grid-cols-[120px_1fr_1fr]">
          <div className="flex flex-col items-center justify-center">
            <div className="size-24 rounded-full border border-blue-300/60 bg-gradient-to-br from-blue-200/60 to-emerald-200/40 dark:from-violet-700/40 dark:to-emerald-600/30 print-card" />
          </div>
          <div className="rounded-lg border border-blue-300/40 bg-blue-50/30 p-3 print-card">
            <div className="text-xs text-slate-600 print-muted">Hello, my name is</div>
            <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white print-muted">{profileData.name}</div>
            <p className="mt-1 text-sm text-slate-700/90 dark:text-violet-100/85 print-muted">{profileData.bio}</p>
          </div>
          <div className="rounded-lg border border-blue-300/40 bg-blue-50/30 p-3 print-card">
            <div className="text-xs text-slate-600 print-muted">Currently, I work as a</div>
            <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white print-muted">{profileData.title}</div>
            <p className="mt-1 text-sm text-slate-700/90 dark:text-violet-100/85 print-muted">{profileData.location} · {profileData.email}</p>
          </div>
        </header>

        {/* Experience */}
        <section className="avoid-break">
          <h2 className="border-b-2 border-blue-500/60 pb-1 text-lg font-bold text-slate-900 dark:text-white print-muted">Experience</h2>
          <div className="mt-3 space-y-4">
            <div className="rounded-lg border border-slate-200/50 bg-slate-50/50 p-4 dark:border-violet-700/30 dark:bg-violet-900/10 print-card">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-semibold text-slate-900 dark:text-violet-100 print-muted">Analytics Engineer</div>
                <div className="text-xs text-slate-600 dark:text-violet-200/70 print-muted">2019 — Presente</div>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-800 dark:text-violet-100/85 print-muted">
                <li>Projetos de web analytics end-to-end e automações de dados</li>
                <li>Criação de pipelines de dados e dashboards com insights</li>
                <li>Modelagem preditiva para retenção e crescimento</li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Python','GA4','BigQuery','Dashboards','Machine Learning','SQL'].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="avoid-break mt-6">
          <h2 className="border-b-2 border-blue-500/60 pb-1 text-lg font-bold text-slate-900 dark:text-white print-muted">Education</h2>
          <div className="mt-3 rounded-lg border border-slate-200/50 bg-slate-50/50 p-4 text-sm text-slate-800 dark:border-violet-700/30 dark:bg-violet-900/10 dark:text-violet-100/85 print-card print-muted">
            Graduação e cursos focados em dados, ML e engenharia de software
          </div>
        </section>

        {/* Skills */}
        <section className="avoid-break mt-6">
          <h2 className="border-b-2 border-blue-500/60 pb-1 text-lg font-bold text-slate-900 dark:text-white print-muted">Skills</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.name} className="rounded-lg border border-slate-200/50 bg-slate-50/50 p-3 dark:border-violet-700/30 dark:bg-violet-900/10 print-card">
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-900 dark:text-violet-100 print-muted">{s.name}</span>
                  <span className="font-mono text-blue-700 dark:text-emerald-400 print-muted">{s.level}%</span>
                </div>
                <ProgressBar value={s.level} />
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="avoid-break mt-6">
          <h2 className="border-b-2 border-blue-500/60 pb-1 text-lg font-bold text-slate-900 dark:text-white print-muted">Contact</h2>
          <div className="mt-3 grid gap-2 text-sm text-slate-800 dark:text-violet-100/85 print-muted">
            <div>{profileData.location}</div>
            <a className="text-blue-700 hover:underline print-muted" href={`mailto:${profileData.email}`}>{profileData.email}</a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
