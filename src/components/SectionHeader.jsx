import React from "react";
import "./SectionHeader.scss";

const SectionHeader = ({
  title,
  subtitle,
}) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;