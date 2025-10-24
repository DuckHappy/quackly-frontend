import React from 'react';
import styles from '@/styles/animations.module.css';
import LikeButton from '@/components/ui/LikeButton';
import CommentButton from '@/components/ui/CommentButton';
import ShareButton from '@/components/ui/ShareButton';
export default function PostCard({ post }){
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <div className={styles.avatar} />
        <div className={styles.meta}>
          <strong>{post.author.name}</strong>
          <span className={styles.when}>{new Date(post.createdAt).toLocaleString()}</span>
        </div>
      </header>
      <p>{post.text}</p>
      <div style={{display:'flex', gap:12, marginTop:8}}>
        <LikeButton initial={post.likes} />
        <CommentButton initial={post.comments} onOpen={()=>{}} />
        <ShareButton />
      </div>
    </article>
  );
}
