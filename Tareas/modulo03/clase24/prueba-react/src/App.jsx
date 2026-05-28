import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Perfil from "./components/Perfil";
import { CarritoProvider } from "./context/CarritoContext";
import Carrito from "./components/Carrito"
import Productos from "./components/Productos";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Perfil />
      </UserProvider>
      <CarritoProvider>
        <Carrito />
        <Productos />
      </CarritoProvider>
    </>
  );
}

export default App;
