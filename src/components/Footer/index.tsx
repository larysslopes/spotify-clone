import React from "react";
import './style.css';
import Logo from "../../assets/image/logo.png";
import IconInsta from "../../assets/image/insta.png";
import List from "../List";
import SocialButton from "../SocialButton";

const listaEmpresa = [
    {
      nome: "Sobre",
      link: "#",
    },
    {
      nome: "Empregos",
      link: "#",
    },
    {
      nome: "For the Record",
      link: "#",
    },
  ];

  
const listaComunidades = [
    {
      nome: "Para Artistas",
      link: "#",
    },
    {
      nome: "Desenvolvedores",
      link: "#",
    },
    {
      nome: "Publicidade",
      link: "#",
    },
    {
      nome: "Investidores",
      link: "#",
    },
    {
      nome: "Fornecedores",
      link: "#",
    },
  ];
  
  const listaLinks = [
    {
      nome: "Suporte",
      link: "#",
    },
    {
      nome: "Player da Web",
      link: "#",
    },
    {
      nome: "Aplicativo móvel grátis",
      link: "#",
    },
  ];


function Footer(){
    return (
        <footer id="footer">
            <div className="wrapper">
                <img className="logo" src={Logo} alt="Logo Spotify" />
                <List titulo="EMPRESA" itens={listaEmpresa} />
                <List titulo="COMUNIDADES" itens={listaComunidades} />
                <List titulo="LINKS ÚTEIS" itens={listaLinks} />
            </div>

            <div className="redes">
              <SocialButton link={IconInsta} titulo="insta" />
              <SocialButton link={IconInsta} titulo="insta" />
              <SocialButton link={IconInsta} titulo="insta" />
            </div>
        </footer>
    )
    }

export default Footer;