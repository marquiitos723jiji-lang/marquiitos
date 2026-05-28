import { useContext } from "react";
import UserContext from "../context/UserContext";

function Navbar() {
  const {usuario, setUsuario} = useContext(UserContext);

  return (
    <div>
      {!usuario && (
        <button
          onClick={() =>
            setUsuario({
              nombre: "Marcos",
              apellido: "Suarez",
              edad: "18",
              email: "Marcosarroba@gmail.com"               
            })
          }
        >
          Login
        </button>
      )}
      {usuario && <h2>Hola {usuario.nombre}</h2>}
    </div>
  );


}


export default Navbar;