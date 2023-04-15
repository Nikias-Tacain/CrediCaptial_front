import React from "react";
import style from '../Header.module.css'
import Buttons from "./ButtonsOut";
function AnchorButtonsOut() {
    return(
        <div className= {style.AnchorButtonsOut}>
            <Buttons name="Registrar"/>
            <Buttons name="Ingresar" classStyle="ingresar"/>
        </div>
    )
}
export default AnchorButtonsOut;