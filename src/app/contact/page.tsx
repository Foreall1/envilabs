import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/sections/ContactForm";
import { IconMail, IconClock, IconShieldCheck } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met EnviLabs. Voor een toepassing op maat, een training of gewoon een eerste verkenning in het fysieke domein.",
};

const punten = [
  { Icon: IconMail, title: "Reactie binnen één werkdag", body: "We nemen snel contact op om je vraag te bespreken." },
  { Icon: IconClock, title: "Kort en concreet", body: "Een eerste gesprek van een half uur is vaak genoeg." },
  { Icon: IconShieldCheck, title: "Vrijblijvend", body: "Geen verplichtingen. Eerst kijken of het past." },
];

export default function ContactPage() {
  return (
    <>
      <Section tone="paper" className="pt-16 lg:pt-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Toelichting */}
            <div className="lg:col-span-5">
              <Reveal>
                <Badge tone="info">Contact</Badge>
                <h1 className="mt-4 font-display text-h1 font-semibold tracking-tightest text-navy md:text-[2.75rem]">
                  Neem contact op
                </h1>
                <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
                  Een toepassing op maat, een training, of eerst even sparren?
                  Laat je gegevens achter, dan nemen we contact met je op.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <ul className="mt-8 flex flex-col gap-4">
                  {punten.map((p) => (
                    <li key={p.title} className="flex items-start gap-3">
                      <span className="mt-px inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-100 text-navy">
                        <p.Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-ui font-semibold text-navy">{p.title}</span>
                        <span className="block text-ui text-slate-600">{p.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Formulier */}
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <h2 className="sr-only">Contactformulier</h2>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
