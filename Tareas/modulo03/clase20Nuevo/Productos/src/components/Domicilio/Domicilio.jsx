import Subtitulo from "../Subtitulo/Subtitulo";
import Titulo from "../Titulo/Titulo";

export default function Domicilio ({domicilio, calle, codPostal}) {
    return (
      <article>
        <Titulo texto={domicilio}/>
        <Subtitulo texto="calle" valor={calle}/>
        <Subtitulo texto="Codigo Postal" valor={codPostal}/>
      </article>
    );
}