import { ArrowRight, MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

export function Cta() {
  return (
    <section id="contato" className="scroll-mt-24 px-4 py-20 md:px-6 lg:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground md:px-12 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-brand-dark/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Vamos encontrar a melhor solução para o tratamento de água da sua empresa.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            Fale com nossa equipe técnica e receba um diagnóstico e orçamento
            personalizado para o seu sistema.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
