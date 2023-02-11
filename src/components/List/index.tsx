import "./style.css";

interface Item {
    nome: string;
    link: string;
}

interface PropsLista {
    titulo: string;
    itens: Item[];
}

function List({titulo, itens}: PropsLista) {
    return (
        <ul className="lista">
            <h4>{titulo}</h4>

            {itens.map((item) => (
                <li>
                <a href={item.link}>{item.nome}</a>
                </li>
        ))}
        
        </ul>
    )
}

export default List;