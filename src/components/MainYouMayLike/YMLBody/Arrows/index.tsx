import zxc from './styles.module.scss'

type Props = {
    scrollFunc: (dir: 'left' | 'right') => void;
}

export function Arrows({scrollFunc}: Props) {
    return (
        <div className={zxc.arrows}>
            <div className={zxc.lArrow} onClick={()=>scrollFunc('left')}>
                <img src="./svg/leftArrowSVG.svg" alt="LEFT ARROW" />
            </div>
            <div className={zxc.rArrow} onClick={()=>scrollFunc('right')}>
                <img src="./svg/rightArrowSVG.svg" alt="RIGHT ARROW" />
            </div>
        </div>
    )
}