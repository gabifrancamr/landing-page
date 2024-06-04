interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
}

export function Button({ text, type = "button" }: ButtonProps) {
  return (
    <button
      className="max-w-[258px] min-w-[198px] bg-gradient-to-r from-orange-600 to-amber-600 p-2 rounded-lg md:min-w-[300px]"
      type={type}
    >
      {text}
    </button>
  );
}
