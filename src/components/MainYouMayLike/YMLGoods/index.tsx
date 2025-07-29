import zxc from './styles.module.scss'
import { YMLGoodsArrows } from '../YMLGoodsArrows';
import { YMLGoodsWrapper } from '../YMLGoodsWrapper';
import { useRef } from 'react';

export function YMLGoods() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className={zxc.ymlGoods}>
            <YMLGoodsArrows wrapperRef={wrapperRef} />
            <YMLGoodsWrapper wrapperRef={wrapperRef} />
        </div>
    )
}