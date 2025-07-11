import zxc from './styles.module.scss'
import { SliderIndicator } from './SliderIndicator';
import { SliderContent } from './SliderContent';
import { manSlides, womanSlides } from '../../other/slidesData';
import { useState,useEffect } from 'react';
const gender = 'man';
const duration: number = 5000;

export function MainPageSlider() {
    const slides = gender === 'man' ? manSlides : womanSlides;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        if (duration === 0) return;
        const interval = setInterval(()=>{
            setCurrentIndex(cur => (cur + 1) % slides.length)
        }, duration)
        return () => clearInterval(interval);
    }, [slides]);

    return (
        <div className={zxc.slider}>
            <SliderContent slides={slides} currentIndex={currentIndex} />
            <SliderIndicator slides={slides} currentIndex={currentIndex} />
        </div>
    )
}