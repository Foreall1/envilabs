import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="paper" className="pt-24">
      <Container>
        <div className="max-w-xl">
          <p className="label-mono text-navy">404</p>
          <h1 className="mt-3 font-display text-h1 font-semibold tracking-tightest text-navy">
            Deze pagina bestaat niet
          </h1>
          <p className="mt-4 text-body text-slate-600">
            De pagina is verplaatst of heeft nooit bestaan. Ga terug naar de
            homepage of bekijk het product.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Naar de homepage
            </Button>
            <Button href="/product" size="lg" variant="ghost">
              Bekijk het product
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
