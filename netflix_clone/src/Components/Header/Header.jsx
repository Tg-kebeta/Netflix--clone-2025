
import React from 'react'
import "./header.css"
import NetflixLogo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-left">
          <img src={NetflixLogo} alt="Netflix Logo" className="netflix-logo" />
          <ul className="nav-links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <SearchIcon className="icon" />
          <NotificationsIcon className="icon" />
          <AccountBoxIcon className="icon" />
          <ArrowDropDownIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header