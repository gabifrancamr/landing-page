import report from "/assets/report.png";
import { ServicesContent } from "./servicesContent";
import { ReportSPDA } from "./reportSpda";
import { Button } from "./button";

export function Report() {
  return (
    <div id="report" className="mt-16 lg:mt-32">
      <h1 className="text-center text-3xl bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent z-20 relative">
        Laudos e Prontuários
      </h1>
      <section className="flex flex-col-reverse justify-between w-[100%] lg:flex-row gap-3 mt-10">
        <div className="flex flex-col gap-3 justify-between items-center z-20 w-full mx-auto text-sm md:text-base lg:items-start lg:max-w-[50%]">
          <ReportSPDA />

          <ServicesContent
            title="Prontuário NR10"
            text="Elaboramos o prontuário NR10, um documento essencial que comprova
              a conformidade de suas instalações elétricas com a Norma
              Regulamentadora 10 (NR10)."
          />
          <a href="#contact">
            <Button text="Garanta sua segurança!" />
          </a>
        </div>
        <div className="flex items-center justify-center lg:items-start lg:w-[50%]">
          <img
            src={report}
            alt="laudo técnico"
            className="rounded-md w-[800px] light h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
