import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;