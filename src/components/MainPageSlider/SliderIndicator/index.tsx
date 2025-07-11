import zxc from './styles.module.scss'
import { SliderBar } from './../SliderBar';

export function SliderIndicator({
    slides, currentIndex
}: {
    slides: unknown[],
    currentIndex: number
}) {
    return (
        <div className={zxc.sliderIndicator}>
            {slides.length > 1 && slides.map((_, index) => (
                <SliderBar
                    key={index}
                    isActive={index === currentIndex}
                />
            ))}
        </div>
    )
}