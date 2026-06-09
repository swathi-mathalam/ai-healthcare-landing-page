import React from "react";
import "./Header.scss";
import Button from "../components/Button";

const Header = ({ data }) => {
  const handleClick = () => {
    alert("Book Consultation booked!");
  };

  return (
    <header className="header">
      <div className="logo">
  {data?.logo || "AI Healthcare"}
</div>

      <nav>
        <ul>
          {data?.menuItems?.map(
            (item, index) => (
              <li key={index}>
                <a href={item.path}>
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <Button
        text={
          data?.ctaButtonText
        }
        onClick={handleClick}
      />
    </header>
  );
};

export default Header;