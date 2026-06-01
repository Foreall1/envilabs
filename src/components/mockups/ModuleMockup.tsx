import { Badge } from "@/components/ui/Badge";

type Row = { id: string; label: string; status: string; tone: "success" | "warning" | "info" | "neutral" };

type ModuleMockupProps = {
  /** Titel in de venstertitelbalk, bv. een url-pad. */
  path: string;
  heading: string;
  rows: Row[];
  caption: string;
};

/**
 * Gestileerd scherm per module. Geen echte data; toegankelijke beschrijving via caption.
 */
export function ModuleMockup({ path, heading, rows, caption }: ModuleMockupProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-paper shadow-card">
      <figcaption className="sr-only">{caption}</figcaption>
      <div className="flex items-center gap-2 border-b border-line bg-slate-50 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-slate-300" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-slate-300" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-slate-300" aria-hidden="true" />
        <span className="ml-2 font-mono text-caption tracking-mono text-slate-500">{path}</span>
      </div>
      <div className="p-6">
        <h3 className="text-h3 font-display text-navy">{heading}</h3>
        <table className="mt-4 w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-line">
              <th className="label-mono pb-2 font-normal text-slate-500">Zaak</th>
              <th className="label-mono pb-2 font-normal text-slate-500">Onderwerp</th>
              <th className="label-mono pb-2 text-right font-normal text-slate-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-line last:border-0">
                <td className="py-3 pr-3 font-mono text-caption tracking-mono text-slate-500">
                  {r.id}
                </td>
                <td className="py-3 pr-3 text-ui text-slate-800">{r.label}</td>
                <td className="py-3 text-right">
                  <Badge tone={r.tone}>{r.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
