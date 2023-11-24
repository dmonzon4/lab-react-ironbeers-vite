import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/home-icon.png";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <NavLink to={"/"} className="" padding="15px">
        <img src={HomeIcon} alt="Home" />
      </NavLink>
    </nav>
  );
}
