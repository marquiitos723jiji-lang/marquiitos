import Titulo from "../titulo";
import Subtitulo from "../subtitulo";
import "./perfil.css";

export default function Domicilio ({nombre, edad, email}) {
    return (
        <article className="Perfil">
            <Titulo texto={nombre}/>
            <Subtitulo titulo="edad" valor={edad}/>
            <Subtitulo titulo="email" valor={email}/>
        </article>
    )
}