import { Button } from "@/components/ui/button";
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Diga adeus às contestações PIX
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Defendemos MED, cobrimos impactos financeiros elegíveis e evitamos que
          bloqueios, perdas e caixa instável travem sua operação.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a
              href={WHATSAPP_CTA_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Falar com CEO
            </a>
          </Button>
        </div>
      </div>

      <div className="text-primary mt-10 w-full overflow-hidden text-center text-[18vw] leading-none font-semibold tracking-tight md:mt-14 lg:mt-20">
        LorenzPay
      </div>
    </footer>
  );
}
