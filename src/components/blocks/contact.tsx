import React from "react";

import Link from "next/link";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Operação",
    content: (
      <p className="text-muted-foreground mt-3">
        Infraestrutura Pix
        <br />
        Recebimento e repasse
      </p>
    ),
  },
  {
    title: "Contato",
    content: (
      <div className="mt-3">
        <div>
          <p className="">API</p>
          <Link
            href="mailto:redacted@example.invalid"
            className="text-muted-foreground hover:text-foreground"
          >
            redacted@example.invalid
          </Link>
        </div>
        <div className="mt-1">
          <p className="">Operação</p>
          <Link
            href="mailto:redacted@example.invalid"
            className="text-muted-foreground hover:text-foreground"
          >
            redacted@example.invalid
          </Link>
        </div>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Falar com a LorenzPay
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Fale com o CEO para operar com proteção contra contestações Pix.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info) => (
            <div key={info.title}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Solicitação</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
