import lightning from "/assets/lightning.png";

interface ServicesContextProps {
  title: string;
  text: string;
}

export function ServicesContent({ title, text }: ServicesContextProps) {
  return (
    <div>
      <div className="flex items-center gap-2 p-1 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="flex items-center gap-3">
          <img src={lightning} alt="imagem de um raio" className="w-[30px] h-[30px]" />
          <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent text-base md:text-lg">
            {title}
          </span>
        </div>
      </div>
      <p className="poppins-regular mt-1">{text}</p>
    </div>
  );
}
