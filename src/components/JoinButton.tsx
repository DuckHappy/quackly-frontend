"use client";
import { useState } from "react";

export default function JoinButton() {
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {  // lógica para abandonar/salirse de la comunidad
   
    if (isLoading) return // evita clics mientras carga
    setIsLoading(true);

    setTimeout(() => {
      setIsJoined(!isJoined);
      setIsLoading(false);
    }, 1000); //  reemplazár con fetch
  };

  return (
    <button
      onClick={handleClick}
      className={`mx-auto min-w-40 mt-4 ${
        isJoined
          ? "bg-sky-100 text-sky-600 hover:bg-red-500 hover:text-amber-50"
          : "bg-sky-400 hover:bg-sky-500 text-white"
      } font-semibold py-2 rounded-lg shadow-sm flex items-center justify-center gap-2`}
    >
      {isLoading && (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      )}
      {isJoined ? "Salir" : "Unirse"}
    </button>
  );
}
