import Link from "next/link";

import {
  GraphDown,
  LockKeyhole,
  ShieldCheck,
  Wallet,
} from "@solar-icons/react/ssr";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp";

const features = [
  {
    title: "Defesa MED",
    description: "Conduzimos a defesa contra contestações PIX com 100% de sucesso.",
    icon: ShieldCheck,
  },
  {
    title: "Menos prejuízo",
    description:
      "Reduza em 100% perdas causadas por MED, fraude e chargebacks Pix.",
    icon: GraphDown,
  },
  {
    title: "Conta protegida",
    description: "Evite alerta de fraude e bloqueios gerados por contestações.",
    icon: LockKeyhole,
  },
  {
    title: "Cobertura total",
    description: "Cobrimos impactos financeiros de eventos elegíveis.",
    icon: Wallet,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20 2xl:translate-x-15">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-3xl text-3xl leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Diga adeus aos seus problemas <strong>com MED</strong>
          </h1>

          <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-snug md:text-xl lg:text-2xl">
            Receba PIX pela LorenzPay e deixe as contestações conosco:
            comunicação direta com Banco Central e cobrimos o risco financeiro com 100% de segurança.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a
                href={WHATSAPP_CTA_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Falar com CEO
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#faq">Dúvidas</Link>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon
                  className="text-foreground mt-1 size-4 shrink-0 lg:size-5"
                  weight="BoldDuotone"
                />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
