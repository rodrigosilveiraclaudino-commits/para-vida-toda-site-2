"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

type Category = "Todos" | "ETA" | "Bombas" | "Tubulações" | "Reservatórios" | "Instalações"

const filters: Category[] = ["Todos", "ETA", "Bombas", "Tubulações", "Reservatórios", "Instalações"]

const projects: { src: string; alt: string; category: Exclude<Category, "Todos"> }[] = [
  { src: "/images/project-eta.png", alt: "Estação de tratamento de água (ETA)", category: "ETA" },
  { src: "/images/project-pumps.png", alt: "Sistema de bombas de água", category: "Bombas" },
  { src: "/images/project-piping.png", alt: "Sistema de tubulações industriais", category: "Tubulações" },
  { src: "/images/project-reservoir.png", alt: "Reservatórios de armazenamento de água", category: "Reservatórios" },
  { src: "/images/project-installation.png", alt: "Instalação de sistema de tratamento", category: "Instalações" },
  { src: "/images/project-filtration.png", alt: "Unidades de filtração por membrana", category: "Instalações" },
]

export function Gallery() {
  const [active, setActive] = useState<Category>("Todos")

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Portfólio"
          title="Galeria de Projetos"
          description="Veja exemplos ilustrativos de sistemas, equipamentos e instalações de tratamento de água."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === filter
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-background text-foreground/70 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.src}
              className="group relative overflow-hidden rounded-2xl border border-border"
            >
              <Image
                src={project.src || "/placeholder.svg"}
                alt={project.alt}
                width={500}
                height={375}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-brand-dark/80 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {project.category}
                  </span>
                  <p className="mt-2 text-sm font-medium text-primary-foreground">{project.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
