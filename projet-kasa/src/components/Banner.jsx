import React from "react";

const Banner = ({ imageUrl, text }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" className="banner-image" />
      {text && (
        <div className="banner-content">
          <h1>{text}</h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
