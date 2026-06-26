"use client";

import { useState } from "react";

import {
  CheckCircle,
  CloseCircle,
  RoundSortVertical,
} from "@solar-icons/react/ssr";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp";

interface FeatureSection {
  category: string;
  features: {
    name: string;
    free: true | false | null | string;
    startup: true | false | null | string;
    enterprise: true | false | null | string;
  }[];
}

const pricingPlans = [
  {
    name: "Taxa",
    button: {
      text: "Integrar via API",
      variant: "outline" as const,
    },
  },
  {
    name: "Repasse",
    button: {
      text: "Falar com CEO",
      variant: "outline" as const,
    },
  },
  {
    name: "Proteção",
    button: {
      text: "Falar com CEO",
      variant: "outline" as const,
    },
  },
];

const comparisonFeatures: FeatureSection[] = [
  {
    category: "Operação",
    features: [
      {
        name: "PIX recebido",
        free: "Total recebido",
        startup: "Total recebido",
        enterprise: "Total recebido",
      },
      {
        name: "Transações processadas",
        free: "Processadas",
        startup: "Processadas",
        enterprise: "Processadas",
      },
      {
        name: "Repasses",
        free: "Pendentes",
        startup: "Realizados",
        enterprise: "Realizados",
      },
    ],
  },
  {
    category: "Dashboard",
    features: [
      {
        name: "Taxa aplicada",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Saldo líquido",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Eventos em análise",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "API pública",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Operação via WhatsApp",
        free: null,
        startup: true,
        enterprise: true,
      },
      {
        name: "Valor coberto pela LorenzPay",
        free: null,
        startup: null,
        enterprise: true,
      },
      {
        name: "Registro completo de operações",
        free: null,
        startup: null,
        enterprise: true,
      },
    ],
  },
  {
    category: "Proteção",
    features: [
      {
        name: "Análise de risco",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Gestão interna de eventos",
        free: null,
        startup: null,
        enterprise: true,
      },
      {
        name: "Cobertura financeira total",
        free: null,
        startup: null,
        enterprise: true,
      },
    ],
  },
];

const renderFeatureValue = (value: true | false | null | string) => {
  if (value === true) {
    return <CheckCircle className="size-5" weight="Bold" />;
  }
  if (value === false) {
    return <CloseCircle className="size-5" weight="Bold" />;
  }
  if (value === null) {
    return null;
  }
  // String value
  return (
    <div className="flex items-center gap-2">
      <CheckCircle className="size-4" weight="Bold" />
      <span className="text-muted-foreground">{value}</span>
    </div>
  );
};

export const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Repasse plan

  return (
    <section className="pb-28 lg:py-32">
      <div className="container">
        <PlanHeaders
          selectedPlan={selectedPlan}
          onPlanChange={setSelectedPlan}
        />
        <FeatureSections selectedPlan={selectedPlan} />
      </div>
    </section>
  );
};

const PlanHeaders = ({
  selectedPlan,
  onPlanChange,
}: {
  selectedPlan: number;
  onPlanChange: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile View */}
      <div className="md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
          <div className="flex items-center justify-between border-b py-4">
            <CollapsibleTrigger className="flex items-center gap-2">
              <h3 className="text-2xl font-semibold">
                {pricingPlans[selectedPlan].name}
              </h3>
              <RoundSortVertical
                className={`size-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                weight="BoldDuotone"
              />
            </CollapsibleTrigger>
            <Button
              asChild
              variant={pricingPlans[selectedPlan].button.variant}
              className="w-fit"
            >
              <a
                href={WHATSAPP_CTA_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                {pricingPlans[selectedPlan].button.text}
              </a>
            </Button>
          </div>
          <CollapsibleContent className="flex flex-col space-y-2 p-2">
            {pricingPlans.map(
              (plan, index) =>
                index !== selectedPlan && (
                  <Button
                    size="lg"
                    variant="secondary"
                    key={plan.name}
                    onClick={() => {
                      onPlanChange(index);
                      setIsOpen(false);
                    }}
                  >
                    {plan.name}
                  </Button>
                ),
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop View */}
      <div className="grid grid-cols-4 gap-4 max-md:hidden">
        <div className="col-span-1 max-md:hidden"></div>

        {pricingPlans.map((plan) => (
          <div key={plan.name} className="">
            <h3 className="mb-3 text-2xl font-semibold">{plan.name}</h3>
            <Button asChild variant={plan.button.variant} className="">
              <a
                href={WHATSAPP_CTA_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                {plan.button.text}
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureSections = ({ selectedPlan }: { selectedPlan: number }) => (
  <>
    {comparisonFeatures.map((section) => (
      <div key={section.category} className="">
        <div className="border-primary/40 border-b py-4">
          <h3 className="text-lg font-semibold">{section.category}</h3>
        </div>
        {section.features.map((feature) => (
          <div
            key={feature.name}
            className="text-foreground grid grid-cols-2 font-medium max-md:border-b md:grid-cols-4"
          >
            <span className="inline-flex items-center py-4">
              {feature.name}
            </span>
            {/* Mobile View - Only Selected Plan */}
            <div className="md:hidden">
              <div className="flex items-center gap-1 py-4 md:border-b">
                {renderFeatureValue(
                  [feature.free, feature.startup, feature.enterprise][
                  selectedPlan
                  ],
                )}
              </div>
            </div>
            {/* Desktop View - All Plans */}
            <div className="hidden md:col-span-3 md:grid md:grid-cols-3 md:gap-4">
              {[
                { plan: "Free", value: feature.free },
                { plan: "Startup", value: feature.startup },
                { plan: "Enterprise", value: feature.enterprise },
              ].map(({ plan, value }) => (
                <div
                  key={plan}
                  className="flex items-center gap-1 border-b py-4"
                >
                  {renderFeatureValue(value)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
  </>
);
