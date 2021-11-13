import React, { useContext } from 'react'
import {wishListContext} from '../contexts/global-states'

function WishlistList() {
    const {wishlistList, setWishlist} = useContext(wishListContext)
    console.log(wishlistList)
    return (
        <div>
            {
                wishlistList.map((wishlist) => {
                    const {title, poster_url} = wishlist;
                    return (
                        <p>{title}</p>
                    )
                })
            }
        </div>
    )
}

export default WishlistList
