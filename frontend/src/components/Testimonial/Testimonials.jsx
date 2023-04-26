import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    reponsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
         
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonials py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni
          totam rem et expedita temporibus atque nihil incidunt ipsam reiciendis
          necessitatibus non ducimus harum.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div className="mb-0 mt-3">
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials py-4 px-3">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni
          totam rem et expedita temporibus atque nihil incidunt ipsam reiciendis
          necessitatibus non ducimus harum.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div className="mb-0 mt-3">
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials py-4 px-3">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni
          totam rem et expedita temporibus atque nihil incidunt ipsam reiciendis
          necessitatibus non ducimus harum.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div className="mb-0 mt-3">
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials py-4 px-3">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni
          totam rem et expedita temporibus atque nihil incidunt ipsam reiciendis
          necessitatibus non ducimus harum.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div className="mb-0 mt-3">
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
