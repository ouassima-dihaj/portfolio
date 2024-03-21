import React from "react";
import { Instagram, Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Twitter/>
        <Facebook />
        <LinkedIn />
      </div>
      <p>&copy; 2024 ouassima.com</p>
    </div>
  );
};

export default Footer;
