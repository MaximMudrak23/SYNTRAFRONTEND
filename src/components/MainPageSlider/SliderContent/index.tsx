import zxc from './styles.module.scss'
import { Slide } from '../Slide'

export function SliderContent({
    slides, currentIndex
}: {
    slides: {url: string, txt: string}[],
    currentIndex: number
}) {
    return (
        <div className={zxc.sliderContent}>
            <div className={zxc.sliderContentWrapper} style={{ transform: `translateX(calc(-${currentIndex * 100}%`}}>
                {slides.map((slide, index) => (
                    <Slide key={index} slideTxt={slide.txt} slideUrl={slide.url} />
                ))}
            </div>
        </div>
    )
}