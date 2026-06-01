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
  IconBarChart,
  IconLink,
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

// Kerncijfers — illustratief, vervang door geverifieerde cijfers.
const kerncijfers = [
  { value: "30+", label: "Projecten opgeleverd" },
  { value: "20+", label: "Publieke organisaties" },
  { value: "4", label: "Werkterreinen" },
  { value: "100%", label: "In Nederland gehost" },
];

// Voorbeelden van lopend werk — illustratief, vervang door echte projecten.
const projecten = [
  {
    Icon: IconBarChart,
    tag: "Omgevingsdienst",
    title: "Dashboard doorlooptijden",
    body: "Live inzicht in de doorlooptijd van vergunningaanvragen, gekoppeld aan het zaaksysteem.",
  },
  {
    Icon: IconLink,
    tag: "Gemeente",
    title: "DSO-koppeling",
    body: "Aanvragen uit het Omgevingsloket komen automatisch bij de juiste behandelaar binnen.",
  },
  {
    Icon: IconGraduation,
    tag: "Provincie",
    title: "Opleidingstraject data",
    body: "Een team van beleidsadviseurs leert sturen op data in de fysieke leefomgeving.",
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
                  EnviLabs ontwikkelt, adviseert en leidt op voor gemeenten,
                  provincies, waterschappen en andere publieke organisaties. We
                  maken het werk in de fysieke leefomgeving merkbaar makkelijker.
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
                  Bouwen · Adviseren · Opleiden · Gehost in Nederland
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

      {/* Kerncijfers */}
      <Section tone="navy" aria-labelledby="cijfers-titel" className="py-12 lg:py-16">
        <Container>
          <h2 id="cijfers-titel" className="sr-only">
            EnviLabs in cijfers
          </h2>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {kerncijfers.map((c, i) => (
              <Reveal key={c.label} delay={i * 70}>
                <div>
                  <dt className="sr-only">{c.label}</dt>
                  <dd className="font-display text-[2.5rem] font-semibold leading-none tracking-tightest text-paper">
                    {c.value}
                  </dd>
                  <p aria-hidden="true" className="mt-2 text-ui text-slate-300">
                    {c.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

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

      {/* Waar we aan werken */}
      <Section tone="paper" aria-labelledby="werk-titel">
        <Container>
          <Reveal>
            <SectionHeading
              id="werk-titel"
              eyebrow="Waar we aan werken"
              title="Een greep uit ons werk"
              description="Van een dashboard tot een opleidingstraject — vaak lopen bouwen, adviseren en opleiden in elkaar over."
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {projecten.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <Card interactive className="h-full">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-slate-100 text-navy">
                      <p.Icon className="h-6 w-6" />
                    </span>
                    <Badge tone="neutral" withIcon={false}>
                      {p.tag}
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-h3 font-display text-navy">{p.title}</h3>
                  <p className="mt-2 text-ui leading-relaxed text-slate-600">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Quote */}
      <Section tone="bg" aria-labelledby="quote-titel">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 id="quote-titel" className="sr-only">
              Wat opdrachtgevers zeggen
            </h2>
            <p className="font-mono text-caption tracking-mono text-teal">— EnviLabs</p>
            <blockquote className="mt-4 font-display text-[1.5rem] font-medium leading-snug tracking-tight text-navy md:text-[2rem]">
              &ldquo;Eindelijk een partij die de techniek én het publieke werk
              begrijpt — en die zorgt dat het team er zelf mee verder kan.&rdquo;
            </blockquote>
            <p className="mt-6 text-ui text-slate-600">
              Teamleider Vergunningen, middelgrote gemeente
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Afsluitende CTA */}
      <CtaSection />
    </>
  );
}
