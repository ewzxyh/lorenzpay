import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Operação",
    questions: [
      {
        question: "A LorenzPay é banco?",
        answer:
          "Não. É uma infraestrutura de processamento e repasse de pagamentos Pix com comunicação direta com o Banco Central. Somos os primeiros e únicos no Brasil a garantir 100% de defesa contra contestações no PIX",
      },
      {
        question: "Quando recebo o dinheiro?",
        answer:
          "Após envio dos comprovantes via WhatsApp junto com a chave pix para receber",
      },
      {
        question: "Como eu recebo o dinheiro?",
        answer: "Operação simples e manual via WhatsApp. Seu cliente envia o pix para a gente, depois você envia o comprovante de pagamento do seu cliente e sua chave pix para receber.",
      },
      {
        question: "Qual a taxa da LorenzPay?",
        answer:
          "É 6%, pois garantimos que não haverá nenhum problema relacionada a contestação de PIX. Cobertura total de qualquer evento.",
      },
    ],
  },
  {
    title: "Proteção",
    questions: [
      {
        question: "O que acontece em caso de contestação?",
        answer:
          "A LorenzPay garante vitória na defesa contra 100% contra contestações de PIX (MED), caso contrário cobrimos integralmente os impactos financeiross.",
      },
      {
        question: "Que risco financeiro é assumido?",
        answer:
          "Você não assume nenhum risco. A LorenzPay assume integralmente qualquer risco financeiro de contestações relacionadas às transações processadas em nossa infraestrutura.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section id="faq" className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Dúvidas
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Dúvidas
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Se precisar operar via API ou WhatsApp,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                fale com a LorenzPay
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item) => (
                    <AccordionItem key={item.question} value={item.question}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
