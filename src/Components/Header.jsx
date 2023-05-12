import { NavLink, Outlet } from "react-router-dom";
import Logo from "../Images/LOGO.png";
import "../Styles/Header.css"

function Header() {
  return (
    <div>
      <header className="Nav-container">
        <div className="logo">
          <img src={Logo} alt=""/>
        </div>
        <div className="Nav-list">
          <NavLink to="/">Products</NavLink>
          <NavLink to="/Blogs">Blogs</NavLink>
          <NavLink to="/Colors">Colors</NavLink>
          <NavLink to="/Inspiration">Inspiration</NavLink>
          <NavLink to="/About">About Us</NavLink>
          <NavLink to="/Contact">Contact Us</NavLink>
        </div>
      </header>
      <Outlet/>
    </div>
  );
}

export default Header;
