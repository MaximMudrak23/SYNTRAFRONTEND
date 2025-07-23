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
  const scrollAmount = (card as HTMLElement).offsetWidth+gap;

  wrapper.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  });

  setTimeout(() => {
    isScrolling = false;
  }, 400);
};