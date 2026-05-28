import Subtitulo from "../subtitulo";
import "./domicilio.css";

export default function Domicilio ({pais, provincia, localidad, departamento, codPostal, calle}) {
    return (
        <form className="Domicilio">
           <Subtitulo titulo="pais" valor={pais}/>
           <Subtitulo titulo="provincia" valor={provincia}/>
           <Subtitulo titulo="localidad" valor={localidad}/>
           <Subtitulo titulo="departamento" valor={departamento}/>
           <Subtitulo titulo="codPostal" valor={codPostal}/>
           <Subtitulo titulo="calle" valor={calle}/>
           <button>Enviar</button>
        </form>
    )
}