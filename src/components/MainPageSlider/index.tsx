import zxc from './styles.module.scss'
import { SliderIndicator } from './SliderIndicator';
import { SliderContent } from './SliderContent';
import { manSlides, womanSlides } from '../../other/slidesData';
import { useState,useEffect } from 'react';
const gender = 'man';

export function MainPageSlider() {
    const slides = gender === 'man' ? manSlides : womanSlides;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex(cur => (cur + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval);
    }, [slides]);
    return (
        <div className={zxc.slider}>
            <SliderContent slides={slides} />
            <SliderIndicator slides={slides} />
        </div>
    )
}