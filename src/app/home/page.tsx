"use client";
import { useState } from "react";
import { Post } from "../profile/Post";

export default function HomePage() {

    const posts = [
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
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex flex-col justify-center items-center">
                <h2 className="block mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
                    Bienvenido a Quackly
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