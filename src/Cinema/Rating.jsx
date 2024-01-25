import React from "react";
import star from "../assets/star.svg";

export default function Rating({ value }) {
  //   return Array(value)
  //     .fill(star)
  //     .map((_, i) => <img key={i} src={star} width="14" height="14" alt="star" />);

  const stars = Array(value).fill(star);
  return (
    <>
      {stars.map((star, i) => (
        <img key={i} src={star} width="14" height="14" alt="star" />
      ))}
    </>
  );
}
