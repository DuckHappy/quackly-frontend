import Link from "next/link";

type Props = {
  label: string;
  variant: "primary" | "secondary";
  onClick: () => void;
  href: string;
};

export default function LinkButton({ label, onClick, variant, href }: Props) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition-colors duration-200 mt-2";

  const variantStyles =
    variant === "primary"
      ? "bg-yellow-400 text-black hover:bg-yellow-500 mt-4"
      : "bg-sky-400 text-black border hover:bg-gray-200";

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
