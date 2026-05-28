import { useContext } from "react";
import CarritoContext from "../context/CarritoContext";

function Productos() {
    const {carrito, setCarrito} = useContext(CarritoContext);

    return (
        <div>
            <form>
                <h2>Mouse</h2>
                <button>Agregar</button>
                <button>Quitar</button>
                <br>
                </br>
                <h2>Teclado</h2>
                <button>Agregar</button>
                <button>Quitar</button>
                <br>
                </br>
                <h2>Monitor</h2>
                <button>Agregar</button>
                <button>Quitar</button>
                <br>
                </br>
                <h2>Parlante</h2>
                <button onClick={(e) => setCarrito("0") >}>Agregar</button>
                <button>Quitar</button>
                <br>
                </br>
                <h2>Procesador</h2>
                <button>Agregar</button>
                <button>Quitar</button>
                <br>
                </br>
                <h2>Taregta Grafica</h2>
                <button>Agregar</button>
                <button>Quitar</button>
                <br>
                </br>
                <h2>Placa Madre</h2>
                <button>Agregar</button>
                <button>Quitar</button>
                <br>
                </br>
                <h2>Auriculares</h2>
                <button>Agregar</button>
                <button>Quitar</button>
                <br>
                </br>
                <h2>Memoria Ram</h2>
                <button>Agregar</button>
                <button>Quitar</button>
                <br>
                </br>
                <h2>Gabinete</h2>
                <button>Agregar</button>
                <button>Quitar</button>
            </form>
        </div>
    )
}

export default Productos;