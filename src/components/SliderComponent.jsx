import React from 'react';
import Slider from 'react-slick';

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const updates = [
  { id: 1, text: "Update 1: New hospital wing opened!" },
  { id: 2, text: "Update 2: Free health check-up camp on October 5th!" },
  { id: 3, text: "Update 3: COVID-19 vaccination drive ongoing." },
  { id: 4, text: "Update 4: Special discounts on cardiac check-ups!" },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-center mb-4">Important Updates</h2>
      <Slider {...settings}>
        {updates.map((update) => (
          <div key={update.id} className="p-4">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white p-8 rounded-lg shadow-lg">
              <p className="text-lg font-medium text-center">{update.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
