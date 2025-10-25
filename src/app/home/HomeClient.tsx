"use client";
import { Post } from "../profile/Post";

interface Post {
  id: number;
  avatar: string;
  username: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
}

interface HomeClientProps {
  posts: Post[];
}

export function HomeClient({ posts }: HomeClientProps) {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="flex flex-col justify-center items-center">
        <h2 className="block mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
          Inicio
        </h2>
        <section className="mt-6 w-[360px] space-y-4">
          {posts.map((p) => (
            <Post
              key={p.id}
              avatar={p.avatar}
              username={p.username}
              time={p.time}
              content={p.content}
              likes={p.likes}
              comments={p.comments}
              shares={p.shares}
            />
          ))}
        </section>
      </div>
    </div>
  );
}