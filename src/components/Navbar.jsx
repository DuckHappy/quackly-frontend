'use client';
import React from 'react';
const Icon = ({d}) => (<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style={{transition:'transform .12s ease'}}><path d={d}/></svg>);
const items = [
  { key:'home', icon:'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
  { key:'search', icon:'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21l1-1-5.5-5z' },
  { key:'community', icon:'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05A5.8 5.8 0 0 1 18 16.5V19h6v-2.5c0-1.86-3.67-3-6-3z' },
  { key:'profile', icon:'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { key:'settings', icon:'M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.03 7.03 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 13.9 1h-3.8a.5.5 0 0 0-.5.42l-.36 2.54c-.58.23-1.12.53-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L.7 7.02a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L.82 12.7a.5.5 0 0 0-.12.64l1.92 3.32c.14.24.43.34.69.22l2.39-.96c.51.41 1.05.71 1.63.94l.36 2.54c.05.26.26.42.5.42h3.8c.24 0 .45-.16.5-.42l.36-2.54c.58-.23 1.12-.53 1.63-.94l2.39.96c.26.12.55.02.69-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z' }
];
export default function Navbar(){
  return (
    <aside style={{position:'fixed', left:16, top:16, bottom:16, width:68, background:'#fff', border:'1px solid #e6e6e6', borderRadius:16, boxShadow:'0 10px 28px rgba(0,0,0,.08)', display:'flex', flexDirection:'column', alignItems:'center', padding:'10px 8px', gap:12}}>
      {items.map(it => (
        <button key={it.key} aria-label={it.key} style={{border:'none', background:'transparent', cursor:'pointer', padding:10}}
          onMouseEnter={(e)=>{ e.currentTarget.firstChild.style.transform='scale(1.1)'; e.currentTarget.firstChild.style.color='#1976d2'; }}
          onMouseLeave={(e)=>{ e.currentTarget.firstChild.style.transform='scale(1.0)'; e.currentTarget.firstChild.style.color='inherit'; }}>
          <Icon d={it.icon} />
        </button>
      ))}
    </aside>
  );
}
