import Link from "next/link";

type Props = {
  label: string;
  variant: "primary" | "secondary";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  href: string;
};

// Aveces el click abre un modal y otras veces navega. (segun el contexto, varia su comportamiento)
export default function LinkButton({ label, onClick, variant, href }: Props) {
  const baseStyles =
    "min-w-50 px-4 py-2 rounded-full text-center font-semibold transition-colors duration-200 mt-4";

  const variantStyles =
    variant === "primary"
      ? "bg-white text-black mt-4 hover:bg-blue-400"
      : "bg-yellow-300 text-black hover:bg-blue-400";

  return (
    <Link
      href={href} // Ruta de navegación
      onClick={onClick} // Acción personalizada al hacer clic
      className={`${baseStyles} ${variantStyles}`}
    >
      {label}
    </Link>
  );
}
