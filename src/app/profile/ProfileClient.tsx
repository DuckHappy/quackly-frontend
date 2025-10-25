"use client";

import { useState } from "react";
import Image from "next/image";
import { Post } from "./Post";
import { EditProfile } from "./EditProfile";

interface Post {
  id: number;
  avatar?: string;
  username?: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
}
interface User {
  username: string;
  online: boolean;
  friends: number;
  lagoons: number;
  quacks: number;
  followers: number;
  bio: string;
  avatar: string;
}

interface ProfileClientProps {
  posts: Post[];
  user: User;
}

export function ProfileClient({ user, posts }: ProfileClientProps) {
  const [showModal, setShowModal] = useState(false);
  const [bio, setBio] = useState(user.bio);
  const [avatar, setAvatar] = useState(user.avatar);

  return (
    <>
      <section className="bg-sky-200 rounded-2xl shadow-md p-6 w-[360px] text-center">
        <div className="flex flex-col items-center">
          <Image
            src={avatar}
            alt="avatar"
            width={80}
            height={80}
            className="rounded-full border-4 border-white shadow"
          />
          <h2 className="text-lg font-semibold mt-2">{user.username}</h2>
          <p className="text-sm text-green-600">
            {user.online ? "🟢 En línea" : "⚫ Desconectado"}
          </p>
        </div>

        <div className="flex justify-around mt-4 text-sm">
          <div>
            <p className="font-semibold">{user.friends}</p>
            <p>Amigos</p>
          </div>
          <div>
            <p className="font-semibold">{user.lagoons}</p>
            <p>Lagunas</p>
          </div>
          <div>
            <p className="font-semibold">{user.quacks}</p>
            <p>Quacks</p>
          </div>
          <div>
            <p className="font-semibold">{user.followers}</p>
            <p>Seguidores</p>
          </div>
        </div>

        <p className="text-gray-700 mt-3">{bio}</p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-2 bg-sky-300 hover:bg-sky-400 text-sm font-medium py-1 px-3 rounded-lg transition"
        >
          Editar perfil
        </button>
      </section>

      {/* Publicaciones */}
      <section className="mt-6 w-[360px] space-y-4">
        {posts.map((p: Post) => (
          <Post
            key={p.id}
            avatar={avatar}
            username={user.username}
            time={p.time}
            content={p.content}
            likes={p.likes}
            comments={p.comments}
            shares={p.shares}
          />
        ))}
      </section>

      {/* Modal */}
      {showModal && (
        <EditProfile
          initialBio={bio}
          initialAvatar={avatar}
          onClose={() => setShowModal(false)}
          onSave={(newBio, newAvatar) => {
            setBio(newBio);
            setAvatar(newAvatar);
          }}
        />
      )}
    </>
  );
}
