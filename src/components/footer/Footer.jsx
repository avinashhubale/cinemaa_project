import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialIcons">
        <a href="https://github.com/avinashhubale" target="_blank" className="icon">
          <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/avinash-hubale-0b7537197" target="_blank" className="icon">
          <FaLinkedin/>
        </a>
        <a href="https://twitter.com/AvinashHubale" target="_blank" className="icon">
          <FaTwitter/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
