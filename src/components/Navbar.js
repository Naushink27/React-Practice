import { Logo_URL } from "./utils";
const Navbar = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Navbar;