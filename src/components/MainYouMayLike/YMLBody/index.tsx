import zxc from './styles.module.scss'
import { useRef, useEffect, useState} from 'react';
import { scrollFunc, handleResize, isVisibleArrows } from '../OtherLogic/scroll'
import { Arrows } from './Arrows';
import { Card } from './Card'
const cardGenerator = new Array(20).fill('');

export function YMLBody() {
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (dir: 'left' | 'right') => {
        scrollFunc(scrollRef.current, dir);
        isVisibleArrows(scrollRef.current, setShowLeft, setShowRight);
    };

    useEffect(() => {
        const resizeHandler = () => handleResize(scrollRef.current);
        isVisibleArrows(scrollRef.current, setShowLeft, setShowRight);
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <div className={zxc.ymlBody}>
            <Arrows scrollFunc={handleScroll} showLeft={showLeft} showRight={showRight} />

            <div className={zxc.cardWrapper} ref={scrollRef}>
                {cardGenerator.map((_, i) => ( <Card key={i} imgIndex={i%4} /> ))}
            </div>
        </div>
    )
}