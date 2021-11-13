import logo from '../img/logo-white.png';
import 'font-awesome/css/font-awesome.min.css';

import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [current, setCurrent] = useState("home")
    const location = useLocation()
    return (
        <nav>
            <div className="nav-container">
                <Link to="/"><img src={logo} alt=""></img></Link>
                <input type="text" name="search-movie" className="search-bar" id="search-bar" placeholder="Search Movie, TV Show, or Series"></input>
                <ul className="nav-list">
                    <li><Link to="/" id={!location.pathname.includes('wishlist') ? "current" : ""}>Movie</Link></li>
                    <li><Link to="/wishlist"  id={location.pathname.includes('wishlist') ? "current" : ""}>Wishlist<i className="fa fa-heart"></i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
