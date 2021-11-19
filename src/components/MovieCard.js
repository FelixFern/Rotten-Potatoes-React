import logo_kentang from '../img/potato.png';

import { wishListContext, modalContext } from '../contexts/global-states';
import { useContext } from 'react';
import 'font-awesome/css/font-awesome.min.css';


function MovieCard(props) {
    const {wishlistList, setWishlist} = useContext(wishListContext)
    const {modalToggle, setToggle} = useContext(modalContext)
    return (
        <div className="card">
            <img onClick={() => {
                setToggle({
                    title: props.title, 
                    overview: props.overview,
                    rating: props.rating,
                    poster_url: props.poster_url,
                    language: props.language,
                    release_date: props.release_date,
                    show: true
                })
            }} src={props.poster_url} alt="" className="poster"></img>
            <div className="rating">
                <img src={logo_kentang} alt=""></img>
                <p>{props.rating}</p>
                <i onClick={
                    () => {
                        const wishlistListCopy = wishlistList;
                        var matchedIndex = wishlistListCopy.map(function (obj) { return obj.title; }).indexOf(props.title);
                        if (matchedIndex == -1) {
                            setWishlist(wishlistList => [...wishlistList, {title : props.title, poster_url : props.poster_url}]);
                        } else {
                            alert(props.title + " is already in your wishlist")
                        }
                    }} className="fa fa-heart" id="wishlist_button"></i>
            </div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default MovieCard
