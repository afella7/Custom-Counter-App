import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink className="links" to="/">CustomCounter</NavLink>
      <NavLink className="links" to="/counter">Counter</NavLink>
      <NavLink className="links" to="/errorpage">ErrorPage</NavLink>
    </nav>
  );
}


export default Navbar;