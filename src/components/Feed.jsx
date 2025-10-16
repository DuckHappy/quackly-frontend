
import { useState } from 'react'
import { useStore } from '../../store/store.js'
import { Link } from 'react-router-dom'
import { HandThumbUpIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";


function PostCard({post, onLike}) {
  return (
    <article className="bg-white rounded-xl shadow-card p-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-quack-sky flex items-center justify-center">🦆</div>
          <div className="font-semibold text-slate-800">{post.user}{post.bot && <span className="ml-2 text-xs bg-quack-turquoise/15 text-quack-turquoise px-2 py-0.5 rounded-full">BOT</span>}</div>
          <span className="text-xs text-slate-500 ml-2">· ahora</span>
        </div>
        <span className="text-slate-400">⋯</span>
      </header>
      <p className={`mt-3 ${post.bot ? 'italic text-slate-700' : 'text-slate-800'}`}>{post.content}</p>
      <footer className="mt-4 flex items-center gap-6 text-slate-500 text-sm">
  <button
    onClick={() => onLike(post.id)}
    className="flex items-center gap-1 cursor-pointer hover:text-yellow-500 transition"
  >
    <HandThumbUpIcon className="h-5 w-5" /> {post.likes || 0}
  </button>

  <span className="flex items-center gap-1 cursor-pointer hover:text-sky-500 transition">
    <ChatBubbleOvalLeftIcon className="h-5 w-5" /> {post.comments || 0}
  </span>
</footer>
    </article>
  )
}

export default function Feed() {
  const posts = useStore(s => s.postsForFollowing())
  const addPost = useStore(s => s.addPost)
  const likePost = useStore(s => s.likePost)
  const following = useStore(s => Array.from(s.user.following))
  const [content, setContent] = useState('')
  const [communityId, setCommunityId] = useState(following[0] || '')

  const submit = (e) => {
    e.preventDefault()
    if (!content.trim() || !communityId) return
    addPost({ content, communityId })
    setContent('')
  }

  return (
    <div className="space-y-4">
      <form onSubmit={submit} className="bg-quack-sky/60 p-4 rounded-xl">
        <textarea
          className="w-full rounded-lg p-3 outline-none border border-slate-200"
          placeholder="What's quacking?"
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          rows={3}
        />
        <div className="mt-2 flex items-center gap-2">
          <select value={communityId} onChange={(e)=>setCommunityId(e.target.value)} className="border rounded-md px-2 py-1">
            {following.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button type="submit" className="ml-auto bg-quack-yellow text-slate-900 font-semibold px-4 py-2 rounded-lg">QUACK</button>
        </div>
      </form>

      {posts.length === 0 && (
        <div className="text-center text-slate-600">
          Tu feed está vacío. Sigue comunidades para ver posts.
        </div>
      )}

      <div className="space-y-3">
        {posts.map(p => <PostCard key={p.id} post={p} onLike={likePost} />)}
      </div>
    </div>
  )
}
