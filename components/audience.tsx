import { Factory, Building2, Hotel, FlaskConical, Utensils } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const audiences = [
  { icon: Factory, title: "Indústrias e empresas", desc: "Soluções de tratamento de água para diferentes necessidades operacionais." },
  { icon: Building2, title: "Condomínios e edifícios", desc: "Avaliação, manutenção e soluções para sistemas de água de uso coletivo." },
  { icon: Hotel, title: "Estabelecimentos comerciais", desc: "Orientação e soluções para sistemas de tratamento de água." },
  { icon: FlaskConical, title: "Propriedades rurais", desc: "Sistemas e soluções conforme as necessidades de cada propriedade." },
  { icon: Utensils, title: "Sistemas de abastecimento e tratamento", desc: "Projetos, avaliação técnica, instalação e manutenção de sistemas." },
]

export function Audience() {
  return (
    <section id="quem-atendemos" className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Setores atendidos"
          title="Quem Atendemos"
          description="Atuamos com empresas que dependem de água tratada com segurança, eficiência e conformidade."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-brand-dark">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
