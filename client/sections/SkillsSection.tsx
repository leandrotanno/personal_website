import { skills } from "@/utils/constants";
import SkillCard from "@/components/SkillCard";

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-16">
      <h2 className="mb-6 text-xl font-semibold text-violet-200">Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <SkillCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}
