import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import Movie from './components/Movie';

import poster from './img/poster-test.jpg'

import React, {useState, useEffect} from "react"
import axios from "axios"

function App() {
    const API_KEY = 'api_key=4a2f5c42b8d2cf6178787473ff9d8970';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const SEARCH_URL = BASE_URL + '/search/movie?'+ API_KEY;


    const [wishlist, addWishList] = useState([]);
    const movie_list = []
    const fetchData = () => {
        return axios.get(API_URL)
            .then((response) => getData(response.data.results));
    }

    function getData(data){
        data.forEach(movie => {
            movie_list.push({title : movie.title, rating : movie.vote_average})
        });
    }

    fetchData()

    console.log(movie_list)

    return (
        <>
        <Navbar />
        <Header />
        <div className="movie-container" id="movie-container">
            {movie_list.map((movie) => 
                <Movie 
                    title={movie.title}
                    rating={20}
                    poster_url={poster}
                />
            )}
        </div>
        </>
    );
}

export default App;
