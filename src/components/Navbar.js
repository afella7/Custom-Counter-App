import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">CustomCounter</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/errorpage">ErrorPage</NavLink>
    </nav>
  );
}


export default Navbar;