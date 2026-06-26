import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { Pricing } from "@/components/blocks/pricing";
import { Testimonials } from "@/components/blocks/testimonials";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "LorenzPay",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      description:
        "A LorenzPay atua na defesa contra contestações Pix MED 2.0 e cobre impactos financeiros elegíveis.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "redacted@example.invalid",
        availableLanguage: "Portuguese",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "LorenzPay",
      url: siteUrl,
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Defesa contra contestações Pix MED 2.0",
      serviceType: "Defesa MED, cobertura financeira e repasse Pix",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Autônomos",
        },
        {
          "@type": "Audience",
          audienceType: "Pequenas empresas",
        },
      ],
      offers: {
        "@type": "Offer",
        name: "Taxa de 6% sobre valores processados",
        priceCurrency: "BRL",
        description:
          "A LorenzPay cobra 6% sobre valores processados e cobre impactos financeiros de eventos elegíveis.",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq-schema`,
      mainEntity: [
        {
          "@type": "Question",
          name: "A LorenzPay é banco?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. A LorenzPay é uma infraestrutura de processamento e repasse de pagamentos Pix.",
          },
        },
        {
          "@type": "Question",
          name: "Quando recebo o dinheiro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O repasse é enviado após o envio dos comprovantes via WhatsApp junto com a chave Pix para receber.",
          },
        },
        {
          "@type": "Question",
          name: "O que acontece em caso de contestação Pix?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A LorenzPay assume a defesa contra contestações Pix MED e cobre integralmente impactos financeiros de eventos elegíveis conforme regras operacionais.",
          },
        },
        {
          "@type": "Question",
          name: "Qual a taxa da LorenzPay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A taxa da LorenzPay é de 6% sobre os valores processados.",
          },
        },
      ],
    },
  ],
};

const structuredDataJson = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />
      <Background className="via-muted to-muted/80">
        <Hero />
        <Logos />
        <Features />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <Pricing />
        <FAQ />
      </Background>
    </>
  );
}
