import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <nav className="navbar bg-warning container-fluid px-5 py-0 d-flex align-items-center">
      <div className="">
        <Link to="/" className="h3">
          Logo
        </Link>
      </div>
      <ul className="mb-0 px-0 py-0 d-flex align-items-center list-unstyled ms-auto">
        <li>
          <Link to="/" className="me-2 text-decoration-none text-dark cst-btn">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="me-2 text-decoration-none text-dark cst-btn">
            About
          </Link>
        </li>
        <li>
          <Link to="/blog" className="me-2 text-decoration-none text-dark cst-btn">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/shop" className="me-2 text-decoration-none text-dark cst-btn">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/contact" className="me-2 text-decoration-none text-dark cst-btn">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
