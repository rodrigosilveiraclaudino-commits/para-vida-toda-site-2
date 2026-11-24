import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-accent px-4 py-4 text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[10rem] sm:inline">
        Fale conosco
      </span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent/40" />
    </a>
  )
}
