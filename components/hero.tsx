import Image from "next/image"
import { ArrowRight, MessageCircle, ShieldCheck, PencilRuler, Wrench, CalendarCheck } from "lucide-react"
import { whatsappLink } from "@/lib/site"

const badges = [
  { icon: ShieldCheck, label: "Responsabilidade Técnica" },
  { icon: PencilRuler, label: "Projetos Personalizados" },
  { icon: Wrench, label: "Instalação Especializada" },
  { icon: CalendarCheck, label: "Manutenção Preventiva" },
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 md:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Engenharia em tratamento de água
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-balance text-brand-dark md:text-5xl lg:text-6xl">
            Soluções inteligentes em tratamento de água para sua empresa.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Responsabilidade Técnica, projetos personalizados, instalação e manutenção de sistemas de tratamento de água, com atendimento especializado em Santa Catarina, Paraná e Rio Grande do Sul.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Olá! Gostaria de solicitar um orçamento para tratamento de água.")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:scale-[1.03]"
            >
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar pelo WhatsApp
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-water-system.png"
              alt="Sistema moderno de tratamento de água com tanques em aço inox e tubulações"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
