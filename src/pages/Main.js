import Header from "../components/Header"
import MovieList from "../components/MovieList"

import { modalContext } from "../contexts/global-states"

import {useContext, useEffect} from "react"

function Main() {
    const {modalToggle, setToggle} = useContext(modalContext)
    useEffect(() => {
        document.title = "Rotten Potatoes | Home"
        setToggle({
            title: '', 
            overview: '',
            rating: '',
            poster_url: '',
            language: '',
            release_date: '',
            show: false
        }, []);
      }, [])
    return (
        <div className="content">
            <Header title="Movie List"></Header>
            <MovieList></MovieList>
        </div>
    )
}

export default Main
