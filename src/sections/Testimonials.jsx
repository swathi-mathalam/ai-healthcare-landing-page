import React from "react";
import "./Testimonials.scss";
import SectionHeader from "../components/SectionHeader";

const Testimonials = ({ data }) => {
  return (
    <section
      className="testimonials"
      id="testimonials"
    >
      <div className="testimonials__container">
        <SectionHeader
          title="Patient Testimonials"
          subtitle="What our patients say about our healthcare services."
        />

        <div className="testimonials__grid">
          {data?.length > 0 ? (
            data.map((testimonial) => (
              <div
                className="testimonial-card"
                key={testimonial.id}
              >
                <h3>
                  {testimonial.name}
                </h3>

                <p className="feedback">
                  "{testimonial.review}"
                </p>

                <div className="rating">
                  ⭐ {testimonial.rating}/5
                </div>
              </div>
            ))
          ) : (
            <p>No Testimonials Available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;