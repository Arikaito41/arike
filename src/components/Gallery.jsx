import React, { useEffect, useRef } from 'react';

export default function Gallery({ images = [], onOpen }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '50px' });

    gridRef.current?.querySelectorAll('.card').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="gallery-grid" ref={gridRef}>
      {images.map((name) => {
        const src = `/img/${name}`;
        return (
          <button className="card" key={name} onClick={() => onOpen({ type: 'image', src })} aria-label={`Open ${name}`}>
            <img loading="lazy" src={src} alt={name.replace(/_/g,' ')} />
          </button>
        );
      })}
    </div>
  );
}