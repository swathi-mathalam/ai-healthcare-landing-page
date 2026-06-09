import React, { useState } from "react";
import "./Newsletter.scss";

const Newsletter = ({ data }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    console.log("Subscribed Email:", email);
    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container">

        <div className="newsletter__box">

          <div className="newsletter__text">
            <h2>{data?.title || "Subscribe to Newsletter"}</h2>
            <p>{data?.subtitle || "Get latest updates, health tips and news"}</p>
          </div>

          <form className="newsletter__form" onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">
              {data?.buttonText || "Subscribe"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;