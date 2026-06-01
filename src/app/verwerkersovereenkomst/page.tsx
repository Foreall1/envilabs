import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Verwerkersovereenkomst",
  description: "De verwerkersovereenkomst tussen EnviLabs en gemeenten.",
};

export default function VerwerkersovereenkomstPage() {
  return (
    <LegalPage
      title="Verwerkersovereenkomst"
      intro="Als gemeente blijf je verwerkingsverantwoordelijke. EnviLabs verwerkt gegevens namens jou, op basis van een verwerkersovereenkomst conform de AVG."
    >
      <p>
        De overeenkomst legt vast welke gegevens we verwerken, met welk doel, en
        welke maatregelen we nemen om die gegevens te beschermen.
      </p>
      <p>
        Neem contact op via{" "}
        <a href="mailto:privacy@envilabs.nl" className="text-info underline">
          privacy@envilabs.nl
        </a>{" "}
        voor de actuele tekst.
      </p>
    </LegalPage>
  );
}
