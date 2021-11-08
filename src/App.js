import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import Movie from './components/Movie';

function App() {


    return (
        <>
        <Navbar />
        <Header />
        <div className="movie-container">
            <Movie />
        </div>
        
        </>
    );
}

export default App;
