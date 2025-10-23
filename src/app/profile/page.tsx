import Image from "next/image";
import { Post } from "./Post";
import { EditProfile } from "./EditProfile";
import { ProfileClient } from "./ProfileClient";

// Simular obtener datos del usuario desde servidor
async function getUserData() {
  // En un caso real: const res = await fetch("https://api.example.com/user", { cache: "no-store" });
  return {
    username: "DuckHappy",
    online: true,
    friends: 7,
    lagoons: 3,
    quacks: 42,
    followers: 58,
    bio: "Cuéntanos un poco sobre ti...",
    avatar: "/avatars/duckPro.png",
  };
}

async function getPosts() {
  // En un caso real: fetch desde una API
  return [
    {
      id: 1,
      content: "Dos patos en una carrera, ¿sabes cómo acaban?... Empatados",
      likes: 5,
      comments: 3,
      shares: 2,
      time: "2h",
    },
    {
      id: 2,
      content: "Día perfecto para nadar 🦆",
      likes: 5,
      comments: 3,
      shares: 2,
      time: "3h",
    },
  ];
}

export default async function ProfilePage() {
  const user = await getUserData();
  const posts = await getPosts();

  return (
    <main className="flex flex-col items-center min-h-screen py-10 bg-gradient-to-b to-sky-200">
      {/* Perfil */}
      <ProfileClient user={user} posts={posts} />
    </main>
  );
}
