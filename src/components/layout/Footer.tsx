import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { IconMail } from "@/components/ui/icons";
import { footerNav } from "@/lib/navigation";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-navy text-slate-300">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
          {/* Merk + contact */}
          <div className="md:col-span-4">
            <Logo reversed />
            <p className="mt-4 max-w-xs text-ui text-slate-400">
              Software voor de uitvoering van de Omgevingswet. Gemaakt voor en
              met Nederlandse gemeenten.
            </p>
            <a
              href="mailto:hallo@envilabs.dev"
              className="mt-6 inline-flex items-center gap-2 text-ui text-slate-200 hover:text-teal"
            >
              <IconMail className="h-[18px] w-[18px]" />
              hallo@envilabs.dev
            </a>
          </div>

          {/* Sitemap */}
          <nav aria-label="Footernavigatie" className="md:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {footerNav.map((group) => (
                <div key={group.title}>
                  <h2 className="label-mono text-slate-400">{group.title}</h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-ui text-slate-200 hover:text-teal"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-caption text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} EnviLabs B.V. — KvK 90000000 — Utrecht</p>
          <p className="font-mono tracking-mono">Gebouwd op de Omgevingswet</p>
        </div>
      </Container>
    </footer>
  );
}
