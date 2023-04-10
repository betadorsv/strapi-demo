import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/common/logo.png"
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-container--logo" >
        <img
          height={56}
          src={Logo}
          alt=""
        />
      </div>
      <div className="navbar-container--menu">

    
      <NavLink to={"/home"} activeClassName="actived">
        <img
          height={30}
          src="https://cdn-icons-png.flaticon.com/512/9919/9919306.png"
          alt=""
        />
      </NavLink>
      <NavLink to={"/channel"} activeClassName="actived">
        <img
          height={30}
          src="https://cdn-icons-png.flaticon.com/512/4926/4926456.png"
          alt=""
        />
      </NavLink>
      <NavLink to={"/conversation"} activeClassName="actived">
        <img
          height={30}
          src="https://cdn-icons-png.flaticon.com/512/9383/9383558.png"
          alt=""
        />
      </NavLink>
      <NavLink to={"/setting"} activeClassName="actived">
        <img
          height={30}
          src="https://cdn-icons-png.flaticon.com/512/9069/9069049.png"
          alt=""
        />
      </NavLink>
      </div>
      <div className="navbar-container--footer">

      </div>
    </div>
  );
}

export default Navbar;
