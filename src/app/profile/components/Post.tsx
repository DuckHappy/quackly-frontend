"use client";
import Image from "next/image";
import { useState } from "react";

type PostProps = {
  postId?: string;
  avatar: string;
  username: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
};

export function Post({
  postId,
  avatar,
  username,
  time,
  content,
  likes,
  comments,
  shares,
}: PostProps) {
  const [likeCount, setLikeCount] = useState(likes);
  const [commentCount, setCommentCount] = useState(comments);
  const [shareCount, setShareCount] = useState(shares);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
  };

  const handleComment = () => {
    setCommentCount((prev) => prev + 1);
    alert("💬 Comentaste este post (simulado)");
  };

  const handleShare = () => {
    setShareCount((prev) => prev + 1);
    alert("🔁 Compartido (simulado)");
  };

  return (
    <article className="bg-sky-50 border border-sky-200 rounded-xl shadow-sm p-4">
      <div className="flex items-center mb-2">
        <Image
          src={avatar}
          alt={`${username} avatar`}
          width={36}
          height={36}
          className="rounded-full mr-2"
        />
        <div>
          <p className="font-semibold text-sm">{username}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>

      <p className="text-sm text-gray-800">{content}</p>

      <div className="flex justify-around text-gray-700 text-sm mt-3">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 transition ${
            liked ? "text-sky-600" : "hover:text-sky-500"
          }`}
        >
          {liked ? "💙" : "🤍"} {likeCount}
        </button>

        <button
          onClick={handleComment}
          className="flex items-center gap-1 hover:text-sky-500 transition"
        >
          💬 {commentCount}
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-1 hover:text-sky-500 transition"
        >
          🔁 {shareCount}
        </button>
      </div>
    </article>
  );
}
