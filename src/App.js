import './App.css';
import './style/main.css'
import './style/wishlist.css'

import Navbar from './components/Navbar';

import Main from './pages/Main';
import Wishlist from './pages/Wishlist'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
        </Router>
    );
}

export default App;
