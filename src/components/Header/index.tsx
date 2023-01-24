import React from "react";
import Logo from "../../assets/image/logo.png"
import './style.css';
// import { Link } from "react-router-dom";

function Header(){
    return(
        <header id="menu">
            <div className="wrapper">
                <img className="logo" src={Logo} alt="Logo Spotify" />
                
                <nav>
                    <a href="">Premium</a>
                    <a href="">Suporte</a>
                    <a href="">Baixar  </a>
                    <span className="divisor"></span>
                    <a href="">  Inscrever-se</a>
                    <a href="">Entrar</a> 
                </nav>
            </div>
        </header>
    )
};

export default Header;