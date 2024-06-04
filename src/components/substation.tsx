import estation from "/assets/estation.png";
import { ServicesContent } from "./servicesContent";
import { Button } from "./button";

export function Substation() {
  return (
    <div id="substationSpda" className="mt-16 lg:mt-32">
      <h1 className="text-center text-3xl bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent z-20 relative">
        Subestação e SPDA
      </h1>
      <section className="flex flex-col justify-between w-[100%] lg:flex-row gap-3 mt-10">
        <div className="flex items-center justify-center lg:items-start lg:w-[50%]">
          <img
            src={estation}
            alt="laudo técnico"
            className="rounded-md w-[800px] light h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 justify-between items-center z-20 w-full mx-auto text-sm md:text-base lg:items-start lg:w-[50%]">
          <ServicesContent
            title="Projetos de Subestação"
            text="Elaboramos projetos completos de subestações, tanto abrigadas
              quanto aéreas, garantindo a eficiência e segurança na transmissão
              e distribuição de energia elétrica. Nossos engenheiros
              especializados utilizam tecnologia avançada e práticas comprovadas
              para desenvolver subestações que atendem às suas necessidades
              específicas e estão em conformidade com as normas técnicas mais
              recentes."
          />

          <ServicesContent
            title="SPDA"
            text="Desenvolvemos sistemas de proteção contra descargas atmosféricas
            (SPDA) para proteger suas instalações e equipamentos contra os
            efeitos das descargas elétricas. Nossos sistemas são projetados
            para oferecer a máxima proteção, minimizando os riscos e danos
            causados por raios e outras descargas atmosféricas."
          />

          <a href="#contact">
            <Button text="Proteja suas instalações!" />
          </a>
        </div>
      </section>
    </div>
  );
}
