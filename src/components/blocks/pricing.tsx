import { CheckCircle } from "@solar-icons/react/ssr";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp";

const plan = {
  name: "Taxa",
  price: "6%",
  description: "Sobre valores processados",
  features: [
    "Taxa única sobre valores processados",
    "Repasse líquido direto para sua conta",
    "Cobertura financeira total em todos os casos",
    "Operação simples e manual via WhatsApp",
  ],
};

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section id="pricing" className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Quanto custa a LorenzPay?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            6% sobre valores processados. Seu cliente faz o PIX para nossa conta, você envia
            o comprovante por WhatsApp e já recebe seu dinheiro em qualquer chave PIX.
            <strong> 100% seguro e cobertura total.</strong>
          </p>
        </div>

        <Card className="relative mx-auto mt-8 max-w-4xl overflow-hidden md:mt-12 lg:mt-20">
          <style>
            {`.pricing-card-icon {
                display: none;
              }

              @media (min-width: 768px) {
              .pricing-card-content {
                align-items: center;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 3rem 14rem 3rem 3rem;
              }

              .pricing-card-column {
                width: 50%;
              }

              .pricing-card-icon {
                display: block;
                background-color: currentColor;
                mask: url("/lorenzpayheader.svg") center / contain no-repeat;
              }
            }`}
          </style>
          <div
            aria-hidden="true"
            className="pricing-card-icon pointer-events-none text-muted-foreground"
            style={{
              height: "21.6rem",
              opacity: 0.18,
              position: "absolute",
              right: "-1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: "21.6rem",
            }}
          />
          <CardContent className="pricing-card-content relative flex flex-col gap-8 px-8 py-10 text-start">
            <div className="pricing-card-column space-y-5">
              <div className="space-y-2">
                <h3 className="text-foreground font-semibold">{plan.name}</h3>
                <div className="text-muted-foreground text-3xl font-medium">
                  {plan.price}
                </div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              <Button
                asChild
                className="w-fit text-black dark:text-white"
                variant="outline"
              >
                <a
                  href={WHATSAPP_CTA_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Falar com CEO
                </a>
              </Button>
            </div>

            <div className="pricing-card-column grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="text-muted-foreground flex items-center gap-1.5"
                >
                  <CheckCircle className="size-5 shrink-0" weight="Bold" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
