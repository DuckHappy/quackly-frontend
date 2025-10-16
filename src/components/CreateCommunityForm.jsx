
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store/store.js'
import { useState } from 'react'

export default function CreateCommunityForm() {
  const createCommunity = useStore(s => s.createCommunity)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('🪿')
  const nav = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    createCommunity({ name, description, image })
    nav('/communities')
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded-xl shadow-card space-y-3">
      <h2 className="text-xl font-bold text-slate-800">Nueva comunidad</h2>
      <div>
        <label className="text-sm text-slate-600">Nombre</label>
        <input className="w-full border rounded-md p-2" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Patos gamers" />
      </div>
      <div>
        <label className="text-sm text-slate-600">Descripción</label>
        <textarea className="w-full border rounded-md p-2" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)} />
      </div>
      <div>
        <label className="text-sm text-slate-600">Emoji</label>
        <input className="w-full border rounded-md p-2" value={image} onChange={(e)=>setImage(e.target.value)} />
      </div>
      <button type="submit" className="bg-quack-turquoise text-white font-semibold px-4 py-2 rounded-lg">Crear</button>
    </form>
  )
}
