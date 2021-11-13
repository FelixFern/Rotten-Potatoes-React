import './App.css';
import './style/main.css'
import './style/wishlist.css'

import { wishListContext } from './contexts/global-states';

import Navbar from './components/Navbar';

import Main from './pages/Main';
import Wishlist from './pages/Wishlist'

import {useState} from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom'

function App() {
    const [wishlistList, setWishlist] = useState([])

    return (
        <wishListContext.Provider value={{ wishlistList, setWishlist}}>
            <Router>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
            </Router>
        </wishListContext.Provider>
    );
}

export default App;
