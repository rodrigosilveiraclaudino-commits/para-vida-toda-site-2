import { UserCheck, Settings2, Award, Handshake, TrendingUp, Headset } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const reasons = [
  { icon: UserCheck, title: "Conhecimento técnico", desc: "Atuação e conhecimento na área de tratamento de água." },
  { icon: Settings2, title: "Soluções personalizadas", desc: "Projetos e serviços conforme a necessidade de cada cliente." },
  { icon: Award, title: "Responsabilidade Técnica", desc: "Suporte e acompanhamento técnico conforme o escopo contratado." },
  { icon: Handshake, title: "Atendimento completo", desc: "Projetos, instalação, manutenção, consultoria e dimensionamento." },
  { icon: TrendingUp, title: "Compromisso com resultados", desc: "Foco na eficiência e no bom funcionamento dos sistemas." },
]

export function WhyUs() {
  return (
    <section className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a PARA VIDA TODA"
          description="Conhecimento técnico, compromisso e soluções sob medida que fazem a diferença."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-brand-dark">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
