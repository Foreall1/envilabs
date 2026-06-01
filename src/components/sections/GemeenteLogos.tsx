import { Container } from "@/components/ui/Container";

// Placeholder-namen; vervang door echte woordmerken zodra beschikbaar.
const organisaties = [
  "Gemeente Deventer",
  "Provincie Overijssel",
  "Omgevingsdienst Regio",
  "Waterschap Vallei",
  "Gemeente Alkmaar",
];

/**
 * Social proof: rij met gemeentewoordmerken als nette placeholders.
 */
export function GemeenteLogos() {
  return (
    <section aria-labelledby="socialproof-titel" className="border-y border-line bg-paper py-12">
      <Container>
        <h2 id="socialproof-titel" className="text-center label-mono text-slate-500">
          Vertrouwd door organisaties in het fysieke domein
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {organisaties.map((naam) => (
            <li
              key={naam}
              className="flex items-center gap-2 text-slate-500"
              title={`${naam} (placeholder)`}
            >
              {/* Wapen-placeholder */}
              <span
                aria-hidden="true"
                className="h-6 w-6 rounded-sm border border-slate-300 bg-slate-100"
              />
              <span className="font-display text-[15px] font-medium tracking-tight">
                {naam}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
