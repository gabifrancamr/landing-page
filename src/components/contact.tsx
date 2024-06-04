import { ContactInfo } from "./contactInfo";
import { Form } from "./form";

export function Contact() {
  return (
    <div id="contact" className="mt-16 lg:mt-32">
      <h2 className="text-5xl yellow">Contato</h2>
      <div className="flex flex-col bg-slate-300 rounded-md mt-10 md:flex-row">
        <div className="bg-slate-950 flex flex-col p-6 rounded-md space-y-5 md:w-[50%]">
          <div className="space-y-5">
            <h3 className="text-xl lg:text-2xl bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Tem alguma dúvida? Fale conosco!
            </h3>
            <p className="text-base lg:text-xl bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Nosso time está pronto para responder suas perguntas.
            </p>
          </div>

          <ContactInfo />
        </div>
        <div className="md:w-[50%]">
          <Form />
        </div>
      </div>
    </div>
  );
}
