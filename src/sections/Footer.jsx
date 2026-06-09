import React from "react";
import "./Footer.scss";

const Footer = ({ data }) => {
  const socialLinks = data?.socialLinks || {};

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Company Info */}
        <div className="footer__col footer__brand">
          <h3 className="footer__logo">
            {data?.companyName}
          </h3>
          <p className="footer__desc">
            {data?.description}
          </p>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__title">Contact</h4>

          <div className="footer__item">
            <span>Email:</span>
            <p>{data?.email}</p>
          </div>

          <div className="footer__item">
            <span>Phone:</span>
            <p>{data?.phone}</p>
          </div>

          <div className="footer__item">
            <span>Address:</span>
            <p>{data?.address}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__title">Quick Links</h4>

          <ul className="footer__links">
            {data?.quickLinks?.map((link, index) => (
              <li key={index}>
                <a href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer__col">
          <h4 className="footer__title">Follow Us</h4>

          <div className="footer__socials">
            <a href={socialLinks.facebook} target="_blank">Facebook</a>
            <a href={socialLinks.linkedin} target="_blank">LinkedIn</a>
            <a href={socialLinks.twitter} target="_blank">Twitter</a>
            <a href={socialLinks.instagram} target="_blank">Instagram</a>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} {data?.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;