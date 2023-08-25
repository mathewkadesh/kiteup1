import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clientsData from './data/clientLogo.json';

const ClientLogosCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000, // Adjust as needed
    slidesToShow: 5, // Number of logos visible at a time
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="client-logos-carousel" >
      <h2 style={{textAlign:'center', marginBottom:'30px'}}>Our Clients</h2>
      <Slider {...settings}>
        {clientsData.map((client) => (
          <div key={client.id} >
            <img src={client.logo} alt={client.name} />
            <p>{client.name}</p>
          </div>
        ))}
      </Slider>
      <hr className='rounded-hr'/>
    </div>
  );
};

export default ClientLogosCarousel;
