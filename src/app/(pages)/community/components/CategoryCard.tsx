"use client";
import { useState } from "react";
import Image from "next/image";
import CategoryButton from "./CategoryButton";

interface CategoryCardProps {
  name: string;
  image?: string;
  isJoined?: boolean;
}

export default function CategoryCard({ name, image, isJoined = false }: CategoryCardProps) {
  const [joined, setJoined] = useState(isJoined);
  const fallbackImage = "/images/duck_front_color.svg";
  const displayImage = image && image.trim() !== "" ? image : fallbackImage;

  const handleClick = () => {
    setJoined(!joined);
    if (joined) {
      alert(`Has dejado de seguir la comunidad de ${name}`);
    } else {
      alert(`¡Te has unido a la comunidad de ${name}!`);
    }
  };

  return (
    <div className="bg-white bg-gradient-to-b to-sky-200 rounded-2xl shadow-md p-4 flex flex-col items-center w-32">
      <div className="w-16 h-16 mb-2 relative">
        <Image
          src={displayImage}
          alt={name}
          fill
          className="object-contain bg-[#4DBFD6] rounded-full p-1"
          sizes="64px"
          priority={displayImage === fallbackImage}
        />
      </div>

      <h3 className="text-sm font-semibold text-sky-800 text-center">{name}</h3>

      {/* Botón separado */}
      <CategoryButton joined={joined} onClick={handleClick} />
    </div>
  );
}
