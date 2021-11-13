import Header from "../components/Header"
import MovieList from "../components/MovieList"

import {useEffect} from "react"

function Main() {
    useEffect(() => {
        document.title = "Rotten Potatoes | Home"
      }, [])
    return (
        <div className="content">
            <Header title="Movie List"></Header>
            <MovieList></MovieList>
        </div>
    )
}

export default Main
