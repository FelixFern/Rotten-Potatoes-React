import { useContext } from 'react'
import { wishListContext } from '../contexts/global-states'

function WishlistCard(props) {
    const {wishlistList, setWishlist} = useContext(wishListContext)
    return (
        <div className="card">
            <img src={props.poster_url} alt="" className="poster"></img>
            <div className="rating">
            <i onClick={
                    () => {
                        const wishlistListCopy = wishlistList;
                        var matchedIndex = wishlistListCopy.map(function (obj) { return obj.title; }).indexOf(props.title);
                        wishlistListCopy.splice(matchedIndex, 1)
                        setWishlist(wishlistList => [...wishlistListCopy]);
                    }} className="fa fa-heart" id="wishlist_button"></i>
                {/* <i onClick={
                    () => {
                        const wishlistListCopy = wishlistList;
                        var matchedIndex = wishlistListCopy.map(function (obj) { return obj.title; }).indexOf(props.title);
                        wishlistListCopy.splice(matchedIndex, 1)
                        setWishlist(wishlistListCopy)
                        console.log(wishlistList)
                    }} className="fa fa-heart" id="wishlist_button"></i> */}
            </div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default WishlistCard
