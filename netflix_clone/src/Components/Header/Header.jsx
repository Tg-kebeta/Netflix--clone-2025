


import React, { useState } from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-outer-container">
      <div className="header-container">
        {/* LEFT SIDE */}
        <div className="header-left">
          <img src={NetflixLogo} alt="Netflix Logo" className="netflix-logo" />

          {/* Hamburger icon (only visible on small screens) */}
          <div className="hamburger-icon" onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>

          {/* Nav Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="header-right">
          <SearchIcon className="icon" />
          <NotificationsIcon className="icon" />
          <AccountBoxIcon className="icon" />
          <ArrowDropDownIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
