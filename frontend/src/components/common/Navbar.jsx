import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

function Navbar() {
  const isAuthenticated = ApiService.isAuthenticated();
  const isAdmin = ApiService.isAdmin();
  const isUser = ApiService.isUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    const isLogout = window.confirm(
      "Are you sure you want to logout this user?"
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
      <ul className="navbar-ul">
        <li>
          <NavLink to="/home" className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/rooms" className={navLinkClass}>
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink to="/find-booking" className={navLinkClass}>
            Find my Booking
          </NavLink>
        </li>

        {isUser && (
          <li>
            <NavLink to="/profile" className={navLinkClass}>
              Profile
            </NavLink>
          </li>
        )}
        {isAdmin && (
          <li>
            <NavLink to="/admin" className={navLinkClass}>
              Admin
            </NavLink>
          </li>
        )}

        {!isAuthenticated && (
          <li>
            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <NavLink to="/register" className={navLinkClass}>
              Register
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
