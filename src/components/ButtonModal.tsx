import React from 'react';
export default function Button({ variant='ghost', className='', ...rest }){
  const base='px-4 py-2 rounded-xl border text-sm';
  const styles = variant==='primary'
    ? 'bg-[var(--yellow)] border-[var(--yellow)] text-[var(--ink)] font-semibold'
    : 'bg-[#f5f5f5] border-[#e0e0e0]';
  return <button className={base+' '+styles+' '+className} {...rest} />;
}