import Image from "next/image";
import { Metadata } from "next";
import CommunityClient from "../[slug]/CommunityClient";

interface Props {
  params: { slug: string };
}

async function getCommunityData(slug: string) {
  return {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    description: "Juego de acción y aventuras en 2D con un estilo artístico hand-drawn.",
    members: 5000,
    online: 25,
    logo: "/avatars/duckVer1.png",
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const community = await getCommunityData(params.slug);
  return {
    title: `${community.name} - Quackly`,
    description: community.description,
  };
}

async function getPosts() {
  return [
    {
      id: 1,
      username: "Wilson",
      avatar: "/avatars/duckMusic.png",
      time: "1h",
      content: "vieron lo ultimo subido? Es una locura",
      comments: 5,
      shares: 3,
      likes: 2,
    },
    {
      id: 2,
      username: "Oliver",
      avatar: "/avatars/duckBoy.png",
      time: "2h",
      content: "?????? , que paso con la ultima version?",
      comments: 1,
      shares: 1,
      likes: 0,
    },
    {
      id: 3,
      username: "Martin",
      avatar: "/avatars/duckBoy.png",
      time: "2h",
      content: "de que es esta comunidad?",
      comments: 4,
      shares: 1,
      likes: 0,
    },
    {
      id: 4,
      username: "Sofia",
      avatar: "/avatars/duckBoy.png",
      time: "2h",
      content: "tomando descansos",
      comments: 2,
      shares: 1,
      likes: 0,
    },
    {
      id: 5,
      username: "Oliver",
      avatar: "/avatars/duckBoy.png",
      time: "2h",
      content: "otro dia que sigo vivo",
      comments: 4,
      shares: 1,
      likes: 0,
    },
  ];
}

export default async function CommunityPage({ params }: Props) {
  const community = await getCommunityData(params.slug);
  const posts = await getPosts();

  return (
    <main className="relative min-h-screen bg-gradient-to-b to-sky-200 flex flex-col items-center py-8">
      {/* Header */}
      <header className="w-full max-w-5xl bg-sky-50/70 border border-sky-200 rounded-xl shadow-sm p-6 mb-6 flex items-center gap-3">
        <Image
          src={community.logo}
          alt="Community Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold text-sky-900">{community.name}</h1>
      </header>

      {/* Layout principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Feed */}
        <section className="md:col-span-2 flex flex-col items-center">
          <CommunityClient posts={posts} />
        </section>

        {/* Sidebar */}
        <aside className="bg-sky-50 border border-sky-200 rounded-xl shadow-sm p-4 h-fit">
          <div className="flex items-center gap-3 mb-3">
            <Image src={community.logo} alt="Community Logo" width={40} height={40} />
            <h2 className="font-bold text-sky-900">Bienvenido a Quackly</h2>
          </div>

          <p className="text-sky-800 text-sm mb-3">{community.description}</p>
          <hr className="border-sky-200 mb-3" />
          <div className="text-sky-900 text-sm space-y-1">
            <p><strong>{community.members.toLocaleString()}</strong> Members</p>
            <p><strong>{community.online}</strong> Online</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
