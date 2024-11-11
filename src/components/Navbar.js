import { useState } from "react";
import { Logo_URL } from "./utils";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Navbar = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const toggleButton = () => {
    setBtnNameReact(prevName => (prevName === "Login" ? "Logout" : "Login"));
  };
const onlineStatus=useOnlineStatus();
  return (
    <nav className="NavContainer">
      <div className="Logocontainer">
        <img className=" logo "src={Logo_URL} alt="Restaurant Logo" />
      </div>
      <div className=" Navitem">
        <ul className="item">
          <li >status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
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
