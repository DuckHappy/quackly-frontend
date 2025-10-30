export const users = [
  { id: 'u1', name: 'María S.', handle: '@marias' },
  { id: 'u2', name: 'Tomás R.', handle: '@tomi.r' },
  { id: 'u3', name: 'Julieta B.', handle: '@juli.b' },
  { id: 'u4', name: 'Nicolás A.', handle: '@nicoar' },
];
export const posts = [
  { id: 'p1', author: users[0], text: 'Probando el feed. Cerré PRs y quedó todo prolijo.', createdAt: new Date().toISOString(), likes: 3, comments: 1 },
  { id: 'p2', author: users[1], text: 'Vista de comunidad con filtros y búsqueda lista.', createdAt: new Date().toISOString(), likes: 5, comments: 2 },
  { id: 'p3', author: users[2], text: 'Mañana vemos PWA install banner.', createdAt: new Date().toISOString(), likes: 2, comments: 0 },
];