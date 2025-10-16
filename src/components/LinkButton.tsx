import Link from "next/link";

type Props = {
  label: string;
  variant: "primary" | "secondary";
  onClick: () => void;
  href: string;
};

export default function LinkButton({ label, onClick, variant, href }: Props) {
  const baseStyles =
    "min-w-50 px-4 py-2 rounded-full text-center font-semibold transition-colors duration-200 mt-4";

  const variantStyles =
    variant === "primary"
      ? "bg-white text-black hover:bg-sky-300 mt-4"
      : "bg-yellow-300 text-black hover:bg-sky-300";

  return (
    <Link
      href={href}
      onNavigate={onClick}
      className={`${baseStyles} ${variantStyles}`}
    >
      {label}
    </Link>
  );
}
