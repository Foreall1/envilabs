import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  IconMap,
  IconUsers,
  IconCheck,
  IconShieldCheck,
  IconLayout,
  IconCompass,
  IconGraduation,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "EnviLabs ontwikkelt, adviseert en leidt op voor gemeenten, provincies, waterschappen en andere publieke organisaties. Gevestigd in Assen, werkzaam door heel Nederland.",
  alternates: { canonical: "/over-ons" },
  openGraph: {
    title: "Over ons · EnviLabs",
    description:
      "EnviLabs ontwikkelt, adviseert en leidt op voor publieke organisaties. Gevestigd in Assen, werkzaam door heel Nederland.",
    url: "/over-ons",
  },
};

const activiteiten = [
  {
    Icon: IconLayout,
    title: "Ontwikkelen & bouwen",
    body: "We ontwikkelen en voeren innovatieve projecten uit — van een dashboard tot een volledige toepassing voor het publieke domein.",
  },
  {
    Icon: IconCompass,
    title: "Adviseren",
    body: "We adviseren bij complexe vraagstukken op het snijvlak van beleid, regelgeving en uitvoering.",
  },
  {
    Icon: IconGraduation,
    title: "Opleiden",
    body: "We leiden teams op om digitaal en datagedreven te werken, met trainingen op maat.",
  },
  {
    Icon: IconUsers,
    title: "Samenwerken & innoveren",
    body: "We gaan samenwerkingen aan met publieke en private partijen voor kennis-, product- en innovatieontwikkeling.",
  },
];

const waarden = [
  {
    Icon: IconUsers,
    title: "Dichtbij de praktijk",
    body: "We bouwen, adviseren en trainen mét de mensen die het werk doen. Hun praktijk bepaalt wat we maken.",
  },
  {
    Icon: IconMap,
    title: "Het vak als fundament",
    body: "We kennen het publieke domein en zijn regels — van de Omgevingswet tot beheer van de openbare ruimte.",
  },
  {
    Icon: IconCheck,
    title: "Duidelijk boven volledig",
    body: "Een scherm, advies of les die één ding goed doet is beter dan tien knoppen die je laten twijfelen.",
  },
  {
    Icon: IconShieldCheck,
    title: "Zorgvuldig met data",
    body: "Gegevens van inwoners verdienen bescherming. We verwerken in Nederland en delen niets zonder grond.",
  },
];

const feiten = [
  { label: "Rechtsvorm", value: "Besloten Vennootschap" },
  { label: "KvK", value: "82922306" },
  { label: "Standplaats", value: "Assen (NL)" },
  { label: "Werkgebied", value: "Heel Nederland" },
];

export default function OverOnsPage() {
  return (
    <>
      <Section tone="paper" className="pt-16 lg:pt-24">
        <Container>
          <Reveal className="max-w-2xl">
            <Badge tone="info">Over ons</Badge>
            <h1 className="mt-4 font-display text-h1 font-semibold tracking-tightest text-navy md:text-[2.75rem]">
              Een vaste partner voor het publieke domein
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
              EnviLabs ontwikkelt, adviseert en leidt op voor gemeenten,
              provincies, waterschappen en andere publieke organisaties. Vanuit
              Assen werken we door heel Nederland aan vraagstukken in de fysieke
              leefomgeving.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Activiteiten */}
      <Section tone="bg" aria-labelledby="activiteiten-titel">
        <Container>
          <Reveal>
            <SectionHeading
              id="activiteiten-titel"
              eyebrow="Wat we doen"
              title="Vier manieren waarop we publieke organisaties verdersturen"
              description="Bouwen, adviseren, opleiden en samenwerken — vaak in combinatie. Zo sluit elke oplossing aan op de praktijk én blijft die werken."
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activiteiten.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 70}>
                <Card className="h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy text-paper">
                    <a.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-h3 font-display text-navy">{a.title}</h3>
                  <p className="mt-2 text-ui leading-relaxed text-slate-600">{a.body}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Missie & visie */}
      <Section tone="paper" aria-labelledby="missie-titel">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <p className="label-mono text-navy">Missie</p>
                <h2 id="missie-titel" className="mt-3 text-h3 font-display text-navy">
                  Het werk in het publieke domein eenvoudiger maken
                </h2>
                <p className="mt-3 text-ui leading-relaxed text-slate-600">
                  We willen dat organisaties hun tijd besteden aan de
                  leefomgeving en de mensen die er wonen — niet aan worstelen met
                  systemen. Daarom bouwen we passende software, adviseren we
                  scherp en delen we onze kennis.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card className="h-full">
                <p className="label-mono text-navy">Visie</p>
                <h2 className="mt-3 text-h3 font-display text-navy">
                  Techniek en kennis horen samen
                </h2>
                <p className="mt-3 text-ui leading-relaxed text-slate-600">
                  Software werkt pas als mensen ermee overweg kunnen. Daarom
                  combineren we ontwikkelen, adviseren en opleiden — zodat een
                  oplossing niet stilvalt, maar het team echt verder helpt.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Waarden */}
      <Section tone="bg" aria-labelledby="waarden-titel">
        <Container>
          <Reveal>
            <SectionHeading
              id="waarden-titel"
              eyebrow="Waar we voor staan"
              title="Vier waarden die ons werk sturen"
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {waarden.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 70}>
                <Card className="h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-slate-100 text-navy">
                    <w.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-h3 font-display text-navy">{w.title}</h3>
                  <p className="mt-2 text-ui leading-relaxed text-slate-600">{w.body}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Bedrijfsgegevens */}
      <Section tone="paper" aria-labelledby="feiten-titel">
        <Container>
          <Reveal>
            <SectionHeading
              id="feiten-titel"
              eyebrow="Het bedrijf"
              title="EnviLabs B.V."
              description="Een Nederlandse onderneming, gevestigd in Assen aan de Zwedenlaan 12."
            />
          </Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {feiten.map((f, i) => (
              <Reveal key={f.label} delay={i * 60}>
                <div className="rounded-md border border-line bg-paper p-6 shadow-card">
                  <dt className="label-mono text-slate-500">{f.label}</dt>
                  <dd className="mt-2 font-display text-h3 text-navy">{f.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      <CtaSection
        title="Samen aan de slag in het publieke domein?"
        description="We werken graag met organisaties die vooruit willen. Plan een vrijblijvend gesprek."
      />
    </>
  );
}
