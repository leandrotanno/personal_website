import React from "react";

export default function PersonalSection() {
  return (
    <section id="sobre-mim" className="mt-12 scroll-mt-20">
      <div className="mx-auto max-w-3xl rounded-xl border border-slate-200/40 bg-white/5 p-6 backdrop-blur dark:border-violet-700/20">
        <h2 className="text-lg font-bold text-violet-700 dark:text-violet-200 print-muted">Sobre mim</h2>
        <div className="mt-4 text-sm text-slate-700 dark:text-slate-200/85">
          <p>
            Sou uma pessoa curiosa e determinada, apaixonada por transformar problemas complexos em soluções simples e úteis. Fora do trabalho gosto de explorar
            projetos pessoais, aprender novas linguagens e ferramentas, e contribuir em comunidades técnicas.
          </p>
          <p className="mt-3">
            Acredito em equilíbrio entre vida pessoal e profissional: cuidar da saúde física e mental me ajuda a ser mais criativo e produtivo nas minhas entregas.
          </p>

          <div className="mt-4">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Algumas coisas sobre mim</h3>
            <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-200/85">
              <li>Gosto de ciclismo e trilhas aos finais de semana.</li>
              <li>Curto fotografia analógica e edição de imagens.</li>
              <li>Costumo aprender sobre música eletrônica e sintetizadores nas horas vagas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
