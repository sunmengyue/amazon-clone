import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full bg-gradient-to-t h-32 from-white to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={5000}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img
            lading="lazy"
            src="https://links.papareact.com/gi1"
            alt="carousel 1"
          />
        </div>
        <div>
          <img
            lading="lazy"
            src="https://links.papareact.com/6ff"
            alt="carousel 1"
          />
        </div>
        <div>
          <img
            lading="lazy"
            src="https://links.papareact.com/7ma"
            alt="carousel 1"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
