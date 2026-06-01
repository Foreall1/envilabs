import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import { IconMap, IconUsers, IconCheck, IconShieldCheck } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "EnviLabs bouwt digitale toepassingen voor het fysieke domein en verzorgt trainingen. We werken samen met de mensen die de leefomgeving vormgeven.",
};

const waarden = [
  {
    Icon: IconUsers,
    title: "Dichtbij de praktijk",
    body: "We bouwen en trainen met de mensen die het werk doen. Hun praktijk bepaalt wat we maken en uitleggen.",
  },
  {
    Icon: IconMap,
    title: "Het vak als fundament",
    body: "We kennen het fysieke domein en zijn regels — van de Omgevingswet tot beheer van de openbare ruimte.",
  },
  {
    Icon: IconCheck,
    title: "Duidelijk boven volledig",
    body: "Een scherm of les die één ding goed doet is beter dan tien knoppen die je laten twijfelen.",
  },
  {
    Icon: IconShieldCheck,
    title: "Zorgvuldig met data",
    body: "Gegevens van inwoners verdienen bescherming. We verwerken in Nederland en delen niets zonder grond.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <Section tone="paper" className="pt-16 lg:pt-24">
        <Container>
          <Reveal className="max-w-2xl">
            <Badge tone="info">Over ons</Badge>
            <h1 className="mt-4 font-display text-h1 font-semibold tracking-tightest text-navy md:text-[2.75rem]">
              We bouwen en onderwijzen voor het fysieke domein
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
              Het fysieke domein digitaliseert in hoog tempo. EnviLabs helpt
              organisaties daarin mee — met software op maat én met trainingen
              die teams verder brengen.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Missie & visie */}
      <Section tone="bg" aria-labelledby="missie-titel">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <p className="label-mono text-navy">Missie</p>
                <h2 id="missie-titel" className="mt-3 text-h3 font-display text-navy">
                  Het werk in het fysieke domein eenvoudiger maken
                </h2>
                <p className="mt-3 text-ui leading-relaxed text-slate-600">
                  We willen dat organisaties hun tijd besteden aan de
                  leefomgeving en de mensen die er wonen — niet aan worstelen met
                  systemen. Daarom bouwen we passende software én delen we onze
                  kennis.
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
                  combineren we bouwen en opleiden — zodat een toepassing niet
                  stilvalt, maar het team echt verder helpt.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Waarden */}
      <Section tone="paper" aria-labelledby="waarden-titel">
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

      <CtaSection
        title="Samen aan de slag in het fysieke domein?"
        description="We werken graag met organisaties die vooruit willen. Plan een vrijblijvend gesprek."
      />
    </>
  );
}
