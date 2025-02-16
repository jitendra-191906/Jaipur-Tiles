import React from "react";
import "../Style/testimonials.css";
import customer1 from '../Images/Customer_Images/cust1.png';
import customer2 from '../Images/Customer_Images/cust2.png';
import customer3 from '../Images/Customer_Images/cust3.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TESTIMONIALS } from "../constants";


const customerReviewsList = [
  {
    name: "Bessie Cooper",
    profileImg: customer1,
    reviewText: "Best experience and best quality of tiles. I have brought tiles and marble for my complete home.",
  },
  {
    name: "Ralph Edwards",
    profileImg: customer2,
    reviewText: "Great customer service and excellent marble designs. Truly satisfied with the purchase.",
  },
  {
    name: "Annette Black",
    profileImg: customer3,
    reviewText: "The quality of tiles is unmatched. The team was very professional throughout.",
  },
  {
    name: "Cameron Williamson",
    profileImg: customer1,
    reviewText: "Beautiful designs and excellent quality! Highly recommend this store.",
  },
  {
    name: "Eleanor Pena",
    profileImg: customer2,
    reviewText: "Affordable pricing and great quality tiles. Perfect for any home renovation!",
  },
];

function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    // arrow:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1150, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450, // Mobile
        settings: {
          slidesToShow: 1,
          fade: true,
          speed: 100,
        },
      },
    ],
  };

  return (
    <div
      id={TESTIMONIALS}
      className="testimonials_main">
      <div className="testimonial_inner">
        <div className="website_heading_text testimonial_title">
          <h2>
            “Our clients often tell us.....”
          </h2>
        </div>
        <div className="testimonial_slider">
          <Slider {...settings} >
            {
              customerReviewsList.map((customer, index) => (
                <div
                  key={index}
                  className="customer_review"
                >
                  <div className="customer_review_inner">
                    <div className="customer_details">
                      <img
                        src={customer.profileImg}
                        alt={`${customer.name}'s profile`}
                        className="img_customer"
                      />
                      <span className="customer_name">
                        {customer.name}
                      </span>
                    </div>
                    <hr className="hr_heading" />
                    <div className="customer_review_text">
                      <p>
                        {customer.reviewText}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
