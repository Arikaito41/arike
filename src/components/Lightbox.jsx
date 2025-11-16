import React, { useEffect } from 'react';

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="lightbox open" role="dialog" aria-modal="true">
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>×</button>
      <div className="lightbox-content">
        {item.type === 'image' && (
          <img src={item.src} alt="Selected" style={{ maxWidth: '90vw', maxHeight: '85vh', display: 'block' }} />
        )}
      </div>
    </div>
  );
}