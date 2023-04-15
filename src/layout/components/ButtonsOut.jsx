import React from "react";
import style from '../Header.module.css'
function Buttons(props) {
    return <a className={`${style.buttonsOut} ${style[props.classStyle||""]}`}>{ props.name }</a>
}
export default Buttons;