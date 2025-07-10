import zxc from './styles.module.scss'
import { Slide } from '../Slide'

export function SliderContent({slides}: {slides: {content: string, txt: string}[]}) {
    return (
        <div className={zxc.sliderContent}>
            <div className={zxc.sliderContentWrapper}>
                {slides.map((slide, index) => (
                    <Slide key={index} slideTxt={slide.txt} slideContent={slide.content} />
                ))}
            </div>
        </div>
    )
}