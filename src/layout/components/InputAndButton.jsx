import React from "react";
import style from '../Header.module.css'
import InputSearch from "./InputSearch";
import AnchorButtonsOut from "./AnchorButtonsOut";
function InputAndButton() {
    return(
        <div className= {style.InputAndButton}>
            <InputSearch />
            <AnchorButtonsOut />
        </div>
    )
}
export default InputAndButton;