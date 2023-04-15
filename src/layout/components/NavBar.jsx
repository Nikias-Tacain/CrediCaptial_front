import React from "react";
import style from '../Header.module.css'
function NavBar() {
    return(
        <div>
            <ul className={style.header__navbar__lista}>
                <li className={style.header__navbar__lista__logo}>Logo</li>
                <li><a href="">Solicitar un Crédito</a></li>
                <li><a href="">Oportunidades</a></li>
                <li><a href="">Ayuda</a></li>
                <li><a href="">$</a></li>
            </ul>
        </div>
    )
}
export default NavBar;