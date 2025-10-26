"use client";
import React, { useState } from 'react';
import { Post } from "../profile/components/Post";
import FAB from '@/components/FAB';
import PostModal from '@/components/PostModal';

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

export function HomeClient({ posts: initialPosts }: HomeClientProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [open, setOpen] = useState(false);

  function addPost({text}: {text:string}) {

    const newPost = {
        id: Math.random(),
        avatar: '',
        username: '@you',
        content: text,
        likes: 0,
        comments: 0,
        shares: 0,
        time: 'now'
      };
      
    setPosts(current => [newPost, ...current]);
  }

  return (
    <div className="flex min-h-full w-full flex-col px-6 py-12 lg:px-8">
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
                <FAB onClick={()=>setOpen(true)} />
                <PostModal open={open} onClose={()=>setOpen(false)} onPost={addPost} />
        </section>
      </div>
    </div>
  );
}