import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom"
import Logo from "../img/article.png"
=======
>>>>>>> ec32075 (💄 Update Navbar and footer)

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
<<<<<<< HEAD
                <div className="logo">
                    <img src={Logo} alt="log-img"/>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className="link" to="/?cat=technology">
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className="link" to="/?cat=cinema">
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
                    <span>Ing</span>
                    <span>Logout</span>
                    <span className="write">
                        <Link className="link" to="/write">Write</Link>
                    </span>
                </div>
=======
                <div className="logo">logo</div>
                <div className="links">links</div>
>>>>>>> ec32075 (💄 Update Navbar and footer)
            </div>
        </div>
    )
}
<<<<<<< HEAD
 
=======

>>>>>>> ec32075 (💄 Update Navbar and footer)
export default Navbar;