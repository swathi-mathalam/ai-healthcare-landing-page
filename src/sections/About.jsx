import React from "react";
import "./About.scss";

const About = ({ data }) => {
  return (
    <section
      className="about"
      id="about"
    >
      <div className="about__container">
        <h2 className="about__heading">
          {data?.heading}
        </h2>

        <p className="about__description">
          {data?.description}
        </p>
      </div>
    </section>
  );
};

export default About;