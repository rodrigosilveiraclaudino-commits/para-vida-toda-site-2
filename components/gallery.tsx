import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

const solutions = [
  {
    title: "Osmose reversa",
    description: "Projetos, dimensionamento, operação e manutenção.",
    src: "/images/project-filtration.png",
    alt: "Sistema industrial de osmose reversa com membranas e tubulações",
  },
  {
    title: "Sistemas de filtração",
    description: "Filtros de areia e pré-tratamento.",
    src: "/images/project-eta.png",
    alt: "Filtros industriais de areia em uma instalação de tratamento de água",
  },
  {
    title: "Cloração automática",
    description: "Sistemas de dosagem e controle de cloro.",
    src: "/images/project-piping.png",
    alt: "Sistema automático de dosagem química para tratamento de água",
  },
  {
    title: "Abrandadores",
    description: "Resinas de troca iônica e regeneração automática.",
    src: "/images/project-reservoir.png",
    alt: "Abrandadores industriais com vasos de resina e reservatórios de água",
  },
  {
    title: "Carvão ativado",
    description: "Projetos e sistemas de filtração.",
    src: "/images/project-installation.png",
    alt: "Filtros industriais de carvão ativado em uma estação de tratamento",
  },
  {
    title: "Manutenção e automação",
    description: "Bombas, motores, comandos e controles.",
    src: "/images/project-pumps.png",
    alt: "Técnica realizando manutenção em bomba e motor de tratamento de água",
  },
]

export function Gallery() {
  return (
    <section className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Experiência profissional"
          title="Nossas Soluções em Tratamento de Água"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="overflow-hidden">
                <Image
                  src={solution.src}
                  alt={solution.alt}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-brand-dark">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
