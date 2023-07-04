import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/article.png";
import { AuthContext } from "../context/authContext";


const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="log-img" />
          </Link>
        </div>
        <h1 className="title">Anime Blog</h1>
        <div className="links">
          <Link className="link" to="/?cat=action">
            <h6>ACTION</h6>
          </Link>
          <Link className="link" to="/?cat=sci-fi">
            <h6>SCI-FI</h6>
          </Link>
          <Link className="link" to="/?cat=romance">
            <h6>ROMANCE</h6>
          </Link>
          <Link className="link" to="/?cat=robot">
            <h6>ROBOT</h6>
          </Link>
          <Link className="link" to="/?cat=fantasy">
            <h6>FANTASY</h6>
          </Link>
          <Link className="link" to="/?cat=others">
            <h6>OTHERS</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}><Link to="/">Logout</Link></span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
