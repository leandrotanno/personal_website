import { profileData, metrics } from "@/utils/constants";

export default function AboutSection() {
  return (
    <section id="sobre" className="mt-16">
      <div className="rounded-2xl border border-violet-700/30 bg-violet-900/20 p-6">
        <h2 className="text-xl font-semibold text-violet-200">Sobre</h2>
        <p className="mt-3 text-violet-100/85">{profileData.bio}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-violet-700/30 bg-violet-900/10 p-4 text-center">
              <div className="text-2xl font-extrabold text-violet-100">{m.value}</div>
              <div className="text-sm text-violet-200/80">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
