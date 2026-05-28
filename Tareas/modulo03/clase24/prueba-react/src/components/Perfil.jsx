import { useContext } from "react"; 
import UserContext from "../context/UserContext";

function Perfil() {
  const {usuario, setUsuario} = useContext(UserContext);

    return (      
        <div>
            {usuario ? (
            <div>
                <h1>{usuario.nombre}</h1>
                <p>{usuario.apellido}</p>
                <p>{usuario.edad}</p>
                <p>{usuario.email}</p>
                <button onClick={() => setUsuario(null)}>LogOut</button>
            </div>
            ) : (
            <h1>No estas Logueado</h1>
            )}
        </div>       
    )
}

export default Perfil;