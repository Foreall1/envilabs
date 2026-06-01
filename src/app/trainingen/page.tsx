import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  IconUsers,
  IconGraduation,
  IconPresentation,
  IconCompass,
  IconBarChart,
  IconMap,
  IconFileCheck,
  IconDatabase,
  IconCheck,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Trainingen",
  description:
    "EnviLabs verzorgt trainingen en opleiding voor teams in het fysieke domein: in-company, opleidingstrajecten, workshops en kennissessies.",
};

const vormen = [
  {
    Icon: IconUsers,
    title: "In-company training",
    body: "Op locatie en op maat. We sluiten aan op de praktijk van jouw team en de systemen waarmee je werkt.",
  },
  {
    Icon: IconGraduation,
    title: "Opleidingstrajecten",
    body: "Een traject van meerdere sessies dat kennis stap voor stap opbouwt en laat beklijven.",
  },
  {
    Icon: IconPresentation,
    title: "Workshops & masterclasses",
    body: "Korte, intensieve sessies rond één thema. Praktisch, met directe toepassing in je werk.",
  },
  {
    Icon: IconCompass,
    title: "Kennissessies",
    body: "Een heldere introductie voor bestuur, management of een breder team. Zonder jargon.",
  },
];

const onderwerpen = [
  { Icon: IconBarChart, title: "Datagedreven werken", body: "Van losse cijfers naar inzicht waar je op kunt sturen." },
  { Icon: IconFileCheck, title: "Omgevingswet & DSO", body: "De wet en het stelsel begrijpen en toepassen in de praktijk." },
  { Icon: IconMap, title: "Werken met kaart & GIS", body: "Locatiegegevens lezen, duiden en gebruiken in je werk." },
  { Icon: IconDatabase, title: "Digitalisering & beheer", body: "Processen digitaliseren en informatie op orde houden." },
];

export default function TrainingenPage() {
  return (
    <>
      <Section tone="paper" className="pt-16 lg:pt-24">
        <Container>
          <Reveal className="max-w-2xl">
            <Badge tone="info">Trainingen</Badge>
            <h1 className="mt-4 font-display text-h1 font-semibold tracking-tightest text-navy md:text-[2.75rem]">
              Trainingen en opleiding voor het fysieke domein
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
              Goede software helpt pas echt als mensen ermee overweg kunnen.
              Daarom leiden we teams op — om digitaal en datagedreven te werken,
              en om de regels en data van het fysieke domein te doorgronden.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Vormen */}
      <Section tone="bg" aria-labelledby="vormen-titel">
        <Container>
          <Reveal>
            <SectionHeading
              id="vormen-titel"
              eyebrow="Vormen"
              title="Van losse sessie tot heel traject"
              description="We stemmen vorm en niveau af op je team. Eén workshop kan genoeg zijn; soms past een langer traject beter."
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {vormen.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 70}>
                <Card interactive className="h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy text-paper">
                    <v.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-h3 font-display text-navy">{v.title}</h3>
                  <p className="mt-2 text-ui leading-relaxed text-slate-600">{v.body}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Onderwerpen */}
      <Section tone="paper" aria-labelledby="onderwerpen-titel">
        <Container>
          <Reveal>
            <SectionHeading
              id="onderwerpen-titel"
              eyebrow="Onderwerpen"
              title="Waarover we lesgeven"
              description="Een greep uit de thema's. Heb je een ander onderwerp in het fysieke domein? Dan stellen we een training op maat samen."
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {onderwerpen.map((o, i) => (
              <Reveal as="li" key={o.title} delay={i * 70}>
                <Card className="h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-slate-100 text-navy">
                    <o.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-h3 font-display text-navy">{o.title}</h3>
                  <p className="mt-2 text-ui leading-relaxed text-slate-600">{o.body}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Waarom EnviLabs */}
      <Section tone="bg" aria-labelledby="waarom-titel">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="waarom-titel"
                  eyebrow="Waarom EnviLabs"
                  title="We bouwen wat we onderwijzen"
                  description="Onze trainers staan met één been in de praktijk van het bouwen. Wat we uitleggen, passen we zelf elke dag toe."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Praktijkvoorbeelden uit het fysieke domein",
                    "Afgestemd op het niveau van je team",
                    "Direct toepasbaar in je eigen werk",
                    "Op locatie of online",
                    "Geen jargon, wel diepgang",
                    "Te combineren met een toepassing op maat",
                  ].map((punt) => (
                    <li key={punt} className="flex items-start gap-3 text-ui text-slate-700">
                      <span className="mt-px shrink-0 text-teal">
                        <IconCheck className="h-5 w-5" />
                      </span>
                      {punt}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 text-ui text-slate-600">
                  Liever software én opleiding samen? Bekijk onze{" "}
                  <Link href="/toepassingen" className="font-medium text-navy underline hover:text-teal">
                    toepassingen
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Je team naar een hoger niveau?"
        description="Vertel ons wat je team wil leren. We stellen een training samen die past bij jullie praktijk."
      />
    </>
  );
}
