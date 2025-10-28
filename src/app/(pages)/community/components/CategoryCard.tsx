"use client";
import Link from "next/link";
import Image from "next/image";
import CategoryButton from "./CategoryButton";
import { useState } from "react";

interface CategoryCardProps {
  name: string;
  image?: string;
  isJoined?: boolean;
}

export default function CategoryCard({ name, image, isJoined = false }: CategoryCardProps) {
  const [joined, setJoined] = useState(isJoined);
  const fallbackImage = "/images/duck_front_color.svg";
  const displayImage = image && image.trim() !== "" ? image : fallbackImage;

  const slug = name.toLowerCase().replace(/\s+/g, "-");

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // evita que el click se propague al link
    e.preventDefault(); // evita la navegación
    setJoined(!joined);
  };

  return (
    <div className="bg-white bg-gradient-to-b to-sky-200 rounded-2xl shadow-md p-4 flex flex-col items-center w-32 cursor-pointer hover:scale-105 transition">
      {/* Solo esta parte lleva al link */}
      <Link href={`/community/${slug}`} className="no-underline flex flex-col items-center">
        <div className="w-16 h-16 mb-2 relative">
          <Image
            src={displayImage}
            alt={name}
            fill
            className="object-contain bg-[#4DBFD6] rounded-full p-1"
            sizes="64px"
          />
        </div>
        <h3 className="text-sm font-semibold text-sky-800 text-center">{name}</h3>
      </Link>

      {/* Botón separado, no redirige */}
      <CategoryButton joined={joined} onClick={handleClick} />
    </div>
  );
}
