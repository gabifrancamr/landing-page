import hero from "/assets/heroimg.png";
import sun from "/assets/sun.png";

import Benefits from "./benefits";
import { Button } from "./button";

export function Solar() {
  return (
    <div id="solar" className="mt-10">
      <h1 className="text-center text-3xl bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent z-20 relative">
        Instalação de Painéis Solares
      </h1>
      <section className="flex flex-col-reverse justify-between w-[100%] lg:flex-row gap-3 mt-10">
        <div className="flex flex-col gap-3 justify-between items-center z-20 w-full mx-auto text-sm md:text-base lg:items-start lg:w-[50%]">
          <div className="flex items-center justify-center rounded-[10px] gap-1">
            <img src={sun} alt="sol" className="w-[32px] h-[32px]" />
            <p>
              <span className="text-orange-500">Valorize</span> seu imóvel e{" "}
              <span className="text-orange-500">economize</span> na conta de luz
              com <span className="text-orange-500">energia solar</span>
            </p>
          </div>

          <p className="w-full lg:max-w-[577px] text-sm text-center lg:text-start">
            Comece a economizar desde o primeiro mês com parcelas que se ajustam
            ao seu orçamento aproveitando uma energia que dura 25 anos!
          </p>

          <Benefits />

          <a href="#contact">
            <Button text="Comece a economizar agora!" />
          </a>
        </div>

        <div className="flex items-center justify-center lg:items-start lg:w-[50%]">
          <img
            src={hero}
            alt="casa com energia solar"
            className="rounded-md w-[800px] light h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
