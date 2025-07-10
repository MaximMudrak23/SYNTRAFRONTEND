import zxc from './styles.module.scss'
import { SliderBar } from './../SliderBar';

export function SliderIndicator({slides}: {slides: {content: string, txt: string}[]}) {
    return (
        <div className={zxc.sliderIndicator}>
            {slides.length > 1 && slides.map((_, index) => (
                <SliderBar key={index} />
            ))}
        </div>
    )
}