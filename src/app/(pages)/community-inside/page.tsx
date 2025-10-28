import Image from "next/image";
import { Post } from "../profile/components/Post";
import CategoryButton from "../community/components/CategoryButton"; 

// ======= Simular datos desde el servidor (SSR) =======
async function getCommunityData() {
  return {
    name: "Juego",
    //here we going to need the bot
    description: " juego de acción y aventuras en 2D con un estilo artístico hand-drawn.",
    members: 5000,
    online: 25,
    logo: "/avatars/duckVer1.png",
  };
}

async function getPosts() {
  return [
    {
      id: 1,
      username: "DuckHappy#1234",
      avatar: "/avatars/duckMusic.png",
      time: "1h",
      content: "Ducks are the best",
      comments: 5,
      shares: 3,
      likes: 2,
    },
    {
      id: 2,
      username: "QuackingQuacker",
      avatar: "/avatars/duckBoy.png",
      time: "2h",
      content: "What’s your favorite duck species?",
      comments: 4,
      shares: 1,
      likes: 0,
    },
  ];
}

// ======= Componente principal SSR =======
export default async function CommunityPage() {
  const community = await getCommunityData();
  const posts = await getPosts();


  return (
    <main className="min-h-screen bg-gradient-to-b to-sky-200 flex flex-col items-center py-8">
      {/* Header */}
      <header className="w-full max-w-5xl bg-sky-50/70 border border-sky-200 rounded-xl shadow-sm p-6 mb-6 flex items-center gap-3">
        <Image
          src={community.logo}
          alt="Community Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold text-sky-900">r/{community.name}</h1>
      </header>

      {/* Layout principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Feed */}
        <section className="md:col-span-2 flex flex-col gap-4">
          {posts.map((post) => (
            <Post
              key={post.id}
              postId={post.id}
              avatar={post.avatar}
              username={post.username}
              time={post.time}
              content={post.content}
              comments={post.comments}
              shares={post.shares}
              likes={post.likes}
            />
          ))}
        </section>

        {/* Sidebar */}
        <aside className="bg-sky-50 border border-sky-200 rounded-xl shadow-sm p-4 h-fit">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={community.logo}
              alt="Community Logo"
              width={40}
              height={40}
            />
            <h2 className="font-bold text-sky-900">
              Bienvenido a Quackly
            </h2>
          </div>

          <p className="text-sky-800 text-sm mb-3">{community.description}</p>

          <hr className="border-sky-200 mb-3" />

          <div className="text-sky-900 text-sm space-y-1">
            <p>
              <strong>{community.members.toLocaleString()}</strong> Members
            </p>
            <p>
              <strong>{community.online}</strong> Online
            </p>
          </div>
            {/* <CategoryButton /> */}
        </aside>
      </div>
    </main>
  );
}
