"use client";
import { useState } from "react";

interface CategoryButtonProps {
  joined: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CategoryButton({ joined, onClick }: CategoryButtonProps) {
  const [hover, setHover] = useState(false);

  // Gradientes dinámicos según estado
  const gradientClass = joined
    ? hover
      ? "bg-gradient-to-r from-rose-500 to-red-600"
      : "bg-gradient-to-r from-emerald-400 to-green-600"
    : "bg-gradient-to-r from-sky-400 to-sky-600";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`mt-2 text-sm rounded-full px-4 py-1 min-w-[100px] h-[32px]
        text-white font-medium shadow-md transition-all duration-500 ease-in-out
        ${gradientClass}
      `}
    >
      <div className="relative flex items-center justify-center h-full">
        <span
          className={`absolute transition-opacity duration-300 ${
            !joined ? "opacity-100" : "opacity-0"
          }`}
        >
          Unirme
        </span>
        <span
          className={`absolute transition-opacity duration-300 ${
            joined && !hover ? "opacity-100" : "opacity-0"
          }`}
        >
          Seguido
        </span>
        <span
          className={`absolute transition-opacity duration-300 ${
            joined && hover ? "opacity-100" : "opacity-0"
          }`}
        >
          Abandonar
        </span>
      </div>
    </button>
  );
}
