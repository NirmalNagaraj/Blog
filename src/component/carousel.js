// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Benefits = ({ title, description }) => (
  <div className='Benefits m-2'>
    <h3 className="mb-3 text-danger text-center title">{title}</h3>
    <p className="text-body mb-0 text-align-left description">{description}</p>
  </div>
);

const Carousel = ({ benefits }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {benefits.map((benefit, index) => (
        <div className="carousel" key={index}>
          <Benefits  title={benefit.title} description={benefit.description} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
