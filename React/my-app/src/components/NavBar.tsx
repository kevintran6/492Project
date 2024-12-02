import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/Reddit-Emblem-1.png";
import Person2Icon from "@mui/icons-material/Person2";
import DehazeIcon from "@mui/icons-material/Dehaze";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <button className="sidebar-toggle">
          <DehazeIcon />
        </button>
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">rabbit</span>
      </div>
      <div className="search-container">
        <SearchIcon />
        <input type="text" placeholder="Search Rabbit" className="search-bar" />
      </div>
      <div className="profile-container">
        <Person2Icon style={{ fontSize: "1.5rem" }} />
      </div>
    </div>
  );
};

export default NavBar;
