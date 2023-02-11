import "./style.css";

interface PropsSocialButton {
    link: string;
    titulo: string;
}

function SocialButton ({link, titulo}: PropsSocialButton){
    return (
        <div className="Botao-Social">
            <img src={link} alt={titulo}/>
        </div>
    );

}

export default SocialButton;