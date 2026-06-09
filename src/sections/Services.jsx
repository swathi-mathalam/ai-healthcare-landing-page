import React from "react";
import "./Services.scss";
import SectionHeader from "../components/SectionHeader";

const Services = ({ data }) => {
  return (
    <section
      className="services"
      id="services"
    >
      <div className="services__container">
        <SectionHeader
          title="Our Services"
          subtitle="Healthcare solutions designed for better patient care."
        />

        <div className="services__grid">
          {data?.map((service) => (
            <div
              className="service-card"
              key={service.id}
            >
              <div className="service-card__icon">
                <span className="material-icons">
                  {service.icon}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;