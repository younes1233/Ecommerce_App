import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannersCarousel = () => {
  // Sample data for banners (replace with your actual data)
  const banners = [
    {
      id: 1,
      image: 'https://www.ishtari.com/image/data/system_banner/10000/3400/3374/water-sports-web.png',
      link: '/product/1',
    },
    {
      id: 2,
      image: 'https://www.ishtari.com/image/data/system_banner/10000/3400/3374/standing-fan.png',
      link: '/product/2',
    },
    {
      id: 3,
      image: 'https://www.ishtari.com/image/data/system_banner/10000/3400/3374/massager.png',
      link: '/product/3',
    },
  ];

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
    <Slider {...settings}>
      {banners.map((banner) => (
        <div key={banner.id}>
          <a href={banner.link}>
            <img src={banner.image} alt={`Banner ${banner.id}`} className="w-full h-auto" />
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default BannersCarousel;
