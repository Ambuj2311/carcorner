import React from 'react';
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../images/slider1.jpg';
import Slider2 from '../images/slider2.jpg';
import Slider3 from '../images/slider3.jpg';


function Slider() {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img src={ Slider1 } className='sliderImg' text="First slide" />
        <Carousel.Caption>
          <h3>Vintage Cars</h3>
          <p>Know About Vintage Cars</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Slider2} className='sliderImg' text="Second slide" />
        <Carousel.Caption>
          <h3>Sports Cars</h3>
          <p>Know About Sports Car</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Slider3} className='sliderImg' text="Third slide" />
        <Carousel.Caption>
          <h3>Luxury Cars</h3>
          <p>
            Know About Luxury Cars and XUV's
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;