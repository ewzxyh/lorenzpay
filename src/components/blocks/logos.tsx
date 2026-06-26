import { DashedLine } from "../dashed-line";

export const Logos = () => {
  return (
    <section className="overflow-hidden pb-28 lg:pb-32">
      <div className="container">
        <div className="relative flex items-center justify-center pt-5 pb-32">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            DIGA ADEUS AO MED PARA SEMPRE
          </span>
        </div>
        <p className="mx-auto max-w-5xl text-center font-semibold text-4xl text-balance leading-tight md:text-6xl lg:text-7xl">
          Nunca mais fique no prejuízo!{" "}<br></br>
          <span className="text-muted-foreground font-extrabold">
            100% de cobertura
          </span>
        </p>
      </div>
    </section>
  );
};
