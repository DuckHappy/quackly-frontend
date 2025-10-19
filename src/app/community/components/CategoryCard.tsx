import Image from "next/image";

interface CategoryCardProps {
  name: string;
  image?: string;
}

export default function CategoryCard({ name, image }: CategoryCardProps) {
  const fallbackImage = "/quack-default-profile.svg";

  const displayImage = image && image.trim() !== "" ? image : fallbackImage;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center w-32">
      <div className="w-16 h-16 mb-2 relative">
        <Image
          src={displayImage}
          alt={name}
          fill
          className="object-contain"
          sizes="64px"
          priority={displayImage === fallbackImage} // prioriza precargar el default
        />
      </div>

      <h3 className="text-sm font-semibold text-sky-800 text-center">{name}</h3>

      <button className="mt-2 bg-sky-500 text-white text-sm rounded-full px-4 py-1 hover:bg-sky-600 transition">
        Unirme
      </button>
    </div>
  );
}
