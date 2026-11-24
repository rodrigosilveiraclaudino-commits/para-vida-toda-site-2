import Image from "next/image"
import { ShieldCheck, Droplets, Award } from "lucide-react"

const highlights = [
  { icon: ShieldCheck, label: "Responsabilidade Técnica" },
  { icon: Droplets, label: "Soluções sob medida" },
  { icon: Award, label: "Atendimento especializado" },
]

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/technical-lead.png"
              alt="Responsável técnico da PARA VIDA TODA"
              width={560}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 bottom-8 hidden rounded-2xl border border-border bg-background px-5 py-4 shadow-xl sm:block">
            <p className="text-xs font-medium text-muted-foreground">Responsável Técnico</p>
            <p className="font-heading text-base font-semibold text-brand-dark">Engenharia especializada</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            Sobre a empresa
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance text-brand-dark md:text-4xl">
            Conhecimento Técnico Aplicado a Soluções Reais
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Sou químico e atuo na área de tratamento de água, oferecendo soluções
            técnicas para empresas, indústrias, condomínios e diferentes sistemas
            de tratamento. Através da PARA VIDA TODA, trabalho com Responsabilidade
            Técnica, projetos, dimensionamento, instalação, manutenção e consultoria,
            buscando atender às necessidades específicas de cada cliente. Meu objetivo
            é oferecer soluções eficientes, acompanhamento técnico e orientação
            especializada, contribuindo para o bom funcionamento dos sistemas de
            tratamento de água. Atendo Santa Catarina, Paraná e Rio Grande do Sul.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
