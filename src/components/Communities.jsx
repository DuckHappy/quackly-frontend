
import { Link } from 'react-router-dom'
import { useStore } from '../../store/store.js'

export default function Communities() {
  const communities = useStore(s => s.communities)
  const following = useStore(s => s.user.following)
  const toggleFollow = useStore(s => s.toggleFollow)

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Explora comunidades</h2>
      <div className="grid grid-cols-1 gap-3">
        {communities.map(c => {
          const isFollowing = following.has(c.id)
          return (
            <div key={c.id} className="bg-white rounded-xl p-4 shadow-card flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-quack-sky flex items-center justify-center text-2xl">{c.image}</div>
              <div className="flex-1">
                <Link to={`/communities/${c.id}`} className="font-semibold text-slate-900 hover:underline">{c.name}</Link>
                <p className="text-sm text-slate-600 line-clamp-1">{c.description}</p>
              </div>
              <button
                onClick={() => toggleFollow(c.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold ${isFollowing ? 'bg-slate-200 text-slate-700' : 'bg-quack-turquoise text-white'}`}
              >
                {isFollowing ? 'Siguiendo' : 'Unirme'}
              </button>
            </div>
          )
        })}
      </div>

      <Link to="/communities/new" className="block text-center bg-quack-yellow text-slate-900 py-2 rounded-lg font-semibold">Crear comunidad</Link>
    </div>
  )
}
