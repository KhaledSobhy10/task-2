import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar navbar-light bg-light">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to={"/"}>
            All categories
          </Link>
        </li>
      </ul>
    </header>
  );
}
