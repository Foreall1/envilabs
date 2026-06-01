import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ModuleMockup } from "@/components/mockups/ModuleMockup";
import { CtaSection } from "@/components/sections/CtaSection";
import {
  IconBarChart,
  IconMap,
  IconDatabase,
  IconFileCheck,
  IconLayout,
  IconLink,
  IconCheck,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Toepassingen",
  description:
    "EnviLabs bouwt digitale toepassingen op maat voor het fysieke domein: dashboards, kaartapplicaties, dataloketten, processen en koppelingen.",
};

const types = [
  {
    Icon: IconBarChart,
    title: "Dashboards & monitoring",
    body: "Breng data uit verschillende bronnen samen in één helder overzicht, met de cijfers die er voor jouw werk toe doen.",
  },
  {
    Icon: IconMap,
    title: "Kaart- & locatieapplicaties",
    body: "Toon en bewerk informatie op de kaart. Gekoppeld aan percelen, gebieden en objecten in de leefomgeving.",
  },
  {
    Icon: IconDatabase,
    title: "Dataloketten & registraties",
    body: "Ontsluit gegevens voor collega's of inwoners. Van eenvoudige registratie tot een volwaardig loket.",
  },
  {
    Icon: IconFileCheck,
    title: "Formulieren & processen",
    body: "Digitaliseer aanvragen, meldingen en werkstromen. Met termijnbewaking en een duidelijk dossier.",
  },
  {
    Icon: IconLayout,
    title: "Maatwerk-webapplicaties",
    body: "Een toepassing die precies past bij jouw proces, in plaats van een proces dat zich plooit naar de software.",
  },
  {
    Icon: IconLink,
    title: "Integraties & koppelingen",
    body: "Verbind bestaande systemen en bronnen — waaronder het DSO — zodat gegevens niet dubbel worden bijgehouden.",
  },
];

const stappen = [
  { nr: "01", title: "Verkennen", body: "We brengen het vraagstuk en de werkwijze in kaart. Wat moet de toepassing echt oplossen?" },
  { nr: "02", title: "Ontwerpen", body: "We schetsen en testen vroeg, zodat je ziet wat je krijgt voordat we bouwen." },
  { nr: "03", title: "Bouwen", body: "We leveren in korte stappen werkende software, en stellen bij op basis van gebruik." },
  { nr: "04", title: "Overdragen", body: "We zorgen dat je team de toepassing beheerst — met uitleg en, indien gewenst, training." },
];

export default function ToepassingenPage() {
  return (
    <>
      <Section tone="paper" className="pt-16 lg:pt-24">
        <Container>
          <Reveal className="max-w-2xl">
            <Badge tone="info">Toepassingen</Badge>
            <h1 className="mt-4 font-display text-h1 font-semibold tracking-tightest text-navy md:text-[2.75rem]">
              Software op maat voor het fysieke domein
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
              We bouwen geen standaardpakket dat overal half op past. We maken de
              toepassing die jouw vraagstuk oplost — en die meegroeit met je werk.
              Hieronder een paar vormen die dat kan aannemen.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Types toepassingen */}
      <Section tone="bg" aria-labelledby="types-titel">
        <Container>
          <Reveal>
            <SectionHeading
              id="types-titel"
              eyebrow="Wat we bouwen"
              title="Eén domein, veel verschijningsvormen"
              description="De voorbeelden hieronder zijn illustratief. De vorm volgt altijd uit jouw vraag, niet andersom."
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 60}>
                <Card interactive className="h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy text-paper">
                    <t.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-h3 font-display text-navy">{t.title}</h3>
                  <p className="mt-2 text-ui leading-relaxed text-slate-600">{t.body}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Voorbeeldscherm */}
      <Section tone="paper" aria-labelledby="scherm-titel">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="scherm-titel"
                  eyebrow="Hoe het eruit kan zien"
                  title="Helder, rustig en bruikbaar"
                  description="Een voorbeeld van een toepassing voor het fysieke domein. Geen overdaad aan knoppen — alleen wat het werk vooruit helpt."
                />
              </Reveal>
              <Reveal delay={80}>
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Toegankelijk volgens WCAG 2.1 AA",
                    "Status met icoon én tekst",
                    "Werkt op desktop, tablet en in het veld",
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
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <ModuleMockup
                  path="app.envilabs.nl/meldingen"
                  heading="Meldingen openbare ruimte"
                  caption="Voorbeeldscherm van een toepassing: een tabel met meldingen over de openbare ruimte, het onderwerp en de status van afhandeling."
                  rows={[
                    { id: "MOR-2041", label: "Kapotte verlichting", status: "Op schema", tone: "success" },
                    { id: "MOR-2038", label: "Wateroverlast tunnel", status: "Let op termijn", tone: "warning" },
                    { id: "MOR-2034", label: "Boomonderhoud park", status: "Ingepland", tone: "info" },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Werkwijze */}
      <Section tone="bg" aria-labelledby="werkwijze-titel">
        <Container>
          <Reveal>
            <SectionHeading
              id="werkwijze-titel"
              eyebrow="Werkwijze"
              title="Van vraagstuk naar werkende software"
            />
          </Reveal>
          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stappen.map((s, i) => (
              <Reveal as="li" key={s.nr} delay={i * 70}>
                <Card className="h-full">
                  <span className="font-mono text-ui tracking-mono text-teal">{s.nr}</span>
                  <h3 className="mt-2 text-h3 font-display text-navy">{s.title}</h3>
                  <p className="mt-2 text-ui leading-relaxed text-slate-600">{s.body}</p>
                </Card>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={120}>
            <p className="mt-8 text-ui text-slate-600">
              Werk je onder de Omgevingswet? Dat is één van onze werkterreinen.
              Bekijk ook onze{" "}
              <Link href="/trainingen" className="font-medium text-navy underline hover:text-teal">
                trainingen
              </Link>{" "}
              om je team verder te helpen.
            </p>
          </Reveal>
        </Container>
      </Section>

      <CtaSection
        title="Een vraagstuk dat om software vraagt?"
        description="Vertel ons wat er beter kan in jouw werk. We denken mee over een toepassing die past."
      />
    </>
  );
}
