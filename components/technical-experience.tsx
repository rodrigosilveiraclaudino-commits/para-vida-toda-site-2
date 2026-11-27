import {
  Activity,
  Boxes,
  Cable,
  Cog,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const expertise = [
  {
    icon: Factory,
    title: "Osmose reversa",
    description:
      "15 anos de experiência na indústria farmacêutica e alimentícia, com operação, manutenção, projetos e dimensionamento de sistemas.",
  },
  {
    icon: Gauge,
    title: "Água de alimentação de caldeiras",
    description:
      "Dimensionamento, projeto e montagem de filtros para condicionamento da água de alimentação.",
  },
  {
    icon: Droplets,
    title: "Pré-tratamento e potabilização",
    description:
      "Dimensionamento de filtros de areia e desenvolvimento de sistemas de pré-tratamento para potabilização da água.",
  },
  {
    icon: Activity,
    title: "Cloração automática",
    description:
      "Projeto e instalação de sistemas automáticos de cloração com bombas dosadoras.",
  },
  {
    icon: FlaskConical,
    title: "Troca iônica e abrandamento",
    description:
      "Seleção e dimensionamento de resinas de troca iônica com apoio de softwares e cabeçotes automáticos de regeneração.",
  },
  {
    icon: Boxes,
    title: "Carvão ativado",
    description:
      "Projeto, dimensionamento e execução de sistemas de adsorção com carvão ativado.",
  },
  {
    icon: Cog,
    title: "Manutenção de equipamentos",
    description:
      "Manutenção mecânica de bombas e manutenção elétrica de equipamentos de tratamento.",
  },
  {
    icon: Cable,
    title: "Automação e controle",
    description:
      "Automação, comandos e controle para operação confiável de sistemas de tratamento de água.",
  },
]

export function TechnicalExperience() {
  return (
    <section id="experiencia-tecnica" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Experiência prática"
          title="Experiência Técnica"
          description="Conhecimento aplicado em todas as etapas: desenvolver, dimensionar, executar, operar e manter sistemas de tratamento de água."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-semibold tabular-nums text-muted-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-base font-semibold leading-snug text-brand-dark">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
