import { useRef, useState, useEffect } from "react";

export function useSliderSwipe({
    slidesCount,
    currentIndex,
    onSwipe
}: {
    slidesCount: number,
    currentIndex: number,
    onSwipe: (index: number) => void
}) {
    const startX = useRef<null|number>(null);
    const isDragging = useRef(false);
    const isSwiping = useRef(false);
    const [shiftX, setShiftX] = useState(0);

    const start = (x:number) => {
        startX.current = x;
        isDragging.current = true;
        isSwiping.current = true;
    };
    const move = (x:number) => {
        if (!isDragging.current || startX.current === null) return;

        let dx = x - startX.current; // на скільки я подвінув
        const isFirst = currentIndex === 0;
        const isLast = currentIndex === slidesCount-1;

        if ((isFirst && dx > 0) || (isLast && dx < 0)) {
            dx *= 0.3;
            if (Math.abs(dx) > 100) {
                dx = 100 * Math.sign(dx);
            }
        }

        setShiftX(dx);
    };
    const end = (x:number) => {
        if (!isDragging.current || startX.current === null) return;
        const dx = x - startX.current;
        if (dx > 50) {
            onSwipe(currentIndex - 1);
        } else if (dx < -50) {
            onSwipe(currentIndex + 1);
        }
        startX.current = null;
        isDragging.current = false;
        isSwiping.current = false;
        setShiftX(0);
    };

    useEffect(() => {
        const handleMouseUp = (e: MouseEvent) => {
        if (isDragging.current) end(e.clientX);
        };
        const handleTouchEnd = (e: TouchEvent) => {
        if (isDragging.current && e.changedTouches.length > 0) {
            end(e.changedTouches[0].clientX);
        }
        };
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchend', handleTouchEnd);
        return () => {
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [end]);

    return {start,move,end,shiftX,isSwiping};
}