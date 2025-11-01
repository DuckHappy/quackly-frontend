'use client';
import React from 'react';
const Icon = ({ d }) => (<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style={{ transition: 'transform .12s ease' }}><path d={d} /></svg>);
const items = [
  { url: '/home', title: 'Inicio', key: 'home', icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
  { url: '/search', title: 'Buscar', key: 'search', icon: 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21l1-1-5.5-5z' },
  { url: '/community', title: 'Comunidades', key: 'community', icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05A5.8 5.8 0 0 1 18 16.5V19h6v-2.5c0-1.86-3.67-3-6-3z' },
  { url: '/profile', title: 'Perfil', key: 'profile', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
];
export default function Navbar() {
  return (
    <aside style={{ left: 16, top: 16, bottom: 16, width: 68, background: 'rgba(255, 255, 255, 0.8)', border: '1px solid oklch(0.9971 0 145)', borderRadius: 16, boxShadow: '0 10px 28px rgba(0,0,0,.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 8px', gap: 12, position:"fixed", zIndex: 50, }}>
      {items.map(it => (
        <a href={it.url} key={it.key}>
          <button key={it.key} title={it.title} aria-label={it.key} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 10 }}
            onMouseEnter={(e) => { e.currentTarget.firstChild.style.transform = 'scale(1.1)'; e.currentTarget.firstChild.style.color = 'oklch(0.5645 0.1633 253.27)'; }}
            onMouseLeave={(e) => { e.currentTarget.firstChild.style.transform = 'scale(1.0)'; e.currentTarget.firstChild.style.color = 'inherit'; }}>
            <Icon d={it.icon} />
          </button>
        </a>
      ))}
    </aside>
  );
}
