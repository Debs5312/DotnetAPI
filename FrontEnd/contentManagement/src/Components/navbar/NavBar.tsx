import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navBar__container">
      <div className="navBar__Item1">
        <img src="./NavBar_Image_Logo.jpg" alt="Navbar_Image_Logo" />
        <p>Event...That defines the day</p>
      </div>
      <div className="navBar__Item2">
        <ul className="navBar__List">
          <li className="navBar__Listitem">
            <Link to="/">Home</Link>
          </li>
          <li className="navBar__Listitem">
            <a href="#">About</a>
          </li>
          <li className="navBar__Listitem">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
