import logo_kentang from '../img/potato.png';

import { wishListContext } from '../contexts/global-states';
import { useContext } from 'react';
import 'font-awesome/css/font-awesome.min.css';


function Movie(props) {
    
    const {wishlistList, setWishlist} = useContext(wishListContext)
    return (
        <div className="card">
            <img src={props.poster_url} alt="" className="poster"></img>
            <div className="rating">
                <img src={logo_kentang} alt=""></img>
                <p>{props.rating}</p>
                <a><i onClick={
                    () => setWishlist(wishlistList => [...wishlistList, {title : props.title, poster_url : props.poster_url}])} className="fa fa-heart" id="wishlist_button"></i></a>
            </div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Movie
