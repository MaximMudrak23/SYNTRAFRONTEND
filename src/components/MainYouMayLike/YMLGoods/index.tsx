import zxc from './styles.module.scss'
import { YMLCard } from '../YMLCard'
import { YMLGoodsArrows } from '../YMLGoodsArrows';
import { useRef } from 'react';
const arr = new Array(20).fill(null);

export function YMLGoods() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className={zxc.ymlGoods}>
            <YMLGoodsArrows wrapperRef={wrapperRef} />
            
            <div className={zxc.ymlGoodsWrapper} ref={wrapperRef}>
                {
                    arr.map((_, index) => (
                        <YMLCard
                            key={index}
                            isLocked={false}
                        />
                    ))
                }
            </div>
        </div>
    )
}