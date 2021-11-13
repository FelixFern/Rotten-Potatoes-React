import React, { useContext } from 'react'
import {wishListContext} from '../contexts/global-states'
import WishlistCard from './WishlistCard';

function WishlistList() {
    const {wishlistList, setWishlist} = useContext(wishListContext)
    return (
        <div>
            {
                wishlistList.map((wishlist) => {
                    const {title, poster_url} = wishlist;
                    return (
                        <WishlistCard
                            title = {title}
                            poster_url = {poster_url}
                        ></WishlistCard>
                    )
                })
            }
        </div>
    )
}

export default WishlistList
