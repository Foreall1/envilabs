import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { GemeenteLogos } from "@/components/sections/GemeenteLogos";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  IconLayout,
  IconGraduation,
  IconArrowRight,
  IconFileCheck,
  IconMap,
  IconCompass,
  IconDatabase,
} from "@/components/ui/icons";

const pijlers = [
  {
    href: "/toepassingen",
    Icon: IconLayout,
    title: "Digitale toepassingen",
    body: "We bouwen software op maat voor het fysieke domein — van dashboards en kaartapplicaties tot dataloketten en processen.",
    cta: "Bekijk toepassingen",
  },
  {
    href: "/trainingen",
    Icon: IconGraduation,
    title: "Trainingen & opleiding",
    body: "We leiden teams op om digitaal en datagedreven te werken. In-company, in trajecten en in losse sessies.",
    cta: "Bekijk trainingen",
  },
];

const werkterreinen = [
  {
    Icon: IconFileCheck,
    title: "Omgevingswet & VTH",
    body: "Vergunningverlening, toezicht en handhaving — gekoppeld op het DSO.",
  },
  {
    Icon: IconMap,
    title: "Ruimte & wonen",
    body: "Plannen, gebieden en opgaven inzichtelijk en werkbaar maken.",
  },
  {
    Icon: IconCompass,
    title: "Milieu & leefomgeving",
    body: "Data en processen rond een gezonde, veilige leefomgeving.",
  },
  {
    Icon: IconDatabase,
    title: "Beheer & data",
    body: "Informatie over de openbare ruimte ontsluiten en koppelen.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section tone="paper" className="pt-16 lg:pt-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <Badge tone="info">Voor het fysieke domein</Badge>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="mt-4 font-display text-[clamp(2.5rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-tightest text-navy">
                  Digitale toepassingen voor het fysieke domein
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-600">
                  EnviLabs bouwt software die het werk in de fysieke
                  leefomgeving makkelijker maakt. En we leiden de mensen op die
                  ermee werken.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" size="lg">
                    Neem contact op
                    <IconArrowRight className="h-5 w-5" />
                  </Button>
                  <Button href="/toepassingen" size="lg" variant="ghost">
                    Bekijk toepassingen
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 font-mono text-caption tracking-mono text-slate-500">
                  Maatwerk · Trainingen · Datacentrum in Nederland
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <DashboardMockup />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Social proof */}
      <GemeenteLogos />

      {/* Twee pijlers */}
      <Section tone="bg" aria-labelledby="aanbod-titel">
        <Container>
          <Reveal>
            <SectionHeading
              id="aanbod-titel"
              eyebrow="Wat we doen"
              title="Bouwen én opleiden"
              description="EnviLabs is geen één-product-bedrijf. We maken de toepassing die jouw vraagstuk oplost, en we zorgen dat je team ermee verder kan."
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pijlers.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <Card interactive className="flex h-full flex-col">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy text-paper">
                    <p.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-h3 font-display text-navy">{p.title}</h3>
                  <p className="mt-2 flex-1 text-ui leading-relaxed text-slate-600">{p.body}</p>
                  <Link
                    href={p.href}
                    className="mt-6 inline-flex items-center gap-2 text-ui font-medium text-navy hover:text-teal"
                  >
                    {p.cta}
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Voorbeeld: software-mockup */}
      <Section tone="paper" aria-labelledby="voorbeeld-titel">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="voorbeeld-titel"
                  eyebrow="Eén voorbeeld"
                  title="Software die overzicht geeft"
                  description="Een van de toepassingen die we bouwen: een werkomgeving die data, termijnen en status samenbrengt. Zo weet een team altijd wat aandacht vraagt."
                />
              </Reveal>
              <Reveal delay={80}>
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Gebouwd rond de werkwijze van het team",
                    "Status met icoon én tekst, nooit kleur alleen",
                    "Koppelt met bestaande bronnen en systemen",
                  ].map((punt) => (
                    <li key={punt} className="flex items-start gap-3 text-ui text-slate-700">
                      <span className="mt-px text-teal">
                        <IconArrowRight className="h-5 w-5" />
                      </span>
                      {punt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <DashboardMockup />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Werkterreinen */}
      <Section tone="bg" aria-labelledby="terreinen-titel">
        <Container>
          <Reveal>
            <SectionHeading
              id="terreinen-titel"
              eyebrow="Waar we werken"
              title="Thuis in het hele fysieke domein"
              description="Van de Omgevingswet tot beheer van de openbare ruimte. We kennen de praktijk en de regels die erbij horen."
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {werkterreinen.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 70}>
                <Card className="h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-slate-100 text-navy">
                    <t.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-h3 font-display text-navy">{t.title}</h3>
                  <p className="mt-2 text-ui leading-relaxed text-slate-600">{t.body}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <p className="mt-8 text-ui text-slate-600">
              De Omgevingswet is één van onze werkterreinen — niet het enige. Heb
              je een vraagstuk in het fysieke domein?{" "}
              <Link href="/contact" className="font-medium text-navy underline hover:text-teal">
                Laat het ons weten
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Afsluitende CTA */}
      <CtaSection />
    </>
  );
}
