// AdminNavbar

import { useRef } from "react";
import { FaBars, FaTimes ,Flex} from "react-icons/fa";
import "./AdminStyles/Adminnavbar.css";
import { Link, useNavigate } from "react-router-dom";
import adminlogo from "../../utilites/img/adminlogo.png"
const AdminNavbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const showNavbar = () => {
    navRef.current.classList.toggle("kd_responsive_nav");
  };

  const handleClick = () => {
    localStorage.clear();
    navigate("/adminsignin");
  };
  return (
    <header>
      <img
        className="kd-logo"
        src={adminlogo}
        alt="Logo"
      />
      <nav ref={navRef}>
        <li>
          <Link to={"/adminlistproduct"} className="kd-link">
            Product List
          </Link>
        </li>
        <li>
          <Link to={"/addData"} className="kd-link">
            Add Product
          </Link>
        </li>
        <li>
          <Link to={"/userlist"} className="kd-link">
            User List
          </Link>
        </li>
        {/* <li>
          <Link to={"/adminlist"} className="kd-link">
            Admin List
          </Link>
        </li> */}
        <button className="kd-logout" onClick={handleClick}>
          Log-out
        </button>
        <button className="kd-nav-btn kd-nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="kd-nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default AdminNavbar;
