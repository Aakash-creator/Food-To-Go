import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/Pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/Login">Log-in</Link>
        </li>
        <li>
          <Link to="/SignIn">Sign-in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
