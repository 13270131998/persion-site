import { useEffect, useState } from 'react';

export interface GalleryItem {
  src: string;
  alt: string;
  group: string;
  width: number;
  height: number;
}

interface Props {
  images: GalleryItem[];
  groups: string[];
}

export default function GalleryLightbox({ images, groups }: Props) {
  const [activeGroup, setActiveGroup] = useState('全部');
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const filteredImages = activeGroup === '全部'
    ? images
    : images.filter((image) => image.group === activeGroup);
  const selectedIndex = selected
    ? filteredImages.findIndex((image) => image.src === selected.src)
    : -1;

  const close = () => setSelected(null);
  const move = (direction: number) => {
    if (selectedIndex < 0 || filteredImages.length === 0) return;
    const nextIndex = (selectedIndex + direction + filteredImages.length) % filteredImages.length;
    setSelected(filteredImages[nextIndex]);
  };

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, selected, filteredImages.length]);

  return (
    <div className="gallery-browser">
      <div className="gallery-filters" aria-label="相册分类">
        {['全部', ...groups].map((group) => (
          <button
            key={group}
            type="button"
            className={group === activeGroup ? 'is-active' : ''}
            aria-pressed={group === activeGroup}
            onClick={() => {
              setActiveGroup(group);
              setSelected(null);
            }}
          >
            <span>{String(group === '全部' ? images.length : images.filter((image) => image.group === group).length).padStart(2, '0')}</span>
            {group}
          </button>
        ))}
      </div>

      <div className="gallery-masonry" aria-live="polite">
        {filteredImages.map((image, index) => (
          <button
            className="gallery-tile"
            type="button"
            key={image.src}
            onClick={() => setSelected(image)}
            aria-label={`放大查看：${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
            <span><i>{String(index + 1).padStart(2, '0')}</i>{image.group}</span>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="图片查看器" onClick={close}>
          <button className="lightbox__close" type="button" onClick={close} aria-label="关闭图片">×</button>
          <button className="lightbox__previous" type="button" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="上一张">←</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} />
            <figcaption>
              <span>{selected.group}</span>
              {selected.alt}
              <i>{selectedIndex + 1} / {filteredImages.length}</i>
            </figcaption>
          </figure>
          <button className="lightbox__next" type="button" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="下一张">→</button>
        </div>
      ) : null}
    </div>
  );
}
