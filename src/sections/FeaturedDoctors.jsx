import React from "react";
import "./FeaturedDoctors.scss";
import SectionHeader from "../components/SectionHeader";

const FeaturedDoctors = ({ data }) => {
  return (
    <section
      className="featured-doctors"
      id="doctors"
    >
      <div className="featured-doctors__container">
        <SectionHeader
          title="Featured Doctors"
          subtitle="Meet our experienced healthcare professionals."
        />

        <div className="doctors-grid">
          {data?.length > 0 ? (
            data.map((doctor) => (
              <div
                className="doctor-card"
                key={doctor.id}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-card__image"
                />

                <h3>{doctor.name}</h3>

                <p className="specialization">
                  {doctor.specialization}
                </p>

                <p className="experience">
                  {doctor.experience}
                </p>

                <span
                  className={`status ${
                    doctor.availability?.toLowerCase() ===
                    "available"
                      ? "available"
                      : "busy"
                  }`}
                >
                  {doctor.availability}
                </span>
              </div>
            ))
          ) : (
            <p>No Doctors Available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;