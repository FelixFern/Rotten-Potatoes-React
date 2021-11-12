import logo_kentang from '../img/potato.png';

import 'font-awesome/css/font-awesome.min.css';

function Movie(props) {
    return (
        <div className="card">
            <img src={props.poster_url} alt="" className="poster"></img>
            <div className="rating">
                <img src={logo_kentang} alt=""></img>
                <p>{props.rating}</p>
                <a onClick><i className="fa fa-heart" id="wishlist_button"></i></a>
            </div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Movie
