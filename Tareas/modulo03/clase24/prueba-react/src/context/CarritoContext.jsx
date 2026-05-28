import { createContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider ({children}) {
    const [carrito, setCarrito] = useState(null);

    return (
      <CarritoContext.Provider>
        {children}
      </CarritoContext.Provider>
    );
}

export default CarritoContext;