import zxc from './styles.module.scss'
import { YMLCard } from '../YMLCard'
const arr = new Array(20).fill(null);

type Props = {
    wrapperRef: React.RefObject<HTMLDivElement|null>;
}

export function YMLGoodsWrapper({wrapperRef}: Props) {
    return (
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
    )
}