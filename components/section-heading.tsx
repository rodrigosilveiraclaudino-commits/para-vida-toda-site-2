export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance text-brand-dark md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
