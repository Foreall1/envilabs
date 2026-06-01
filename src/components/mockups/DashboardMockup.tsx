import { Badge } from "@/components/ui/Badge";

// Vlakke datavisualisatie: max twee kleuren (navy + teal), y-as op nul, mono as-labels.
const weeks = [
  { label: "wk 18", aangevraagd: 42, afgehandeld: 38 },
  { label: "wk 19", aangevraagd: 51, afgehandeld: 44 },
  { label: "wk 20", aangevraagd: 47, afgehandeld: 49 },
  { label: "wk 21", aangevraagd: 58, afgehandeld: 52 },
  { label: "wk 22", aangevraagd: 39, afgehandeld: 41 },
];
const maxValue = 60;

const zaken = [
  { id: "OW-2026-0481", type: "Bouwactiviteit", status: "Op schema", tone: "success" as const },
  { id: "OW-2026-0479", type: "Milieubelastend", status: "Let op termijn", tone: "warning" as const },
  { id: "OW-2026-0476", type: "Kapvergunning", status: "Wacht op advies", tone: "info" as const },
];

/**
 * Stilistische weergave van het EnviLabs-dashboard. Geen echte data;
 * dient als productillustratie met toegankelijke beschrijving.
 */
export function DashboardMockup() {
  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-paper shadow-card">
      <figcaption className="sr-only">
        Voorbeeld van het EnviLabs-dashboard: een staafdiagram met aangevraagde
        en afgehandelde zaken per week, en een lijst met lopende zaken en hun
        status.
      </figcaption>

      {/* Vensterbalk */}
      <div className="flex items-center gap-2 border-b border-line bg-slate-50 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-slate-300" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-slate-300" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-slate-300" aria-hidden="true" />
        <span className="ml-2 font-mono text-caption tracking-mono text-slate-500">
          app.envilabs.dev/zaken
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-5">
        {/* Grafiek */}
        <div className="lg:col-span-3">
          <div className="flex items-baseline justify-between">
            <h3 className="text-h3 font-display text-navy">Doorlooptijd zaken</h3>
            <span className="label-mono text-slate-500">laatste 5 wk</span>
          </div>

          <div className="mt-6" role="img" aria-label="Staafdiagram: aangevraagde versus afgehandelde zaken per week, stabiel rond 40 tot 58 per week.">
            <div className="flex h-40 items-end justify-between gap-3">
              {weeks.map((w) => (
                <div key={w.label} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-32 w-full items-end justify-center gap-1">
                    <span
                      className="w-1/2 rounded-sm bg-navy"
                      style={{ height: `${(w.aangevraagd / maxValue) * 100}%` }}
                    />
                    <span
                      className="w-1/2 rounded-sm bg-teal"
                      style={{ height: `${(w.afgehandeld / maxValue) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-caption tracking-mono text-slate-500">
                    {w.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-6">
              <span className="flex items-center gap-2 text-caption text-slate-600">
                <span className="h-2 w-3 rounded-sm bg-navy" aria-hidden="true" /> Aangevraagd
              </span>
              <span className="flex items-center gap-2 text-caption text-slate-600">
                <span className="h-2 w-3 rounded-sm bg-teal" aria-hidden="true" /> Afgehandeld
              </span>
            </div>
          </div>
        </div>

        {/* Zakenlijst */}
        <div className="lg:col-span-2">
          <h3 className="text-h3 font-display text-navy">Lopende zaken</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {zaken.map((z) => (
              <li
                key={z.id}
                className="rounded-md border border-line p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-caption tracking-mono text-slate-500">
                    {z.id}
                  </span>
                  <Badge tone={z.tone}>{z.status}</Badge>
                </div>
                <p className="mt-1 text-ui font-medium text-slate-800">{z.type}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </figure>
  );
}
