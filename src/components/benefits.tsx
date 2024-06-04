import { ServicesContent } from "./servicesContent";

export default function Benefits() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <ServicesContent
        title="Valorização do imóvel"
        text="Uma casa com energia solar é um investimento para o futuro."
      />

      <ServicesContent
        title="Corte de custos"
        text="Produza sua própria energia e veja sua conta de luz diminuir."
      />

      <ServicesContent
        title="Investimento"
        text="Retorno do investimento acima da poupança e CDB."
      />

      <ServicesContent
        title="Sustentabilidade"
        text="Cada painel solar contribui para um planeta mais saudável."
      />
    </div>
  );
}
