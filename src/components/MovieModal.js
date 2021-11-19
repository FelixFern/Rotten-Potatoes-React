import React from 'react'
import { useContext } from 'react'
import { modalContext } from '../contexts/global-states'

import logo_kentang from '../img/potato.png'

function percentage(rating) {
    const percent = rating * 10
    return percent.toString() + "%" 
}

function MovieModal(props) {
    const {modalToggle, setToggle} = useContext(modalContext)
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    return (
        <div id="popup" className={showHideClassName}>
            <div class="popup-content">
                <div class="left-side-popup">
                    <img class="popup-poster" src={props.poster_url} alt=""></img>
                </div>
                <div class="right-side-popup">
                    <div class="rating">
                        <img src={logo_kentang} alt=""></img>
                        <p>{percentage(props.rating)}</p>
                    </div>
                    <h2>{props.title}</h2>
                    <p>Language : {props.language}</p>
                    <p class="overview">{props.overview}</p>
                    <p>Release Date : {props.release_date}</p>
                    <button class="back-button" onClick={
                        () => {
                            console.log("click");
                            setToggle({
                                title: '', 
                                overview: '',
                                rating: '',
                                poster_url: '',
                                language: '',
                                release_date: '',
                                show: false
                            })
                        }
                    }>Back</button>
                </div>
            </div>
        </div>
    )
}

export default MovieModal
