import { profileData } from "@/utils/constants";

export default function ContactSection() {
  return (
    <section id="contato" className="mt-16">
      <h2 className="text-xl font-semibold text-slate-800 dark:text-violet-200">Contato</h2>
      <div className="mt-4 space-y-2 text-slate-700 dark:text-violet-100/85">
        <div>
          Email:{" "}
          <a
            className="text-blue-300 hover:text-blue-200"
            href={`mailto:${profileData.email}`}
          >
            {profileData.email}
          </a>
        </div>
        <div>Localização: {profileData.location}</div>
        <div>Disponibilidade: {profileData.availability}</div>
      </div>
    </section>
  );
}
