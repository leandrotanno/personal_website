import Layout from "@/components/Layout";
import { ProgressBar } from "@/components/SkillCard";
import { profileData, skills } from "@/utils/constants";

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
      <div className="cv-container grid gap-6 md:grid-cols-[280px_1fr]">
        <aside className="space-y-6 rounded-xl border border-violet-700/30 bg-violet-900/10 p-5">
          <div className="flex flex-col items-center text-center">
            <div className="size-24 rounded-full border border-violet-700/40 bg-gradient-to-br from-violet-700/40 to-emerald-600/30" />
            <h2 className="mt-3 text-lg font-semibold text-violet-100">{profileData.name}</h2>
            <p className="text-sm text-violet-200/80">{profileData.title}</p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-violet-200">Contato</h3>
            <div className="space-y-1 text-sm text-violet-100/85">
              <div>{profileData.location}</div>
              <div>
                <a className="text-blue-300 hover:text-blue-200" href={`mailto:${profileData.email}`}>{profileData.email}</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-violet-200">Skills Técnicas</h3>
            <div className="space-y-3">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-violet-100/85">{s.name}</span>
                    <span className="font-mono text-emerald-400">{s.level}%</span>
                  </div>
                  <ProgressBar value={s.level} />
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="space-y-6">
          <section>
            <h3 className="mb-2 text-lg font-semibold text-violet-200">Sobre</h3>
            <p className="text-violet-100/85">{profileData.bio}</p>
          </section>
          <section>
            <h3 className="mb-3 text-lg font-semibold text-violet-200">Experiência</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-violet-700/30 bg-violet-900/10 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-semibold text-violet-100">Analytics Engineer</div>
                  <div className="text-xs text-violet-200/70">2019 — Presente</div>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-violet-100/85">
                  <li>Projetos de web analytics end-to-end e automações de dados</li>
                  <li>Criação de pipelines de dados e dashboards com insights</li>
                  <li>Modelagem preditiva para retenção e crescimento</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h3 className="mb-3 text-lg font-semibold text-violet-200">Educação</h3>
            <div className="rounded-lg border border-violet-700/30 bg-violet-900/10 p-4 text-sm text-violet-100/85">
              Graduação e cursos focados em dados, ML e engenharia de software
            </div>
          </section>
          <section>
            <h3 className="mb-3 text-lg font-semibold text-violet-200">Projetos</h3>
            <div className="rounded-lg border border-violet-700/30 bg-violet-900/10 p-4 text-sm text-violet-100/85">
              Detalhes adicionais dos projetos em destaque disponíveis sob demanda
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
