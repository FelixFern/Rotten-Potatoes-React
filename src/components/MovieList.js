import Movie from "../components/Movie"

import axios from "axios";
import { useState } from "react"; 


function MovieList() {
    const API_KEY = 'api_key=4a2f5c42b8d2cf6178787473ff9d8970';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const SEARCH_URL = BASE_URL + '/search/movie?'+ API_KEY;

    const movie_list = []

    const [wishlist, addWishList] = useState([]);
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
        <div className="movie-container" id="movie-container">
            {
            movie_list.map((movie) => 
                <Movie
                    title = {movie.title}
                ></Movie>
            )}
        </div>
    )
}

export default MovieList

