import { HomeClient } from "./HomeClient";

// Simular obtención de posts desde el servidor
async function getPosts() {
  // En un caso real esto sería un fetch a tu API
  // const res = await fetch("https://api.quackly.com/posts", { cache: "no-store" });
  
  // Simulación de delay para demostrar loading state
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: 1,
      avatar: "/avatars/duckPro.png",
      username: "DuckHappy",
      content: "Dos patos en una carrera, ¿sabes cómo acaban?... Empatados",
      likes: 5,
      comments: 3,
      shares: 2,
      time: "2h",
    },
    {
      id: 2,
      avatar: "/avatars/duckPro.png",
      username: "DuckHappy",
      content: "Día perfecto para nadar 🦆",
      likes: 5,
      comments: 3,
      shares: 2,
      time: "3h",
    },
    {
      id: 3,
      avatar: "/avatars/duckMusic.png",
      username: "DuckMusic",
      content: "Escuchando mi playlist favorita de música acuática 🎵🦆",
      likes: 8,
      comments: 5,
      shares: 6,
      time: "6h",
    },
    {
      id: 4,
      avatar: "/avatars/duck_eyesClose.png",
      username: "DuckEyes",
      content: "Tomando el sol en el lago ☀️🦆",
      likes: 6,
      comments: 4,
      shares: 3,
      time: "8h",
    },
  ];
}

export default async function HomePage() {
  const posts = await getPosts();
  
  return <HomeClient posts={posts} />;
}