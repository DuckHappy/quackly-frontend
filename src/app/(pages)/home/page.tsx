import { HomeClient } from "./HomeClient";

// Simular obtención de posts desde el servidor
async function getPosts() {
  // En un caso real esto sería un fetch a tu API
  // const res = await fetch("https://api.quackly.com/posts", { cache: "no-store" });

  // Simulación de delay para demostrar loading state
  await new Promise((resolve) => setTimeout(resolve, 500));

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
      content: "Dicen que los errores te hacen más fuerte jajsajkjs",
      likes: 6,
      comments: 4,
      shares: 3,
      time: "8h",
    },

    {
      id: 6,
      avatar: "/avatars/dunk-nicon.png", //Nicolas
      username: "Nicon_rodriguez",
      content: "Le dije a mi vieja que soy full stack. Ahora cree que arreglo lavarropas y microondas.",
      likes: 10,
      comments: 12,
      shares: 12,
      time: "8h",
    },

    {
      id: 7,
      avatar: "/avatars/duckVer1.png", //Benjamin
      username: "Benjamin",
      content: "Tomando el sol en el lago ☀️🦆",
      likes: 6,
      comments: 4,
      shares: 3,
      time: "8h",
    },
    {
      id: 10,
      avatar: "/avatars/dunk-nicon.png",
      username: "Nicon_rodriguez",
      content:
        "Cuando el senior dice 'esto es fácil', sé que estoy en peligro.",
      likes: 1,
      comments: 1,
      shares: 9,
      time: "20h",
    },
    {
      id: 11,
      avatar: "/avatars/dunk-nicon.png",
      username: "Nicon_rodriguez",
      content:
        "Nada más argentino que hacer commit con un 'arreglado más o menos'.",
      likes: 60,
      comments: 4,
      shares: 3,
      time: "21h",
    },
    {
      id: 12,
      avatar: "/avatars/dunk-nicon.png",
      username: "Nicon_rodriguez",
      content:
        "Sabias que un 'solo cambio una línea' puede romper todo el sistema.",
      likes: 100,
      comments: 2,
      shares: 79,
      time: "22h",
    },
    {
      id: 13,
      username: "Nicon_rodriguez",
      avatar: "/avatars/dunk-nicon.png",
      content: "Nada te prepara para el trauma de un merge conflict",
      likes: 8,
      comments: 4,
      shares: 3,
      time: "23h",
    },
  ];
}

export default async function HomePage() {
  const posts = await getPosts();

  return <HomeClient posts={posts} />;
}
