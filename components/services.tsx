import { ClipboardCheck, DraftingCompass, HardHat, Wrench, Lightbulb, Gauge } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    icon: ClipboardCheck,
    title: "Responsabilidade Técnica",
    desc: "Suporte técnico e responsabilidade profissional conforme a atividade, as exigências aplicáveis e o escopo contratado.",
  },
  {
    icon: DraftingCompass,
    title: "Projetos",
    desc: "Desenvolvimento de projetos personalizados conforme a necessidade da sua empresa.",
  },
  {
    icon: HardHat,
    title: "Instalação",
    desc: "Instalação especializada de equipamentos e sistemas de tratamento de água.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    desc: "Manutenção preventiva e corretiva de sistemas de tratamento de água.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria",
    desc: "Avaliação técnica e orientação especializada para as necessidades do seu sistema.",
  },
  {
    icon: Gauge,
    title: "Dimensionamento de Sistemas",
    desc: "Dimensionamento de sistemas conforme as necessidades e condições da operação.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Como Podemos Ajudar"
          description="Do projeto à manutenção, cobrimos todo o ciclo de vida do seu sistema de tratamento de água."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-accent/5 transition-transform duration-300 group-hover:scale-150" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="relative mt-5 font-heading text-lg font-semibold text-brand-dark">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
