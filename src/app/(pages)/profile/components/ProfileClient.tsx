"use client";

import { useState } from "react";
import Image from "next/image";
import { Post } from "./Post";
import { EditProfile } from "./EditProfile";
import FAB from '@/components/FAB';
import PostModal from '@/components/PostModal';

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

export function ProfileClient({ user, posts: initialPosts }: ProfileClientProps) {
  const [showModal, setShowModal] = useState(false);
  const [bio, setBio] = useState(user.bio);
  const [avatar, setAvatar] = useState(user.avatar);
  const [posts, setPosts] = useState(initialPosts);
  const [openPostModal, setOpenPostModal] = useState(false);

  function addPost({ text }: { text: string }) {
    const newPost = {
      id: Math.random(),
      content: text,
      likes: 0,
      comments: 0,
      shares: 0,
      time: 'now'
    };

    setPosts(current => [newPost, ...current]);
  }

  return (
    <>
      {/* Tarjeta de perfil */}
      <section className="bg-sky-200 rounded-2xl shadow-md p-6 w-[360px] text-center profile-card">
        <div className="profile-header flex flex-col items-center">
          <Image
            src={avatar}
            alt="avatar"
            width={80}
            height={80}
            className="profile-avatar rounded-full border-4 border-white shadow-md"
          />
          <h2 className="profile-username text-lg font-semibold mt-2">
            {user.username}
          </h2>
          <p className="profile-status text-sm text-green-600">
            {user.online ? "🟢 En línea" : "⚫ Desconectado"}
          </p>
        </div>

        {/* Estadísticas */}
        <div className="profile-stats flex justify-around mt-4 text-sm">
          <div className="stat-item">
            <p className="stat-number font-semibold">{user.friends}</p>
            <p className="stat-label">Amigos</p>
          </div>
          <div className="stat-item">
            <p className="stat-number font-semibold">{user.lagoons}</p>
            <p className="stat-label">Lagunas</p>
          </div>
          <div className="stat-item">
            <p className="stat-number font-semibold">{user.quacks}</p>
            <p className="stat-label">Quacks</p>
          </div>
          <div className="stat-item">
            <p className="stat-number font-semibold">{user.followers}</p>
            <p className="stat-label">Seguidores</p>
          </div>
        </div>

        {/* Biografía */}
        <p className="profile-bio text-gray-700 mt-3">{bio}</p>

        {/* Botón de editar */}
        <button
          onClick={() => setShowModal(true)}
          className="profile-edit-btn mt-2 bg-sky-300 hover:bg-sky-400 text-sm font-medium py-1 px-3 rounded-lg transition-colors"
        >
          Editar perfil
        </button>
      </section>

      {/* Lista de publicaciones */}
      <section className="posts-section mt-6 w-[360px] space-y-4">
        {posts.map((p: Post) => (
          <Post
            key={p.id}
            postId={p.id}
            avatar={avatar}
            username={user.username}
            time={p.time}
            content={p.content}
            likes={p.likes}
            comments={p.comments}
            shares={p.shares}
            onDelete={(id) => setPosts(posts.filter(post => post.id !== id))}
          />
        ))}
        <FAB onClick={() => setOpenPostModal(true)} />
        <PostModal open={openPostModal} onClose={() => setOpenPostModal(false)} onPost={addPost} />
      </section>

      {/* Modal de edición */}
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