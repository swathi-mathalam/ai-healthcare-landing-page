import React from "react";
import "./Statistics.scss";

const Statistics = ({ data }) => {
  return (
    <section className="statistics">
      <div className="statistics__container">
        {data?.map((item) => (
          <div
            className="statistics__card"
            key={item.id} 
          >
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;