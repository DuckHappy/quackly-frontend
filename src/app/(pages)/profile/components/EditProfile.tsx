"use client";
import Image from "next/image";
import { useState } from "react";

type EditProfileProps = {
  initialBio: string;
  initialAvatar: string;
  onClose: () => void;
  onSave: (newBio: string, newAvatar: string) => void;
};

const predefinedAvatars = [
  "/avatars/duckPro.png",
  "/avatars/duckBoy.png",
  "/avatars/duckHeadset.png",
  "/avatars/duckMusic.png",
  "/avatars/duckVer1.png",
  "/avatars/duckVer2.png",
];

export function EditProfile({
  initialBio,
  initialAvatar,
  onClose,
  onSave,
}: EditProfileProps) {
  const [bio, setBio] = useState(initialBio);
  const [avatar, setAvatar] = useState(initialAvatar);

  const handleSave = () => {
    onSave(bio, avatar);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[340px] text-center">
        <h3 className="text-lg font-semibold mb-3">Editar perfil</h3>

        {/* Imagen actual */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src={avatar}
            alt="avatar actual"
            width={70}
            height={70}
            className="rounded-full border-4 border-sky-300 shadow mb-2"
          />
          <p className="text-xs text-gray-500">Avatar actual</p>
        </div>

        {/* Selector de avatares */}
        <div className="flex justify-center gap-2 flex-wrap mb-4">
          {predefinedAvatars.map((src) => (
            <button
              key={src}
              onClick={() => setAvatar(src)}
              className={`rounded-full p-1 border-2 transition ${
                avatar === src
                  ? "border-sky-500 scale-105"
                  : "border-transparent hover:border-sky-300"
              }`}
            >
              <Image
                src={src}
                alt="avatar opción"
                width={50}
                height={50}
                className="rounded-full"
              />
            </button>
          ))}
        </div>

        {/* Campo bio */}
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={4}
          className="w-full p-2 border border-sky-200 rounded-md focus:ring-2 focus:ring-sky-400 text-sm"
        />

        {/* Botones */}
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={handleSave}
            className="bg-sky-400 hover:bg-sky-500 text-white px-3 py-1 rounded-lg text-sm transition"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-lg text-sm transition"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
