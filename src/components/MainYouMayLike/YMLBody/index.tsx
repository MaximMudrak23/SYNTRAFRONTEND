import zxc from './styles.module.scss'
import { useRef, useEffect } from 'react';
import { scrollFunc, handleResize } from '../OtherLogic/scroll'
import { Arrows } from './Arrows';
import { Card } from './Card'
const cardGenerator = new Array(20).fill('');

export function YMLBody() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const handleScroll = (dir: 'left' | 'right') => {
        scrollFunc(scrollRef.current, dir);
    };

    useEffect(() => {
        const resizeHandler = () => handleResize(scrollRef.current)
        window.addEventListener('resize', resizeHandler)
        return () => window.removeEventListener('resize', resizeHandler)
    }, []);

    return (
        <div className={zxc.ymlBody}>
            <Arrows scrollFunc={handleScroll} />

            <div className={zxc.cardWrapper} ref={scrollRef}>
                {cardGenerator.map((_, i) => ( <Card key={i} imgIndex={i%4} /> ))}
            </div>
        </div>
    )
}