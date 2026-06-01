import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowRight } from "@/components/ui/icons";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

/**
 * Afsluitende call-to-action. Donkere navy-sectie met teal primaire knop.
 */
export function CtaSection({
  title = "Een idee voor het fysieke domein? Of een team dat wil leren?",
  description = "Of je nu een toepassing wilt laten bouwen of je mensen wilt opleiden — we denken graag mee. Eén gesprek is genoeg om te beginnen.",
}: CtaSectionProps) {
  return (
    <Section tone="navy" aria-labelledby="cta-titel">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 id="cta-titel" className="text-h2 font-display tracking-tight text-paper md:text-[2rem]">
            {title}
          </h2>
          <p className="mt-4 text-body text-slate-300">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Neem contact op
              <IconArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/toepassingen" size="lg" variant="ghost" className="border-white/20 text-paper hover:bg-white/10 hover:border-white/30">
              Bekijk toepassingen
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
