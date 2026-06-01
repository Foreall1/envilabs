import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type LegalPageProps = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

/**
 * Eenvoudige opmaak voor juridische pagina's. Inhoud is placeholder tot de
 * definitieve teksten beschikbaar zijn.
 */
export function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <Section tone="paper" className="pt-16 lg:pt-24">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-h1 font-semibold tracking-tightest text-navy md:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-600">{intro}</p>
          <div className="mt-8 flex flex-col gap-4 text-ui leading-relaxed text-slate-700">
            {children}
          </div>
          <p className="mt-12 font-mono text-caption tracking-mono text-slate-500">
            Placeholder — definitieve tekst volgt.
          </p>
        </div>
      </Container>
    </Section>
  );
}
