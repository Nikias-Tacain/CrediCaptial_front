import React from "react";
import NavBar from "./components/NavBar";
import style from './Header.module.css'
import InputAndButton from "./components/InputAndButton";
function Header() {
    return(
        <div className={style.header}>
            <NavBar />
            <InputAndButton />
        </div>
    )
}
export default Header;