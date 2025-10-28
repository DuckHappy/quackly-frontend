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
      avatar: "/avatars/duckSanty.png", //santy
      username: "Santiago",
      content: "Hoy encontre dos gatitos lindos",
      likes: 5,
      comments: 3,
      shares: 2,
      time: "2h",
    },
    {
      id: 2,
      avatar: "/avatars/duckGaby.png", //gaby
      username: "Gabriel",
      content: "El enano me volvio a bajar la termica, me quede sin luz",
      likes: 5,
      comments: 3,
      shares: 2,
      time: "3h",
    },
    {
      id: 3,
      avatar: "/avatars/duckMauro.png", //Mauro
      username: "Mauro Diaz",
      content: "estoy cansado jefe",
      likes: 8,
      comments: 5,
      shares: 6,
      time: "6h",
    },

    {
      id: 4,
      avatar: "/avatars/duckVictor.png", //Victor
      username: "Victor",
      content: "Tomando el sol en el lago ☀️🦆",
      likes: 6,
      comments: 4,
      shares: 3,
      time: "8h",
    },

    {
      id: 5,
      avatar: "/avatars/duckHeadset.png", //Sabri
      username: "Sabrina Ortiz",
      content: "Tomando el sol en el lago ☀️🦆",
      likes: 6,
      comments: 4,
      shares: 3,
      time: "8h",
    },

    {
      id: 6,
      avatar: "/avatars/duckBoy.png", //Nicolas
      username: "Nicolas Rodriguez",
      content: "Tomando el sol en el lago ☀️🦆",
      likes: 6,
      comments: 4,
      shares: 3,
      time: "8h",
    },

    {
      id: 7,
      avatar: "/avatars/duckVer1.png",  //Benjamin
      username: "Benjamin",
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