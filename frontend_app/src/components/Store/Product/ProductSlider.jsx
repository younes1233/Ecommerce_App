import React, { useRef } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';

const ProductSlider = ({ title, products }) => {
  const sliderRef = useRef();

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-8" style={{ backgroundColor: 'rgb(241, 244, 253)' }}> {/* Set background color */}
      <h3 className="pl-4 text-2xl font-semibold mb-4 text-color-gray">{title}</h3>
      <div className="relative">
        <div className="slider-container max-w-screen-xl mx-auto"> {/* Add a fixed-width container */}
          <Slider ref={sliderRef} {...settings}>
            {products.map(product => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
        <button onClick={goToPrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white hover:bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center text-gray-800 text-sm">
          &lt;
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white hover:bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center text-gray-800 text-sm">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
