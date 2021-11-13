import { useState, useEffect, useContext } from "react"; 
import MovieCard from './MovieCard';
import '../App.css'

import axios from "axios";

function MovieList() {
    const API_KEY = 'api_key=4a2f5c42b8d2cf6178787473ff9d8970';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const SEARCH_URL = BASE_URL + '/search/movie?'+ API_KEY;

    const [movieList, setMovie] = useState([]);
    const [search, setSearch] = useState(API_URL)

    useEffect(() => {
        axios.get(search).then(res => {
            setMovie(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            {movieList.map((movie) => {
                const {title, id, poster_path, vote_average} = movie;
                function percentage(rating) {
                    const percent = rating * 10
                    return percent.toString() + "%"
                }
                return (
                    <MovieCard
                        rating = {percentage(vote_average)}
                        title = {title}
                        poster_url = {IMG_URL + poster_path}
                    ></MovieCard>
                )
            })}
        </div>
    )
}

export default MovieList

