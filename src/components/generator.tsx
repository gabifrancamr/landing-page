import generator from "/assets/generator.png";
import { ServicesContent } from "./servicesContent";
import { Button } from "./button";

export function Generator() {
  return (
    <div id="generator" className="mt-16 lg:mt-32">
      <h1 className="text-center text-3xl bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent z-20 relative">
        Gerador Diesel
      </h1>
      <section className="flex flex-col justify-between w-[100%] lg:flex-row gap-3 mt-10">
        <div className="flex items-center justify-center lg:items-start lg:w-[50%]">
          <img
            src={generator}
            alt="Gerador Diesel"
            className="rounded-md light h-full object-cover w-[800px]"
          />
        </div>

        <div className="flex flex-col gap-3 justify-between items-center z-20 w-full mx-auto text-sm md:text-base lg:items-start lg:max-w-[50%]">
          <ServicesContent
            title="Instalação"
            text="Realizamos a instalação de geradores diesel robustos e confiáveis,
              ideais para uma variedade de aplicações, desde residenciais até
              industriais."
          />

          <ServicesContent
            title="Manutenção"
            text="Oferecemos serviços completos de manutenção para garantir que seus
            geradores diesel estejam sempre operacionais e funcionando com
            máxima eficiência."
          />

          <ServicesContent
            title="Avaliação do Consumo de Energia"
            text="Realizamos avaliações detalhadas do seu consumo de energia,
            identificando como e onde os geradores diesel podem ser mais
            eficazmente utilizados. Com base na nossa avaliação de consumo,
            identificamos oportunidades significativas de economia."
          />

          <a href="#contact">
            <Button text="Saiba mais e economize!" />
          </a>
        </div>
      </section>
    </div>
  );
}
