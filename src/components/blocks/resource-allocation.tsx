import type { ElementType } from "react";

import type { IconProps } from "@solar-icons/react";
import {
  CardReceive,
  ChatSquareCheck,
  ChecklistMinimalistic,
  ClockCircle,
  GraphUp,
  Routing,
  ShieldWarning,
  SquareTransferHorizontal,
} from "@solar-icons/react";

import { DashedLine } from "../dashed-line";

import { cn } from "@/lib/utils";

interface FeatureIcon {
  icon: ElementType<IconProps>;
  alt: string;
  color: string;
}

interface ResourceItem {
  title: string;
  description: string;
  icons?: FeatureIcon[];
  visual?: "medDefense";
  className: string;
  fade: string[];
}

const topItems: ResourceItem[] = [
  {
    title: "Proteção integral de operação.",
    description:
      "A LorenzPay assume integralmente o risco financeiro de contestações elegíveis relacionadas às transações processadas em sua infraestrutura.",
    visual: "medDefense",
    className: "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
    fade: [""],
  },
  {
    title: "Problema operacional.",
    description:
      "Contestações PIX constantemente, alerta de fraude, risco de bloqueio da conta e perda financeira.",
    icons: [
      {
        icon: CardReceive,
        alt: "Alto volume PIX",
        color: "#22c55e",
      },
      {
        icon: ChecklistMinimalistic,
        alt: "Conciliacao manual",
        color: "#2dd4bf",
      },
      {
        icon: GraphUp,
        alt: "Fluxo de caixa instavel",
        color: "#f59e0b",
      },
      {
        icon: Routing,
        alt: "Dificuldade de rastreio",
        color: "#38bdf8",
      },
      {
        icon: ShieldWarning,
        alt: "Risco MED",
        color: "#fb7185",
      },
      {
        icon: SquareTransferHorizontal,
        alt: "Multiplas entradas",
        color: "#60a5fa",
      },
      {
        icon: ChatSquareCheck,
        alt: "Comprovantes via WhatsApp",
        color: "#22c55e",
      },
      {
        icon: ClockCircle,
        alt: "Repasse pendente",
        color: "#a855f7",
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [],
  },
];

export const ResourceAllocation = () => {
  return (
    <section
      id="resource-allocation"
      className="overflow-hidden pb-28 lg:pb-32"
    >
      <div className="">
        <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Infraestrutura de recebimento e repasse PIX
        </h2>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />

          {/* Top Features Grid - 2 items */}
          <div className="relative container flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item
                key={item.title}
                item={item}
                isLast={i === topItems.length - 1}
              />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />
        </div>
      </div>
    </section>
  );
};

interface ItemProps {
  item: ResourceItem;
  isLast?: boolean;
  className?: string;
}

const LorenzPayBadge = () => (
  <div className="inline-flex max-w-full shrink-0 animate-pulse items-center gap-1.5 overflow-hidden rounded-full border border-border/70 bg-background px-4 py-1.5 font-semibold text-emerald-600 text-xs dark:text-emerald-400 sm:mx-2">
    <span className="min-w-0 truncate whitespace-nowrap">LorenzPay</span>
    <SquareTransferHorizontal
      aria-hidden="true"
      className="size-4 shrink-0"
      color="#22c55e"
      weight="BoldDuotone"
    />
  </div>
);

const MedDefenseVisual = () => {
  return (
    <div className="med-defense-visual relative mx-auto w-full max-w-[495px] overflow-hidden rounded-xl border border-border/70 bg-background p-4 transition-transform duration-200 ease-out hover:-translate-y-[0.05rem] sm:mx-0 sm:max-w-full sm:border-0 sm:bg-transparent sm:p-0">
      <style>
        {`@media (min-width: 640px) {
          .med-mobile-connector { display: none; }
          .med-desktop-connector { display: flex; }
        }
        @media (min-width: 1024px) {
          .med-defense-visual .truncate {
            overflow: visible;
            text-overflow: clip;
            white-space: nowrap;
          }
        }`}
      </style>
      <div className="relative z-10 flex w-full flex-col gap-5 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex min-w-0 flex-1 flex-col rounded-none border-0 bg-transparent p-0 sm:rounded-xl sm:border sm:border-border/70 sm:bg-background sm:p-4 md:min-h-44 lg:min-w-48 lg:flex-none lg:p-6">
          <p className="truncate font-semibold text-sm">Contestação MED</p>
          <p className="mt-1 truncate text-muted-foreground text-xs">
            PIX em análise
          </p>
          <div className="grid flex-1 place-items-center py-4">
            <div className="grid aspect-square size-24 place-items-center rounded-2xl bg-muted/40 sm:size-20">
              <ShieldWarning
                aria-label="Alerta de fraude"
                className="size-16 sm:size-12"
                color="#fb7185"
                weight="BoldDuotone"
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="med-mobile-connector relative -mx-4 flex h-10 shrink-0 items-center justify-center px-4 text-muted-foreground/50"
        >
          <span
            className="absolute inset-x-0 top-1/2 z-0 h-px -translate-y-1/2 text-muted-foreground/40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, currentColor 0 6px, transparent 6px 12px)",
            }}
          />
          <div className="z-10 px-4 sm:px-0">
            <LorenzPayBadge />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="med-desktop-connector hidden h-10 min-w-20 flex-1 items-center justify-center text-muted-foreground/50"
        >
          <div
            className="h-px min-w-8 flex-1 text-muted-foreground/40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, currentColor 0 6px, transparent 6px 12px)",
            }}
          />
          <div className="z-10 px-0">
            <LorenzPayBadge />
          </div>
          <div
            className="h-px min-w-8 flex-1 text-muted-foreground/40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, currentColor 0 6px, transparent 6px 12px)",
            }}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col rounded-none border-0 bg-transparent p-0 sm:rounded-xl sm:border sm:border-border/70 sm:bg-background sm:p-4 md:min-h-44 lg:min-w-48 lg:flex-none lg:p-6">
          <p className="truncate font-semibold text-sm">Defesa MED</p>
          <p className="mt-1 truncate text-muted-foreground text-xs">
            Saldo liberado
          </p>
          <div className="grid flex-1 place-items-center py-4">
            <div className="grid aspect-square size-24 place-items-center rounded-2xl bg-muted/40 sm:size-20">
              <ChatSquareCheck
                aria-label="MED defendido"
                className="size-16 sm:size-12"
                color="#22c55e"
                weight="BoldDuotone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container text-balance">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>

      {item.fade.includes("bottom") && (
        <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
      )}
      {item.icons ? (
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-5">
            {/* First row - right aligned */}
            <div className="flex translate-x-4 justify-end gap-5">
              {item.icons.slice(0, 4).map((image, j) => {
                const IconComponent = image.icon;

                return (
                  <div
                    key={j}
                    className="bg-background grid aspect-square size-16 place-items-center rounded-2xl p-2 lg:size-20"
                  >
                    <IconComponent
                      aria-label={image.alt}
                      className="size-10 lg:size-12"
                      color={image.color}
                      weight="BoldDuotone"
                    />
                    <div className="from-muted/80 absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent" />
                  </div>
                );
              })}
            </div>
            {/* Second row - left aligned */}
            <div className="flex -translate-x-4 gap-5">
              {item.icons.slice(4).map((image, j) => {
                const IconComponent = image.icon;

                return (
                  <div
                    key={j}
                    className="bg-background grid aspect-square size-16 place-items-center rounded-2xl lg:size-20"
                  >
                    <IconComponent
                      aria-label={image.alt}
                      className="size-10 lg:size-12"
                      color={image.color}
                      weight="BoldDuotone"
                    />
                    <div className="from-muted absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r to-transparent" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : item.visual === "medDefense" ? (
        <div className="image-container grid grid-cols-1 place-items-center gap-4">
          <MedDefenseVisual />
        </div>
      ) : null}

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
