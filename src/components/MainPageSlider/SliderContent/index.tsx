import zxc from './styles.module.scss'
import { Slide } from '../Slide'
import { useSliderSwipe } from '../OtherLogic/useSliderSwipe';

export function SliderContent({
    slides, currentIndex, setCurrentIndex
}: {
    slides: {url: string, txt: string}[],
    currentIndex: number,
    setCurrentIndex: (index: number) => void
}) {
    const {start,move,end,shiftX,isSwiping} = useSliderSwipe({
        slidesCount: slides.length,
        currentIndex,
        onSwipe: (index) => {
            if (index < 0 || index >= slides.length) return;
            setCurrentIndex(index);
        }
    })
    return (
        <div
        className={zxc.sliderContent}
        onMouseDown={(e) => start(e.clientX)}
        onMouseMove={(e) => move(e.clientX)}
        onMouseUp={(e) => end(e.clientX)}
        onTouchStart={(e) => start(e.touches[0].clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        onTouchEnd={(e) => end(e.changedTouches[0].clientX)}
        >
            <div className={zxc.sliderContentWrapper} style={{ transform: `translateX(calc(-${currentIndex * 100}% + ${shiftX}px))`, transition: isSwiping.current ? 'none' : 'transform 0.3s ease'}}>
                {slides.map((slide, index) => (
                    <Slide key={index} slideTxt={slide.txt} slideUrl={slide.url} />
                ))}
            </div>
        </div>
    )
}