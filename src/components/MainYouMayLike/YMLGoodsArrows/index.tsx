import zxc from './styles.module.scss'
import YMLCardStyles  from '../YMLCard/styles.module.scss';
import { scrollByOneCard } from '../OtherLogic/scrollByOne';
import { useScrollAvailability } from '../OtherLogic/useScrollAviability';

type Props = {
    wrapperRef: React.RefObject<HTMLDivElement | null>;
}

export function YMLGoodsArrows({wrapperRef}: Props) {
    // const {canScrollLeft, canScrollRight} = useScrollAvailability(wrapperRef);
    return (
        <div className={zxc.ymlGoodsArrows}>
            
            <div className={zxc.toLeft}>
                {/* <div className={zxc.fadeLeft}></div> */}
                <div className={zxc.leftArrow} onClick={()=>scrollByOneCard(wrapperRef.current, `.${YMLCardStyles.card}`, 'left')}>
                    <img src={'./svg/leftArrowSVG.svg'} alt="LEFT ARROW SVG" />
                </div>
            </div>

            <div className={zxc.toRight}>
                {/* <div className={zxc.fadeRight}></div> */}
                <div className={zxc.rightArrow} onClick={()=>scrollByOneCard(wrapperRef.current, `.${YMLCardStyles.card}`, 'right')}>
                    <img src={'./svg/rightArrowSVG.svg'} alt="RIGHT ARROW SVG" />
                </div>
            </div>
            
        </div>
    )
}