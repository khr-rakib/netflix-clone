import React, { useEffect, useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://khrakib.com/wp-content/uploads/2020/07/LogoMakr_5gu73o-1-50x58.png"
        alt=""
      />
      <img src="" className="nav__avatar" alt="" />
    </div>
  );
};

export default Nav;
