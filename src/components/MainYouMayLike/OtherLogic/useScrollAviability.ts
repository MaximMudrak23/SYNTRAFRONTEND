import { useEffect, useState } from 'react';

export function useScrollAvailability(ref: React.RefObject<HTMLDivElement|null>) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    checkScroll(); // init

    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll); // на случай ресайза

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [ref]);

  return { canScrollLeft, canScrollRight, checkScroll };
}
