import logo from '../img/logo-white.png';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div class="nav-container">
                    <a href="#"><img src={logo} alt=""></img></a>
                    <input type="text" name="search-movie" className="search-bar" id="search-bar" placeholder="Search Movie, TV Show, or Series"></input>
                    <ul className="nav-list">
                        <li><a href="#" id="current">Movie</a></li>
                        <li><a href="#">Wishlist<i className="fa fa-heart"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
