import zxc from './styles.module.scss'

type Props = {
    scrollFunc: (dir: 'left' | 'right') => void;
    showLeft: boolean;
    showRight: boolean;
}

export function Arrows({scrollFunc, showLeft, showRight}: Props) {
    return (
        <div className={zxc.arrows}>
            {showLeft && <div className={zxc.lArrow} onClick={()=>scrollFunc('left')}>
                <img src="./svg/leftArrowSVG.svg" alt="LEFT ARROW"  draggable={'false'} />
            </div>}
            {showRight && <div className={zxc.rArrow} onClick={()=>scrollFunc('right')}>
                <img src="./svg/rightArrowSVG.svg" alt="RIGHT ARROW" draggable={'false'} />
            </div>}
        </div>
    )
}