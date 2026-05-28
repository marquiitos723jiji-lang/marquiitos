import Titulo from "../titulo";
import Subtitulo from "../subtitulo";
import "./producto.css";

export default function Producto ({nombre, precio}) {
    return (
        <article className="Producto">
            <Titulo texto={nombre}/>
            <Subtitulo titulo="precio" valor={precio}/>
        </article>
    )
}











/*export default function Perfil ({nombre, edad, email}) {
    return (
        <article>
            <Titulo texto={nombre}/>
            <Subtitulo titulo="edad" valor={edad}/>
            <Subtitulo titulo="email" valor={email}/>
        </article>
    )
}*/