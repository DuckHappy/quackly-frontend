type Props = {
  label: string;
  variant: "primary" | "secondary";
  onClick: () => void;
};

export function Button({ label, onClick, variant }: Props) {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-colors duration-200 mt-2";

  const variantStyles = variant === "primary"
      ? "bg-yellow-400 text-black hover:bg-yellow-500 mt-4"
      : "bg-white text-black border hover:bg-gray-200";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {label}
    </button>
  );
}
