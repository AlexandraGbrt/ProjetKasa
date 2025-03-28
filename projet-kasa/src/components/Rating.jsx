import React from "react";
import greyStar from "../assets/greyStar.png";
import redStar from "../assets/redStar.png";

const Rating = ({ score }) => {
  const stars = [];
  const maxStars = 5;

  for (let i = 0; i < maxStars; i++) {
    if (i < score) {
      stars.push(<img key={i} src={redStar} alt="red-star" />);
    } else {
      stars.push(<img key={i} src={greyStar} alt="grey-star" />);
    }
  }
  return <div className="rating">{stars}</div>;
};

export default Rating;
