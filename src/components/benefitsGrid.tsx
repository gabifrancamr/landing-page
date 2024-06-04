import house from "/assets/home-png 1.png";
import tree from "/assets/tree.png";
import increase from "/assets/Increase.png";
import wallet from "/assets/Wallet.png";

export default function Benefits() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 max-w-[550px]">
      <div className="flex items-center max-w-[270px] gap-2 p-1 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <img src={house} alt="casa" className="w-[30px]" />
        <span className="poppins-regular text-center">
          Valorização do imóvel
        </span>
      </div>

      <div className="flex items-center max-w-[270px] gap-2 p-1 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <img src={wallet} alt="casa" className="w-[30px]" />
        <span className="poppins-regular text-center">Retorno financeiro</span>
      </div>

      <div className="flex items-center max-w-[270px] gap-2 p-1 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <img src={increase} alt="casa" className="w-[30px]" />
        <span className="poppins-regular text-center">Corte de Custos</span>
      </div>

      <div className="flex items-center max-w-[270px] gap-2 p-1 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <img src={tree} alt="casa" className="w-[30px]" />
        <span className="poppins-regular text-center">Sustentabilidade</span>
      </div>
    </div>
  );
}
