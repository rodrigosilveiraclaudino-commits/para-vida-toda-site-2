"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const faqs = [
  { q: "Vocês atendem minha cidade?", a: "O atendimento contempla Santa Catarina, Paraná e Rio Grande do Sul. Entre em contato informando sua localização e necessidade para verificarmos o atendimento." },
  { q: "Como solicitar orçamento?", a: "Entre em contato pelo WhatsApp para apresentar sua necessidade e avaliar a melhor solução técnica e o orçamento." },
  { q: "Vocês fazem manutenção?", a: "Sim. Atuo com manutenção preventiva e corretiva em sistemas de tratamento de água." },
  { q: "Prestam Responsabilidade Técnica?", a: "Sim. Ofereço serviços de Responsabilidade Técnica conforme a atividade, as exigências aplicáveis e o escopo contratado." },
  { q: "Projetam novos sistemas?", a: "Sim. Desenvolvo projetos e dimensionamento conforme as necessidades de cada sistema." },
  { q: "Posso solicitar uma avaliação do meu sistema?", a: "Sim. Entre em contato pelo WhatsApp para apresentar sua necessidade e avaliar a melhor solução técnica." },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas Frequentes"
          description="Reunimos as respostas para as dúvidas mais comuns sobre nossos serviços."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-semibold text-brand-dark">
                    {faq.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
