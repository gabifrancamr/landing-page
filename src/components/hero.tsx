import logo from "/assets/logo.png";
import ServicesHero from "./servicesHero";
import heropng from "/assets/eletricity-removebg.png";
import { Button } from "./button";

export function Hero() {
  return (
    <section
      id="home"
      className="mt-24 flex flex-col justify-between w-[100%] md:flex-row gap-3"
    >
      <div className="flex flex-col gap-4 justify-between items-center mt-0 w-full mx-auto md:items-start mb-0 md:max-w-[450px] md:mx-0">
        <div className="flex flex-col items-center md:block">
          <img src={logo} alt="logo" className="w-[450px]" />

          <h1 className="text-center md:text-start text-base mt-5 bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent max-w-[450px] lg:max-w-[495px]">
            Uma equipe de engenheiros eletricistas dedicados a transformar
            desafios em soluções, com inovação e segurança. Aqui, a corrente
            flui e as ideias brilham!
          </h1>
        </div>

        <ServicesHero />

        <a href="#contact">
          <Button text="Solicite seu orçamento grátis" />
        </a>
      </div>

      <div className="flex items-center justify-center md:items-start">
        <img
          src={heropng}
          alt="eletricidade fluindo entre lâmpadas"
          className="rounded-md w-[750px] light h-full hidden md:block object-cover"
        />
      </div>
    </section>
  );
}
