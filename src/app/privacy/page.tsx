import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Hoe EnviLabs omgaat met persoonsgegevens.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacyverklaring"
      intro="EnviLabs verwerkt persoonsgegevens zorgvuldig en alleen waar dat nodig is. Deze pagina legt uit welke gegevens we verwerken en waarom."
    >
      <p>
        We verwerken gegevens die je achterlaat bij een demoaanvraag — je naam,
        gemeente, e-mailadres en bericht — uitsluitend om contact met je op te
        nemen. We bewaren deze gegevens niet langer dan nodig.
      </p>
      <p>
        Gegevens worden verwerkt binnen Nederland. We delen niets met derden
        zonder wettelijke grond of jouw toestemming.
      </p>
    </LegalPage>
  );
}
