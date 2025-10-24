'use client';
import React, { useState } from 'react';
import styles from '@/styles/animations.module.css';
import { posts as seed } from '@/data/seedPosts';
import PostCard from '@/components/PostCard';
import FAB from '@/components/FAB';
import PostModal from '@/components/PostModal';
export default function Feed(){
  const [items, setItems] = useState(seed);
  const [open, setOpen] = useState(false);
  return (
    <div className={`bgSoft ${styles.feedWrap}`}>
      {items.map(p => <PostCard key={p.id} post={p} />)}
      <FAB onClick={()=>setOpen(true)} />
      <PostModal open={open} onClose={()=>setOpen(false)} onPost={({text})=>{
        setItems(curr => [{
          id: `local-${Date.now()}`,
          author: { id:'me', name:'Vos', handle:'@you' },
          text,
          createdAt: new Date().toISOString(),
          likes:0,
          comments:0
        }, ...curr]);
      }} />
    </div>
  );
}
