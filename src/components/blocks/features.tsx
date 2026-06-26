import {
  CardReceive,
  ChatRoundCheck,
  ShieldCheck,
} from "@solar-icons/react/ssr";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp";

const items = [
  {
    title: "Receba seus pagamentos usando nossa chave PIX",
    step: "01",
    icon: CardReceive,
  },
  {
    title: "Transação processada e blindada pelo Banco Central contra MED",
    step: "02",
    icon: ShieldCheck,
  },
  {
    title: "Envie o comprovante por WhatsApp e receba o pagamento",
    step: "03",
    icon: ChatRoundCheck,
  },
];

export const Features = () => {
  return (
    <section id="feature-modern-teams" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            SEUS PROBLEMAS COM MED ACABARAM
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Como funciona a defesa MED?
          </h2>
          <p className="text-muted-foreground leading-snug">
            Nós assumimos a defesa junto ao Banco Central. O cliente paga via PIX para a LorenzPay. Depois você envia o comprovante
            pelo WhatsApp e recebe o valor líquido na sua conta <strong className="text-red-400">(mesmo que já tenha sido contestado). </strong>
            Garantimos 100% de sucesso e cobertura total.
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex flex-1 max-md:flex-col">
                  <div className="flex-1 p-4 pe-0! md:p-6">
                    <div className="relative aspect-[1.28/1] overflow-hidden">
                      <span
                        aria-hidden="true"
                        className="text-primary absolute leading-none font-semibold"
                        style={{
                          right: "-2rem",
                          bottom: "-3rem",
                          fontSize: "clamp(14rem, 16vw, 14rem)",
                          opacity: 0.45,
                        }}
                      >
                        {item.step}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6">
                      <h3 className="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <div className="rounded-full border p-2">
                        <Icon
                          className="size-6 text-muted-foreground lg:size-8"
                          weight="BoldDuotone"
                        />
                      </div>
                    </div>
                  </div>
                  {i < items.length - 1 && (
                    <div className="relative hidden md:block">
                      <DashedLine orientation="vertical" />
                    </div>
                  )}
                  {i < items.length - 1 && (
                    <div className="relative block md:hidden">
                      <DashedLine orientation="horizontal" />
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
        <div className="mt-8 flex justify-center md:mt-10">
          <Button asChild className="px-6">
            <a
              href={WHATSAPP_CTA_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Blindar meu PIX agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
