import { useContext } from "react";
import CarritoContext from "../context/CarritoContext";

function Carrito () {
    const {carrito, setCarrito} = useContext(CarritoContext)

    return (
        <div>
            
            setCarrito(
              nombre: "Marcos",
              apellido: "Suarez",
              edad: "18",
              email: "Marcosarroba@gmail.com"
            )
                
        </div>
    ) 
}

export default Carrito;