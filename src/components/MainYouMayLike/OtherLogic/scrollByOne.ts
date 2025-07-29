let isScrolling: boolean = false;

export function scrollByOneCard(
  wrapper: HTMLDivElement | null,
  cardSelector: string,
  direction: 'left' | 'right'
) {
  if (!wrapper || isScrolling) return;
  isScrolling = true;
  const card = wrapper.querySelector(cardSelector);

  if (!card) {
    isScrolling = false;
    return;
  }
  
  const wrapperStyles = getComputedStyle(wrapper);
  const gap = parseInt(wrapperStyles.gap);
  const cardWidth = (card as HTMLElement).offsetWidth;
  const scrollAmount = cardWidth+gap;

  wrapper.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  });

  setTimeout(() => {
    isScrolling = false;
  }, 400);
};

// import { useEffect, useState } from 'react';

// export function useScrollAvailability(ref: React.RefObject<HTMLDivElement | null>) {
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(false);

//   const checkScroll = () => {
//     const el = ref.current;
//     if (!el) return;
//     setCanScrollLeft(el.scrollLeft > 0);
//     setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
//   };

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     checkScroll(); // initial

//     // === Добавлено: логика сохранения scroll-позиции при ресайзе ===
//     let scrollRatio = 0;

//     const handleResizeStart = () => {
//       if (!el) return;
//       scrollRatio = el.scrollLeft / (el.scrollWidth - el.clientWidth || 1); // защита от деления на 0
//     };

//     const handleResize = () => {
//       if (!el) return;
//       el.scrollLeft = scrollRatio * (el.scrollWidth - el.clientWidth);
//       checkScroll(); // обновляем флаги
//     };

//     // слушаем ресайз
//     window.addEventListener('resize', handleResizeStart);
//     window.addEventListener('resize', handleResize);

//     // слушаем скролл
//     el.addEventListener('scroll', checkScroll);

//     return () => {
//       window.removeEventListener('resize', handleResizeStart);
//       window.removeEventListener('resize', handleResize);
//       el.removeEventListener('scroll', checkScroll);
//     };
//   }, [ref]);

//   return { canScrollLeft, canScrollRight, checkScroll };
// }
