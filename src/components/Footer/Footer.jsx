import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'black' }}>
      <div>Redhood</div>
      <div>©2022, Entertaiment Inc.</div>
    </div>
  );
};

export default Footer;