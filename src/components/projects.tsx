import projects from "/assets/projetos.png";
import { ServicesContent } from "./servicesContent";
import { Button } from "./button";

export function Projects() {
  return (
    <div id="projects" className="mt-16 lg:mt-32">
      <h1 className="text-center text-3xl bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent z-20 relative">
        Projetos Elétricos, CFTV e de de Alarme
      </h1>
      <section className="flex flex-col-reverse justify-between w-[100%] lg:flex-row gap-3 mt-10">
        <div className="flex flex-col gap-3 justify-between items-center z-20 w-full mx-auto text-sm md:text-base lg:items-start lg:w-[50%]">
          <ServicesContent
            title="Projetos Elétricos"
            text="Elaboramos uma variedade completa de soluções elétricas,
              abrangendo instalações residenciais, comerciais e industriais,
              além de reformas elétricas."
          />

          <ServicesContent
            title="Projetos de CFTV"
            text="Desenvolvemos sistemas de CFTV de última geração, compreendendo
            câmeras de segurança e sistemas de vigilância."
          />

          <ServicesContent
            title="Projetos de Alarme"
            text="Criamos uma diversidade de sistemas de alarme, incluindo alarmes
            residenciais e comerciais, bem como sistemas de detecção de
            incêndio."
          />

          <a href="#contact">
            <Button text="Melhore sua segurança!" />
          </a>
        </div>
        <div className="flex items-center justify-center lg:items-start lg:w-[50%]">
          <img
            src={projects}
            alt="laudo técnico"
            className="rounded-md w-[800px] light h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
