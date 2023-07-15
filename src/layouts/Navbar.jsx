import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/show-books" className="nav-link">
        Show Books
      </Link>
      <Link to="/add-book" className="nav-link">
        Add Books
      </Link>
      <Link to="/add-user" className="nav-link">
        Add User
      </Link>
      <Link to="/show-user" className="nav-link">
        Show User
      </Link>
    </nav>
  );
}
