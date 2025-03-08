import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">Encyclopedia</Link>
      <Link to="/contact">Album</Link>
    </nav>
  );
};

export default Nav;