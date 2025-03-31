import React, { useState } from "react";
import ArrowRight from "../assets/ArrowRight.png";
import ArrowLeft from "../assets/ArrowLeft.png";

const Carrousel = ({ slides }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const numberSlides = slides.length;

  const slideImg = (direction) => {
    if (direction === "right") {
      if (currentImg < numberSlides - 1) {
        setCurrentImg(currentImg + 1);
      } else {
        setCurrentImg(0); // Retourner à la première image
      }
    } else if (direction === "left") {
      if (currentImg > 0) {
        setCurrentImg(currentImg - 1);
      } else {
        setCurrentImg(numberSlides - 1); // Aller à la dernière image
      }
    }
  };

  if (numberSlides <= 1) {
    return (
      <div className="carrousel-slide">
        <img src={slides[0]} alt="Image unique" className="slide-img" />
      </div>
    );
  }

  return (
    <div className="carrousel-slide">
      <div className="arrow arrow-left" onClick={() => slideImg("left")}>
        <img src={ArrowLeft} alt="arrow left" />
      </div>

      <div className="slide-img">
        <img src={slides[currentImg]} alt="" className="carrousel-img" />
      </div>

      <div className="arrow arrow-right" onClick={() => slideImg("right")}>
        <img src={ArrowRight} alt="arrow right" />
      </div>

      <div className="slide-number">
        {currentImg + 1}/{numberSlides}
      </div>
    </div>
  );
};

export default Carrousel;
