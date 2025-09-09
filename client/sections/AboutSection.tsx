import { profileData, metrics } from "@/utils/constants";

export default function AboutSection() {
  return (
    <section id="sobre" className="mt-16">
      <h2 className="mb-6 text-xl font-semibold text-slate-800 dark:text-violet-200">Sobre</h2>
      <div className="rounded-2xl border p-6 bg-white border-slate-200 dark:border-violet-700/30 dark:bg-violet-900/20">
        <p className="text-slate-700 dark:text-violet-100/85">{profileData.bio}</p>
      </div>
    </section>
  );
}
