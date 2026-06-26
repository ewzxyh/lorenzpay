import Image from "next/image";
import Link from "next/link";

import {
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Defesa MED",
    description: "A LorenzoPay conduz a defesa contra contestações Pix.",
    icon: CircleDot,
  },
  {
    title: "Menos prejuízo",
    description:
      "Reduza em 100% perdas causadas por MED, fraude e chargebacks Pix.",
    icon: Blend,
  },
  {
    title: "Conta protegida",
    description: "Evite instabilidade e bloqueios gerados por contestações.",
    icon: Diamond,
  },
  {
    title: "Cobertura total",
    description: "Cobrimos impactos financeiros de eventos elegíveis.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-3xl text-3xl leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Diga adeus aos seus problemas com MED 2.0
          </h1>

          <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-snug md:text-xl lg:text-2xl">
            Receba Pix pela LorenzoPay e deixe as contestações MED 2.0 conosco:
            processamos, defendemos e cobrimos o risco financeiro.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <Link href="/contact">Falar com CEO</Link>
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
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
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

      <div className="mt-12 aspect-square overflow-hidden max-lg:ml-6 md:mt-20 md:aspect-auto md:h-[520px] lg:container lg:mt-24 lg:h-[560px] xl:h-[600px]">
        <div className="relative h-full w-full md:h-[793px]">
          <Image
            src="/hero-mobile.webp"
            alt="Tabela mobile de transações Pix com status MED, repasses enviados e detalhes de cobertura financeira"
            fill
            sizes="100vw"
            className="rounded-2xl rounded-br-none object-cover object-left-top shadow-lg max-lg:rounded-tr-none md:hidden"
          />
          <Image
            src="/hero.webp"
            alt="Tabela de transações Pix com status MED, repasses enviados e detalhes de cobertura financeira"
            fill
            sizes="100vw"
            className="hidden rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none md:block"
          />
        </div>
      </div>
    </section>
  );
};
