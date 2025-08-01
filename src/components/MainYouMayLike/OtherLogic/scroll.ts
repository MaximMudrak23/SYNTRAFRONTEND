/**
 * Скролим на ширину одной карточки + gap
 * @param container - контейнер, в котором карточки (ref.current)
 * @param direction - в какую сторону скролим (left | right)
 */

// export function scrollFunc(
//     container: HTMLDivElement | null,
//     direction: 'left' | 'right',
// ): void {
//     if (!container) return;
//     const firstCard = container.querySelector(':scope > *') as HTMLDivElement;
//     if (!firstCard) return;
    
//     const cardWidth = firstCard.offsetWidth;
//     const cardStyles = window.getComputedStyle(container);
//     const gap = parseInt(cardStyles.gap ? cardStyles.gap : '0');
    
//     const scrollAmount = cardWidth + gap;

//     container.scrollBy({
//         left: direction === 'right' ? scrollAmount : -scrollAmount,
//         behavior: 'smooth',
//     })
// }

let currentIndex = 0;

export function scrollFunc(
  container: HTMLDivElement | null,
  direction: 'left' | 'right'
): void {
  if (!container) return;

  const firstCard = container.querySelector(':scope > *') as HTMLDivElement;
  if (!firstCard) return;

  const cardWidth = firstCard.offsetWidth;
  const gap = parseInt(getComputedStyle(container).gap || '0');
  const scrollAmount = cardWidth + gap;

  const maxIndex = Math.ceil((container.scrollWidth - container.clientWidth) / scrollAmount);

  if (direction === 'right') {
    currentIndex = Math.min(currentIndex + 1, maxIndex);
  } else {
    currentIndex = Math.max(0, currentIndex - 1);
  }

  container.scrollTo({
    left: currentIndex * scrollAmount,
    behavior: 'smooth',
  });
}

export function handleResize(container: HTMLDivElement | null) {
  if (!container) return;

  const firstCard = container.querySelector(':scope > *') as HTMLDivElement;
  if (!firstCard) return;

  const gap = parseInt(getComputedStyle(container).gap || '0');
  const fullCardWidth = firstCard.offsetWidth + gap;

  container.scrollTo({
    left: currentIndex * fullCardWidth,
  });
}