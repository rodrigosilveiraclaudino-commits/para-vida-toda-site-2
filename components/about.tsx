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
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sou químico e possuo experiência prática na área de tratamento de água,
              atuando em diferentes setores, incluindo as indústrias farmacêutica e
              alimentícia. Ao longo de 15 anos, trabalhei com sistemas de osmose
              reversa, envolvendo operação, manutenção, projetos e dimensionamento.
            </p>
            <p>
              Também possuo experiência no desenvolvimento, dimensionamento, montagem
              e manutenção de sistemas de filtração, abrandamento, carvão ativado,
              pré-tratamento, cloração, manutenção mecânica, elétrica e automação.
            </p>
            <p>
              Através da <strong className="font-semibold text-foreground">PARA VIDA TODA</strong>, ofereço soluções técnicas que vão do projeto e
              dimensionamento à instalação, operação e manutenção, sempre considerando
              as necessidades de cada sistema e cliente.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Localizada na região Sul do Brasil, a PARA VIDA TODA atende empresas e
                indústrias em todo o território nacional
              </strong>
              , com atendimento presencial conforme a região e o serviço contratado,
              além de consultoria e suporte técnico.
            </p>
          </div>

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
