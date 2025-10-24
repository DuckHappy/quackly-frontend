'use client';
import React, { useState } from 'react';
import styles from '@/styles/animations.module.css';
import Button from '@/components/Button';

export default function PostModal({ open, onClose, onPost }) {
  const [text, setText] = useState('');
  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    onPost({ text });
    setText('');
    onClose();
  };

  return (
    <div className={styles.modalBackdrop} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <h3>What’s quacking?</h3>
        <form onSubmit={submit}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribí tu publicación..."
            rows={5}
            required
          />
          <div className={styles.modalActions}>
            <Button type="button" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              type="submit"
              style={{
                backgroundColor: 'var(--yellow)',
                borderColor: 'var(--yellow)',
                color: '#111',
                fontWeight: 600,
              }}
            >
              QUACK
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

