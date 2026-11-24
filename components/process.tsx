import { Phone, Search, FileText, Cog, LineChart } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  { icon: Phone, title: "Contato", desc: "Você entra em contato e conta sua necessidade." },
  { icon: Search, title: "Diagnóstico", desc: "Analisamos seu sistema e identificamos as soluções." },
  { icon: FileText, title: "Proposta", desc: "Elaboramos uma proposta técnica personalizada." },
  { icon: Cog, title: "Execução", desc: "Realizamos o projeto, instalação ou manutenção." },
  { icon: LineChart, title: "Acompanhamento", desc: "Suporte e acompanhamento conforme o serviço contratado." },
]

export function Process() {
  return (
    <section className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Nosso Processo"
          description="Um fluxo claro e organizado, do primeiro contato ao acompanhamento dos resultados."
        />

        <div className="mt-16">
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* connecting line for desktop */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-border md:block" />
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-primary shadow-sm">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold text-brand-dark">{title}</h3>
                <p className="mt-2 max-w-[13rem] text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
