"use client";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

type PostProps = {
  postId?: string | number;
  avatar: string;
  username: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  onDelete?: (postId?: string | number) => void;
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
  onDelete,
}: PostProps) {
  const [likeCount, setLikeCount] = useState(likes);
  const [commentCount, setCommentCount] = useState(comments);
  const [shareCount, setShareCount] = useState(shares);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
    toast.success(liked ? "💔 Quitaste tu me gusta" : "💙 Te gustó este post");
  };

  const handleComment = () => {
    setCommentCount((prev) => prev + 1);
    toast.info("💬 Comentaste este post ");
  };

  const handleShare = () => {
    setShareCount((prev) => prev + 1);
    toast("🔁 Post compartido ", { description: "compartiendo..." });
  };

  const handleDelete = () => {
    onDelete?.(postId);
    toast.warning("🗑️ Post eliminado");
  };

  return (
    <article className="relative bg-sky-50 border border-sky-200 rounded-xl shadow-sm p-4">
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition text-sm"
        title="Eliminar post"
      >
        ✖
      </button>

      <div className="flex items-center mb-2">
        <Image
          src={avatar || "/quackly-logov1.png"}
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
          className={`flex items-center gap-1 transition ${liked ? "text-sky-600" : "hover:text-sky-500"
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
