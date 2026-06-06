import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

function Navbar() {
  const isAuthenticated = ApiService.isAuthenticated();
  const isAdmin = ApiService.isAdmin();
  const isUser = ApiService.isUser();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    const isLogout = window.confirm(
      "Are you sure you want to logout this user?",
    );
    if (isLogout) {
      ApiService.logout();
      navigate("/home");
    }
  };

  const navLinkClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/home">Hotel Silver9</NavLink>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </div>
      <ul className={`navbar-ul ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/home"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rooms"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/find-booking"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Find my Booking
          </NavLink>
        </li>

        {isUser && (
          <li>
            <NavLink
              to="/profile"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </NavLink>
          </li>
        )}
        {isAdmin && (
          <li>
            <NavLink
              to="/admin"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </NavLink>
          </li>
        )}

        {!isAuthenticated && (
          <li>
            <NavLink
              to="/login"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <NavLink
              to="/register"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Register
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button
              className="logout-button"
              onClick={handleLogout}
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
