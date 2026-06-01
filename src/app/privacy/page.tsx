import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Hoe EnviLabs omgaat met persoonsgegevens.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacyverklaring"
      intro="EnviLabs B.V. verwerkt persoonsgegevens zorgvuldig en alleen waar dat nodig is. Deze pagina legt uit welke gegevens we verwerken en waarom."
    >
      <p>
        Verwerkingsverantwoordelijke is EnviLabs B.V., gevestigd aan de
        Zwedenlaan 12, 9403 DE Assen (KvK 82922306).
      </p>
      <p>
        We verwerken gegevens die je achterlaat in het contactformulier — je
        naam, organisatie, e-mailadres en bericht — uitsluitend om contact met
        je op te nemen. We bewaren deze gegevens niet langer dan nodig.
      </p>
      <p>
        Gegevens worden verwerkt binnen Nederland. We delen niets met derden
        zonder wettelijke grond of jouw toestemming.
      </p>
    </LegalPage>
  );
}
