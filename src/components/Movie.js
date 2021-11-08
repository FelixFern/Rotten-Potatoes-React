import logo_kentang from '../img/potato.png';
import poster from '../img/poster-test.jpg'

function Movie() {
    return (
        <div className="card">
            <img src={poster} alt="" className="poster"></img>
            <div className="rating">
                <img src={logo_kentang} alt=""></img>
                <p>20</p>
            </div>
            <h2>Star wars</h2>    
        </div>
    )
}

export default Movie
