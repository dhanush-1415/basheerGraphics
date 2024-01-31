import React, { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";
import "./slider.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  const img1 = 'https://ap-bookory.myshopify.com/cdn/shop/files/01_01_1.png?v=1688201302&width=3000';
  const img2 = 'https://ap-bookory.myshopify.com/cdn/shop/files/01_01_1.png?v=1688201302&width=3000'

  const images = [
      img1,
      img2,
  ];

  const texts = [
      {
          title: "50% Off Hundreds Of Books",
          subtitle: "A SALE FOR THE PAGES",
          desc: "Online And In Stores Only",
          btn: "Shop Now",
      },
      {
        title: "50% Off Hundreds Of Books",
        subtitle: "A SALE FOR THE PAGES",
        desc: "Online And In Stores Only",
        btn: "Shop Now",
    },
  ]

  const handlePrevClick = () => {
      setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNextClick = () => {
      setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  //autoslide

  useEffect(() => {
      const interval = setInterval(() => {
          setIndex(index === images.length - 1 ? 0 : index + 1);
          // call fade in animation on each interval for each image



      }, 5000);
      return () => clearInterval(interval);
  }, [index]);



  return (
      <div className="homesliderout">
          <div className="homeslider">
              <button onClick={handlePrevClick} className='leftbtn'>{"<"}</button>
              <img 
                 key={index}
                 src={images[index]}
                 alt="carousel-image"
                 className={index === 0 ? "zoominandfade" : "zoominandfade"}
              />
              <div className="blur"></div>
              <div className={
                  index === 0 ? "slidertext" : "slidertext"
              }>
                <h2>
                      {texts[index].subtitle}
                  </h2>
                  <h1>{
                      texts[index].title
                  }</h1>
                  <h3>{
                      texts[index].desc
                  }</h3>
                  <h4>{texts[index].btn}<KeyboardArrowRightIcon /></h4>
              </div>
              <button onClick={handleNextClick} className="rightbtn">{">"}</button>
          </div>
      </div>
  );
};

export default HomeSlider;