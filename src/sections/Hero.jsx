import React from "react";
import "./Hero.scss";
import Button from "../components/Button";

const Hero = ({ data }) => {
  const handleClick = () => {
    alert("Book Consultation booked!");
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>{data?.title}</h1>

        <p>{data?.subtitle}</p>

        <Button
          text={data?.buttonText}
          onClick={handleClick}
        />
      </div>

      <div className="hero__image">
        <img
          src={data?.image}
          alt={data?.title}
        />
      </div>
    </section>
  );
};

export default Hero;