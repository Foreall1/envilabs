import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Toegankelijkheid",
  description: "De toegankelijkheidsverklaring van EnviLabs.",
};

export default function ToegankelijkheidPage() {
  return (
    <LegalPage
      title="Toegankelijkheidsverklaring"
      intro="We bouwen EnviLabs volgens WCAG 2.1 niveau AA. Toegankelijkheid is een harde eis, geen bijzaak."
    >
      <p>
        Dat betekent onder meer: voldoende kleurcontrast, een zichtbare
        focus-indicator, status die nooit met kleur alleen wordt aangeduid,
        semantische HTML en respect voor de voorkeur voor minder beweging.
      </p>
      <p>
        Loop je tegen een drempel aan? Laat het ons weten via{" "}
        <a href="mailto:toegankelijkheid@envilabs.dev" className="text-info underline">
          toegankelijkheid@envilabs.dev
        </a>
        . We pakken meldingen serieus op.
      </p>
    </LegalPage>
  );
}
