import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import logo from "/assets/logo.png";
import { toast } from "sonner";
import { Loading } from "./loading";

const formSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 letras"),
  email: z.string().email({ message: "Insira um email válido" }),
  message: z
    .string()
    .max(2000, { message: "A mensagem pode ter no máximo 2000 caracteres" }),
});

type TypeOfForm = z.infer<typeof formSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TypeOfForm>({
    resolver: zodResolver(formSchema),
  });

  async function handleSendEmail() {
    // console.log(data);
    reset();
    toast.success("Agradecemos sua mensagem! Entraremos em contato em breve.");
  }

  return (
    <div className="w-full h-full rounded-lg p-6 space-y-8 flex flex-col justify-between">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-[200px]" />
      </div>
      <form
        onSubmit={handleSubmit(handleSendEmail)}
        className="flex flex-col justify-center gap-5 w-full mx-auto"
      >
        <div className="flex flex-col">
          <input
            {...register("name")}
            maxLength={50}
            required
            type="text"
            placeholder="Nome"
            className={`p-3 border rounded-md text-sm text-slate-900 placeholder:text-slate-900 focus:outline-none focus:border-slate-900 ${
              errors.name ? "border-red-700" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <span className="text-red-700 mt-1 text-xs">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            {...register("email")}
            maxLength={100}
            required
            type="email"
            placeholder="Email"
            className={`p-3 border rounded-md text-sm text-slate-900 placeholder:text-slate-900 focus:outline-none focus:border-slate-900 ${
              errors.email ? "border-red-700" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <span className="text-red-700 mt-1 text-xs">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <textarea
            {...register("message")}
            maxLength={1000}
            className={`p-3 border rounded-md text-sm text-slate-900 placeholder:text-slate-900 focus:outline-none focus:border-slate-900 h-28 ${
              errors.message ? "border-red-700" : "border-gray-300"
            }`}
            placeholder="Mensagem que deseja enviar"
          />
          {errors.message && (
            <span className="text-red-700 mt-1 text-xs">
              {errors.message.message}
            </span>
          )}
        </div>

        {isSubmitting ? (
          <button
            disabled={isSubmitting}
            type="submit"
            className={`flex gap-2 items-center justify-center disabled:bg-slate-400 text-slate-900 p-2 rounded-lg text-sm md:text-lg lg:min-w-[150px] lg:hidden `}
          >
            <Loading />
            Enviando...
          </button>
        ) : (
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-600 to-amber-600 p-2 rounded-lg text-sm md:text-lg lg:min-w-[258px] lg:hidden"
          >
            Solicitar orçamento grátis
          </button>
        )}

        <div className="hidden lg:flex justify-center">
          {isSubmitting ? (
            <button
              disabled
              type="submit"
              className={`bg-slate-400 p-2 rounded-lg text-slate-900 text-sm md:text-lg lg:min-w-[150px] lg:max-w-[150px] flex gap-2 items-center justify-center`}
            >
              <Loading />
              Enviando...
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-600 to-amber-600 p-2 rounded-lg text-sm md:text-lg lg:min-w-[258px] lg:max-w-[258px]"
            >
              Solicitar orçamento grátis
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
