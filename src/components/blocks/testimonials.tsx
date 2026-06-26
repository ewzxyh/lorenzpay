import type { ElementType } from "react";

import type { IconProps } from "@solar-icons/react";
import {
  CardReceive,
  ChatSquareCheck,
  CheckCircle,
  ClockCircle,
  DangerTriangle,
  ForbiddenCircle,
  ShieldCheck,
  ShieldWarning,
  WalletMoney,
} from "@solar-icons/react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  company: string;
  icon: ElementType<IconProps>;
  color: string;
};

const items: TestimonialItem[] = [
  {
    quote: "Contestação MED aberta e alerta de fraude.",
    author: "Problema",
    role: "MED 2.0",
    company: "PIX contestado",
    icon: DangerTriangle,
    color: "#fb7185",
  },
  {
    quote: "Saldo retido e caixa pressionado.",
    author: "Consequência",
    role: "Dinheiro parado",
    company: "Operação travada",
    icon: WalletMoney,
    color: "#f59e0b",
  },
  {
    quote: "Risco de bloqueio e perda permanente da conta.",
    author: "Consequência",
    role: "Conta em risco",
    company: "MED 2.0",
    icon: ForbiddenCircle,
    color: "#fb7185",
  },
  {
    quote: "Prejuízo direto quando a defesa falha.",
    author: "Consequência",
    role: "Perda financeira",
    company: "Impacto imediato",
    icon: ShieldWarning,
    color: "#f98f5e",
  },
  {
    quote: "Tempo perdido com contestação PIX.",
    author: "Consequência",
    role: "Prejuízo",
    company: "Estresse",
    icon: ClockCircle,
    color: "#a855f7",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section
        id="problem"
        className={cn("overflow-hidden py-28 lg:py-32", className)}
      >
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Os problemas do MED <strong className="text-red-400">(diga adeus)</strong>
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Uma contestação PIX pode reter saldo, bloquear a operação e gerar
              prejuízo. A LorenzPay assume a defesa e protege seu caixa.
            </p>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial) => {
                  const Icon = testimonial.icon;

                  return (
                    <CarouselItem
                      key={testimonial.quote}
                      className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                    >
                      <Card className="bg-muted h-full overflow-hidden border-none">
                        <CardContent className="flex h-full flex-col p-0">
                          <div className="grid h-[288px] place-items-center bg-background/70 lg:h-[328px]">
                            <Icon
                              aria-hidden="true"
                              className="block"
                              color={testimonial.color}
                              style={{ height: "9rem", width: "9rem" }}
                              weight="BoldDuotone"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                            <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                              {testimonial.quote}
                            </blockquote>
                            <div className="space-y-0.5">
                              <div className="text-primary font-semibold">
                                {testimonial.author}, {testimonial.role}
                              </div>
                              <div className="text-muted-foreground text-sm">
                                {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
