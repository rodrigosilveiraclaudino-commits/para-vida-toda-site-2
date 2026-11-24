export const site = {
  name: "PARA VIDA TODA",
  tagline: "Soluções em Tratamento de Água",
  phone: "(48) 99219-6268",
  phoneHref: "tel:+5548992196268",
  whatsappNumber: "5548992196268",
  email: "rodrigosilveiraclaudino@gmail.com",
  address: "Atendimento em Santa Catarina, Paraná e Rio Grande do Sul",
}

export function whatsappLink(message?: string) {
  const text = message ?? "Olá! Gostaria de solicitar um orçamento para tratamento de água."
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`
}

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Quem Atendemos", href: "#quem-atendemos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]
