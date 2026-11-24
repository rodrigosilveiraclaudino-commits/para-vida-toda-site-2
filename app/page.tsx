import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Audience } from "@/components/audience"
import { Services } from "@/components/services"
import { Problems } from "@/components/problems"
import { WhyUs } from "@/components/why-us"
import { Process } from "@/components/process"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <Services />
        <Problems />
        <WhyUs />
        <Process />
        <Gallery />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
