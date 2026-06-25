import Titulo from "../Titulo/Titulo";
import Subtitulo from "../Subtitulo/Subtitulo";

export default function Productos ({nombre, precio}) {
    return (
        <article>
            <Titulo texto={nombre}/>
            <Subtitulo texto="precio" valor={precio}/>
        </article>
    );
}