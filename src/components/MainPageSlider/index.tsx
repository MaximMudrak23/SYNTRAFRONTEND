import zxc from './styles.module.scss'
import { SliderContent } from './SliderContent';
import { SliderIndicator } from './SliderIndicator';
import { SlideButton } from './SlideButton';
import { manSlides, womanSlides } from '../../other/slidesData';
import { useState,useEffect } from 'react';
const gender = 'man';
const slides = gender === 'man' ? manSlides : womanSlides;

export function MainPageSlider() {
    const [isDurationActivated, setIsDurationActivated] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        if (!isDurationActivated) return;
        const interval = setInterval(()=>{
            setCurrentIndex(cur => (cur + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval);
    }, [slides, isDurationActivated, currentIndex]);

    return (
        <div className={zxc.slider}>
            <SliderContent slides={slides} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <SliderIndicator slides={slides} currentIndex={currentIndex} />
            <SlideButton isDurationActivated={isDurationActivated} setIsDurationActivated={setIsDurationActivated} />
        </div>
    )
}