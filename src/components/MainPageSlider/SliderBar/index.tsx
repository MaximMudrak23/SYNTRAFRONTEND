import zxc from './styles.module.scss'
// import { allSlides, manSlides, womanSlides } from '../../other/slidesData';

export function SliderBar() {
    return (
        <div className={zxc.bar}>
            <div className={zxc.filter}></div>
        </div>
    )
}