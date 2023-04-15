import React from "react";
import style from './Home.module.css'
function CardAuth(props) {
    return(
        <div className="CardAuth">
            <div className="CardAuth__img">
                <img src={ props.img } alt={ props.alt }/>
            </div>
            <p>{ props.text }</p>
        </div>
    )
}
export default CardAuth;