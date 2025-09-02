import { skills } from "@/utils/constants";

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-16">
      <h2 className="mb-6 text-xl font-semibold text-violet-200">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((s) => (
          <div
            key={s.name}
            className="group flex flex-col items-center rounded-xl border border-violet-700/30 bg-violet-900/10 p-4 hover:border-violet-500/50 hover:shadow-[0_0_24px_rgba(168,85,247,0.35)]"
            title={s.category}
          >
            <s.icon className="mb-2 size-7 text-violet-300 transition-transform group-hover:scale-110" />
            <span className="text-sm text-violet-100/90">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
