import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

function SimpleSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://i.pinimg.com/736x/8b/51/8a/8b518a2f166dda6e9c022557303a94fc.jpg" />
        </div>
        <div>
          <img src="https://i.pinimg.com/736x/9a/eb/0b/9aeb0b95c04654cfef1bbc0162360ca0.jpg" />
        </div>
        <div>
          <img src="https://i.pinimg.com/736x/e7/8b/45/e78b453df8c86365de27e26b92bbc0b8.jpg" />
        </div>
        <div>
          <img src="https://i.pinimg.com/736x/64/86/59/6486596e25b4e609a0ec35bf621c71ab.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export {SimpleSlider}