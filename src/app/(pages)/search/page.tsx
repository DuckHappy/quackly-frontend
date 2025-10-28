'use client';
import { useMemo, useState } from 'react';
import styles from '@/app/(pages)/search/components/Search.module.css';

const POSTS = [
    { id: 'p1', author: '@ducklover', community: 'Quack Devs', text: 'Mejoré el rendimiento del feed un 20% 🦆', likes: 128 },
    { id: 'p2', author: '@geister', community: 'UI Lab', text: 'Probando el FAB amarillo con animaciones', likes: 76 },
    { id: 'p3', author: '@nico', community: 'Comunidad Frontend', text: 'Tip: usa rutas con "@" para imports limpios', likes: 54 },
];

const USERS = [
    { id: 'u1', handle: '@benja', name: 'Benjamín', bio: 'Diseño + Frontend' },
    { id: 'u2', handle: '@mauro', name: 'Mauro', bio: 'Arquitecto UX' },
    { id: 'u3', handle: '@sabrina', name: 'Sabrina', bio: 'Product & QA' },
];

const COMMUNITIES = [
    { id: 'c1', slug: 'quack-devs', name: 'Quack Devs', members: 1245 },
    { id: 'c2', slug: 'ui-lab', name: 'UI Lab', members: 830 },
    { id: 'c3', slug: 'frontend-ar', name: 'Comunidad Frontend', members: 2310 },
];

export default function SearchPage() {
    const [q, setQ] = useState('');
    const norm = (s : any) => s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

    const filtered = useMemo(() => {
        if (!q) return { posts: POSTS, users: USERS, communities: COMMUNITIES };
        const nq = norm(q);
        return {
            posts: POSTS.filter(p => [p.text, p.author, p.community].some(x => norm(String(x)).includes(nq))),
            users: USERS.filter(u => [u.handle, u.name, u.bio].some(x => norm(String(x)).includes(nq))),
            communities: COMMUNITIES.filter(c => [c.slug, c.name].some(x => norm(String(x)).includes(nq))),
        };
    }, [q]);

    return (
        <main className={styles.wrapper}>
            <div className={styles.searchBar}>
                <input
                    className={styles.input}
                    placeholder="Buscar posts, usuarios y comunidades…"
                    value={q}
                    onChange={e => setQ(e.target.value)}
                    autoFocus
                />
            </div>

            <section>
                <h3 className={styles.sectionTitle}>Posts</h3>
                <div className={styles.grid}>
                    {filtered.posts.length ? filtered.posts.map(p => (
                        <article key={p.id} className={styles.card}>
                            <div className={styles.row}>
                                <div className={styles.avatar} />
                                <div className={styles.meta}>
                                    <div className={styles.title}>{p.author} <span className={styles.badge}>{p.community}</span></div>
                                    <div className={styles.subtitle}>{p.text}</div>
                                </div>
                            </div>
                        </article>
                    )) : (<div className={styles.empty}>Sin resultados en Posts</div>)}
                </div>
            </section>

            <section>
                <h3 className={styles.sectionTitle}>Usuarios</h3>
                <div className={styles.grid}>
                    {filtered.users.length ? filtered.users.map(u => (
                        <div key={u.id} className={styles.card}>
                            <div className={styles.row}>
                                <div className={styles.avatar} />
                                <div className={styles.meta}>
                                    <div className={styles.title}>{u.name} <span className={styles.subtitle}>{u.handle}</span></div>
                                    <div className={styles.subtitle}>{u.bio}</div>
                                </div>
                            </div>
                        </div>
                    )) : (<div className={styles.empty}>Sin resultados en Usuarios</div>)}
                </div>
            </section>

            <section>
                <h3 className={styles.sectionTitle}>Comunidades</h3>
                <div className={styles.grid}>
                    {filtered.communities.length ? filtered.communities.map(c => (
                        <div key={c.id} className={styles.card}>
                            <div className={styles.row}>
                                <div className={styles.avatar} />
                                <div className={styles.meta}>
                                    <div className={styles.title}>{c.name}</div>
                                    <div className={styles.subtitle}>{c.members.toLocaleString()} miembros</div>
                                </div>
                            </div>
                        </div>
                    )) : (<div className={styles.empty}>Sin resultados en Comunidades</div>)}
                </div>
            </section>
        </main>
    );
}