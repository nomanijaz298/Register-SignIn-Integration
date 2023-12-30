import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-dark text-light text-center">
      <h3> All right reserved &copy; Kamal Chaudhary</h3>
      <p className="item text-center">
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default Footer;
