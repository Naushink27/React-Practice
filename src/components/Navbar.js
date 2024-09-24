import { useState } from "react";
import { Logo_URL } from "./utils";

const Navbar = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("render");

  const toggleButton = () => {
    setBtnNameReact(prevName => (prevName === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="NavContainer">
      <div className="LogoContainer">
        <img className="logo" src={Logo_URL} alt="Restaurant Logo" />
      </div>
      <div className="Navitem">
        <ul className="item">
          <li>HOME</li>
          <li>CONTACT US</li>
          <li>ABOUT US</li>
          <li>CART</li>
          <li>
            <button className="login-btn" onClick={toggleButton}>
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
