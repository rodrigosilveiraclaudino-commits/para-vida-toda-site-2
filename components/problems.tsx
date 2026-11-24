import { CheckCircle2, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const problems = [
  "Necessidade de Responsabilidade Técnica",
  "Água fora do padrão",
  "Baixa eficiência",
  "Manutenção frequente",
  "Projetos novos",
  "Adequação às normas",
  "Sistema antigo",
  "Redução de custos",
]

export function Problems() {
  return (
    <section className="scroll-mt-24 bg-brand-dark py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
              Diagnóstico
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Problemas que Resolvemos
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              Identificamos e solucionamos os principais desafios de tratamento
              de água enfrentados por empresas de todos os portes.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Resolver meu problema
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {problems.map((problem) => (
              <li
                key={problem}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium backdrop-blur-sm transition-colors hover:border-accent/50 hover:bg-white/10"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
