import Image from "next/image";

export default async function ProfilePage() {
  // Ejemplo: datos simulados (en SSR podrías obtenerlos desde una API o base de datos)
  const user = {
    username: "DuckHappy#1234",
    online: true,
    friends: 7,
    lagoons: 3,
    quacks: 42,
    followers: 58,
    bio: "Cuéntanos un poco sobre ti...",
    avatar: "/duck-avatar.png", // imagen local o URL remota
  };

  const posts = [
    { id: 1, content: "¡Hola desde mi laguna!", likes: 5, comments: 3, shares: 2 },
    { id: 2, content: "Día perfecto para nadar 🦆", likes: 5, comments: 3, shares: 2 },
  ];

  return (
    <main className="flex flex-col items-center bg-sky-100 min-h-screen py-8">
      {/* Perfil Header */}
      <section className="bg-sky-200 rounded-2xl shadow-md p-6 w-[360px] text-center">
        <div className="flex flex-col items-center">
          <Image
            src={user.avatar}
            alt="avatar"
            width={80}
            height={80}
            className="rounded-full border-4 border-white shadow"
          />
          <h2 className="text-lg font-semibold mt-2">{user.username}</h2>
          <p className="text-sm text-green-600">
            {user.online ? "🟢 En línea" : "⚫ Desconectado"}
          </p>
        </div>

        <div className="flex justify-around mt-4 text-sm">
          <div>
            <p className="font-semibold">{user.friends}</p>
            <p>Amigos</p>
          </div>
          <div>
            <p className="font-semibold">{user.lagoons}</p>
            <p>Lagunas</p>
          </div>
          <div>
            <p className="font-semibold">{user.quacks}</p>
            <p>Quacks</p>
          </div>
          <div>
            <p className="font-semibold">{user.followers}</p>
            <p>Seguidores</p>
          </div>
        </div>

        <p className="text-gray-700 mt-3">{user.bio}</p>
        <button className="mt-2 bg-sky-300 hover:bg-sky-400 text-sm font-medium py-1 px-3 rounded-lg transition">
          Editar biografía
        </button>
      </section>

      {/* Publicaciones */}
      <section className="mt-6 w-[360px] space-y-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-sky-50 border border-sky-200 rounded-xl shadow-sm p-4"
          >
            <div className="flex items-center mb-2">
              <Image
                src={user.avatar}
                alt="duck icon"
                width={36}
                height={36}
                className="rounded-full mr-2"
              />
              <div>
                <p className="font-semibold text-sm">{user.username}</p>
                <p className="text-xs text-gray-500">2h</p>
              </div>
            </div>

            <p className="text-sm text-gray-800">{post.content}</p>

            <div className="flex justify-around text-gray-600 text-sm mt-3">
              <span>🩵 {post.likes}</span>
              <span>💬 {post.comments}</span>
              <span>🔁 {post.shares}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}