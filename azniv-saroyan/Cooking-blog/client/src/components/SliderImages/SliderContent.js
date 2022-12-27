import React from 'react'

export default function SliderContent({activeIndex, imageSlider}) {
  return (
    <section>
        {imageSlider.map((slide, index) => (
            <div 
                key = {index} 
                className = {index === activeIndex ? "slides active" : "inactive"}
            >
                <img 
                    className = 'slideImage'
                    src = {slide.urls}
                    alt = ''
                >
                </img>
            </div>
        ))}
    </section>
  )
}
