import { Droplets, Phone, Mail, MapPin, MessageCircle, Globe, Share2, Link as LinkIcon } from "lucide-react"
import { site, navLinks, whatsappLink } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Droplets className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-sm font-bold tracking-tight">PARA VIDA TODA</span>
                <span className="text-[11px] text-primary-foreground/70">Tratamento de Água</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Responsabilidade Técnica, projetos, instalação, manutenção e consultoria em tratamento de água.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Globe, label: "Site" },
                { icon: LinkIcon, label: "LinkedIn" },
                { icon: Share2, label: "Redes sociais" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
              Contato
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-accent">
                  <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-accent">
                  <MessageCircle className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-primary-foreground/80 transition-colors hover:text-accent">
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-primary-foreground/60">
          &copy; {new Date().getFullYear()} PARA VIDA TODA — Soluções em Tratamento de Água. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
