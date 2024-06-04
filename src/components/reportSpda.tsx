import { FaCheckCircle } from "react-icons/fa";
import lightning from "/assets/lightning.png";

export function ReportSPDA() {
  return (
    <div>
      <div className="flex items-center gap-2 p-1 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <img src={lightning} alt="imagem de um raio" className="w-[30px] h-[30px]" />
        <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent text-base md:text-lg">
          Laudos
        </span>
      </div>
      <div className="space-y-3 mt-1">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-400" />
            <span className="yellow text-sm md:text-base">SPDA</span>
          </div>
          <p className="poppins-regular">
            Realizamos uma inspeção minuciosa do seu sistema de proteção contra
            descargas atmosféricas, fornecendo um laudo detalhado sobre sua
            condição e adequação às normas técnicas.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-400" />
            <span className="yellow text-sm md:text-base">
              Instalações Elétricas
            </span>
          </div>
          <p className="poppins-regular">
            Oferecemos uma avaliação abrangente de suas instalações elétricas,
            identificando potenciais riscos e sugerindo melhorias para aprimorar
            a segurança e a eficiência.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-400" />
            <span className="yellow text-sm md:text-base">Aterramento</span>
          </div>
          <p className="poppins-regular">
            Verificamos o sistema de aterramento de sua propriedade, assegurando
            que ele esteja corretamente dimensionado e instalado para proteger
            seus equipamentos.
          </p>
        </div>
      </div>
    </div>
  );
}
