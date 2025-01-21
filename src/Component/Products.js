import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/products.css';
import { MARBELS, GRANITES, TILES } from '../constants'


import image1 from '../Images/white_marble.png';
import image2 from '../Images/green_marble.jpeg';
import image3 from '../Images/red_marble.png';
import image4 from '../Images/black_marble.png';
import img1 from '../Images/Indoor_Tiles.png';
import img2 from '../Images/Outdoor_Tiles.png';
import img3 from '../Images/Kitchen_tiles.png';
import img4 from '../Images/Bathroom_Tiles.png';
import GraniteTypeImage1 from '../Images/absulate_black.jpeg';
import GraniteTypeImage2 from '../Images/granite_type_2.png';
import GraniteTypeImage3 from '../Images/granite_type_3.png';
import GraniteTypeImage4 from '../Images/granite_type_4.png';

const allProducts = [
  {
    title: "Explore our Marble Stone",
    data: [
      { image: image1, name: "White Marble" },
      { image: image2, name: "Green Marble" },
      { image: image3, name: "Black Marble" },
      { image: image4, name: "Red Marble" },
    ],
    path: "/marble",
    id: MARBELS,
  },
  {
    title: "Explore our Granite Collection",
    data: [
      { image: GraniteTypeImage1, name: "Absolute Black Granite" },
      { image: GraniteTypeImage2, name: "Majestic Lappato Granite" },
      { image: GraniteTypeImage3, name: "Red Pearl Granite" },
      { image: GraniteTypeImage4, name: "Rajasthan Black Granite" },
    ],
    path: "/granite",
    id: GRANITES,
  },
  {
    title: "Explore our Kitchen Tiles Collection",
    data: [
      {
        image: img1, name: "Indoor Tiles"
      },
      { image: img2, name: "Outdoor Tiles" },
      { image: img3, name: "Kitchen Tiles" },
      { image: img4, name: "Bathroom Tiles" },
    ],
    path: "/tiles",
    id: TILES,
  },
  {
    title: "Explore our Bathroom Tiles Collection",
    data: [
      {
        image: img1, name: "Indoor Tiles"
      },
      { image: img2, name: "Outdoor Tiles" },
      { image: img3, name: "Kitchen Tiles" },
      { image: img4, name: "Bathroom Tiles" },
    ],
    path: "/tiles",
    id: TILES,
  },
  {
    title: "Explore our Indoor Tiles Collection",
    data: [
      {
        image: img1, name: "Indoor Tiles"
      },
      { image: img2, name: "Outdoor Tiles" },
      { image: img3, name: "Kitchen Tiles" },
      { image: img4, name: "Bathroom Tiles" },
    ],
    path: "/tiles",
    id: TILES,
  },
  {
    title: "Explore our Outdoor Tiles Collection",
    data: [
      {
        image: img1, name: "Indoor Tiles"
      },
      { image: img2, name: "Outdoor Tiles" },
      { image: img3, name: "Kitchen Tiles" },
      { image: img4, name: "Bathroom Tiles" },
    ],
    path: "/tiles",
    id: TILES,
  },
  {
    title: "Explore our Floor Tiles Collection",
    data: [
      {
        image: img1, name: "Indoor Tiles"
      },
      { image: img2, name: "Outdoor Tiles" },
      { image: img3, name: "Kitchen Tiles" },
      { image: img4, name: "Bathroom Tiles" },
    ],
    path: "/tiles",
    id: TILES,
  },
];


const ProductSection = (props) => {

  const { title, products, onNavigate, id } = props;

  return (
    <div
      id={id}
      className="product_section"
    >

      <div className="product_title website_heading_text">
        <h2>
          {title}
        </h2>
      </div>

      <div className="product_grid">
        {
          products.map((product, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  key={index}
                  className="product_card"
                  onClick={() => onNavigate()}
                >
                  <div className="product_image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <p className="product_name">
                    {product.name}
                  </p>
                </div>
              </React.Fragment>
            )
          })
        }
      </div>

      <div className="product_show_more">
        <button
          className="explore_button"
          onClick={() => onNavigate()}
        >
          Show More
        </button>
      </div>

    </div>
  );
};

function Products() {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="home_products_main">
      <div className='home_products_inner'>
        {
          allProducts.map((section, index) => {
            return (
              <React.Fragment key={index}>
                <ProductSection
                  key={index}
                  title={section.title}
                  products={section.data}
                  id={section.id}
                  onNavigate={() => handleNavigate(section.path)}
                />
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  );
}

export default Products;
