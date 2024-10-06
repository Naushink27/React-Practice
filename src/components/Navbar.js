import { useState } from "react";
import { Logo_URL } from "./utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const toggleButton = () => {
    setBtnNameReact(prevName => (prevName === "Login" ? "Logout" : "Login"));
  };

  return (
    <nav className="NavContainer">
      <div className="LogoContainer">
        <img className="logo" src={Logo_URL} alt="Restaurant Logo" />
      </div>
      <div className="Navitem">
        <ul className="item">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/cart">CART</Link></li> {/* Make it a Link if needed */}
          <li>
            <button className="login-btn" onClick={toggleButton}>
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
