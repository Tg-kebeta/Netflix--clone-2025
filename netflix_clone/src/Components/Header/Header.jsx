// import React from 'react'
// import "./header.css"
// import NetflixLogo from "../../assets/images/logo.png"
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const Header = () => {
//   return (
//     <div className="header-outer-container">
//       <div className="header-container">
//         <div className="header-left">
//           <ul>
//             <li><img src={NetflixLogo}alt='Netflix Logo' width="25%"/></li>
//             <li>Netflix</li>
//             <li>Home</li>
//             <li>TVShows</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>MyList</li>
//             <li>Browse by Languges</li>
//           </ul>
//         </div>
//         <div className="header-right">
//           <ul>
//             <li><SearchIcon/></li>
//             <li><NotificationsIcon/></li>
//             <li><AccountBoxIcon /></li>
//             <li><ArrowDropDownIcon/></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header
import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <img src={NetflixLogo} alt="Netflix Logo" className="netflix-logo" />
          <ul className="nav-links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>My List</li>
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
};

export default Header;
