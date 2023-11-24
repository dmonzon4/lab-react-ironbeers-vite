import { NavLink } from "react-router-dom";
import AllBeersImage from "../assets/beers.png"
import RandomBeerImage from "../assets/random-beer.png"
import NewBeerImage from "../assets/new-beer.png"

export default function HomePage() {
  return (
    <nav className="home-page">
      <NavLink to={"/beers"} className="nav-link">
        <img src={AllBeersImage} alt="All Beers" />
        | All Beers
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          ipsum non arcu condimentum interdum.
        </p>
      </NavLink>
      <NavLink to={"/random-beer"} className="nav-link">
        <img src={RandomBeerImage} alt="Random Beer" />
        | Random Beer
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          ipsum non arcu condimentum interdum.
        </p>
      </NavLink>
      <NavLink to={"/new-beer"} className="nav-link">
        <img src={NewBeerImage} alt="New Beer" />
        | New Beer
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          ipsum non arcu condimentum interdum.
        </p>
      </NavLink>
    </nav>
  );
}
