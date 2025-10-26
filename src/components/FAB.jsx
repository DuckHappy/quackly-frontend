'use client';
import React from 'react';
import styles from '../app/animations.module.css';
export default function FAB({ onClick }){
  return (
    <button className={styles.fab} aria-label="Crear publicación" onClick={onClick}>
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>
    </button>
  );
}
