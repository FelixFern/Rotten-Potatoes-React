import logo from '../img/logo-white.png';
import 'font-awesome/css/font-awesome.min.css';

import { Link, useLocation } from 'react-router-dom'

import { searchContext } from '../contexts/global-states';
import { useContext } from 'react'

function Navbar() {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_KEY = 'api_key=4a2f5c42b8d2cf6178787473ff9d8970';
    const SEARCH_URL = BASE_URL + '/search/movie?'+ API_KEY;

    const {search, setSearch} = useContext(searchContext)
    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            const movieSearch = document.getElementById("search-bar").value;
            setSearch(SEARCH_URL+'&query='+movieSearch)
        }
    });
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
