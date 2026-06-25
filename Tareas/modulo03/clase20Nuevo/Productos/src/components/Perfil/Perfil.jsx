import Subtitulo from "../Subtitulo/Subtitulo";
import Titulo from "../Titulo/Titulo";

export default function PerfilUsuario ({nombre, edad, email}) {
    return (
      <article>
         <Titulo texto={nombre}/>
         <Subtitulo texto="edad" valor={edad}/>
         <Subtitulo texto="email" valor={email}/>
      </article>  
    );
}