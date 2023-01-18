import React from 'react'
import imagesSlider from './imagesSlider.js'
import '../../styles/sliderStyles/slides.scss'

function Dots({ activeIndex, onclick }) {
  return (
    <div className="allDots">
      {imagesSlider?.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot activeDot' : 'dot'}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;