
import { useParams, Link } from 'react-router-dom'
import { useStore } from '../../store/store.js'

export default function CommunityDetail() {
  const { id } = useParams()
  const community = useStore(s => s.communities.find(c => c.id === id))
  const posts = useStore(s => s.postsForCommunity(id))
  const toggleFollow = useStore(s => s.toggleFollow)
  const following = useStore(s => s.user.following)

  if (!community) {
    return <div className="text-slate-700">Comunidad no encontrada.</div>
  }

  const isFollowing = following.has(community.id)

  return (
    <div className="space-y-4">
      <header className="bg-white rounded-xl p-4 shadow-card flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-quack-sky flex items-center justify-center text-2xl">{community.image}</div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-slate-900">{community.name}</h2>
          <p className="text-sm text-slate-600">{community.description}</p>
        </div>
        <button
          onClick={() => toggleFollow(community.id)}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold ${isFollowing ? 'bg-slate-200 text-slate-700' : 'bg-quack-turquoise text-white'}`}
        >
          {isFollowing ? 'Siguiendo' : 'Unirme'}
        </button>
      </header>

      <section className="space-y-3">
        {posts.map(p => (
          <article key={p.id} className="bg-white rounded-xl p-4 shadow-card">
            <div className="font-semibold">{p.user}{p.bot && <span className="ml-2 text-xs bg-quack-turquoise/15 text-quack-turquoise px-2 py-0.5 rounded-full">BOT</span>}</div>
            <p className={`mt-2 ${p.bot ? 'italic text-slate-700' : 'text-slate-800'}`}>{p.content}</p>
          </article>
        ))}
        {posts.length === 0 && <div className="text-slate-600">Aún no hay quacks aquí.</div>}
      </section>

      <Link to="/communities" className="text-quack-turquoise hover:underline">← Volver</Link>
    </div>
  )
}
