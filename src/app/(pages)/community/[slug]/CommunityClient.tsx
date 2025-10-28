"use client";

import React, { useState } from "react";
import { Post } from "../../profile/components/Post";
import FAB from "@/components/FAB";
import PostModal from "@/components/PostModal";

interface PostType {
  id: number;
  avatar: string;
  username: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
}

interface CommunityClientProps {
  posts: PostType[];
}

export default function CommunityClient({ posts: initialPosts }: CommunityClientProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [open, setOpen] = useState(false);

  function addPost({ text }: { text: string }) {
    const newPost: PostType = {
      id: Math.random(),
      avatar: "/avatars/duckVer1.png",
      username: "@you",
      content: text,
      likes: 0,
      comments: 0,
      shares: 0,
      time: "now",
    };

    setPosts((current) => [newPost, ...current]);
  }

  return (
    <>
      <section className="flex flex-col gap-4 w-full">
        {posts.map((p) => (
          <Post
            key={p.id}
            postId={p.id}
            avatar={p.avatar}
            username={p.username}
            time={p.time}
            content={p.content}
            likes={p.likes}
            comments={p.comments}
            shares={p.shares}
            onDelete={(id) => setPosts(posts.filter((post) => post.id !== id))}
          />
        ))}
      </section>

      {/* Elementos flotantes fuera del flujo del contenido */}
      <FAB onClick={() => setOpen(true)} />
      <PostModal open={open} onClose={() => setOpen(false)} onPost={addPost} />
    </>
  );
}
