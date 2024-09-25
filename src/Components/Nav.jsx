import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const style = (e) => {
    return {
      color: e.isActive ? "tomato" : "",
      fontWeight: e.isActive ? "bold" : "",
      fontSize: e.isActive ? "20px" : "",
    };
  };
  return (
    <>
      <nav className="flex gap-5 mt-10 justify-center ">
        <NavLink to="/" style={style}>
          Home
        </NavLink>
        <NavLink to="/about-us" style={style}>
          About Us
        </NavLink>
        <NavLink to="/gallary" style={style}>
          Gallary
        </NavLink>
        <NavLink to="/contact-us" style={style}>
          Contact Us
        </NavLink>
      </nav>
    </>
  );
}
