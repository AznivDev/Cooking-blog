import React, { useEffect, useState } from 'react'
import SliderContent from './SliderContent'
import imagesSlider from './imagesSlider'
import Dots  from './Dots'
import '../../styles/sliderStyles/slides.scss'

const len = imagesSlider.length - 1

function Slider () {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [activeIndex])

  return (
    <div className = 'sliderContiner'>
        <SliderContent 
            className = "sliderContent"
            activeIndex = {activeIndex}
            imageSlider = {imagesSlider}
        />
        <Dots
            className = "dotsContent"
            activeIndex = {activeIndex} 
            onclick = {(activeIndex) => setActiveIndex(activeIndex)}
        />
    </div>
  )
}

export default Slider;
