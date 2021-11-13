import {useContext, useEffect} from "react"
import { wishListContext} from "../contexts/global-states"
import Header from "../components/Header"

function Wishlist() {
    useEffect(() => {
        document.title = "Rotten Potatoes | Wishlist"
      }, [])

    const {wishlistList, setWishlist} = useContext(wishListContext)
    console.log(wishlistList)
    return (
        <div className="content">
            <Header title="Wishlist"></Header>
        </div>
    )
}

export default Wishlist
