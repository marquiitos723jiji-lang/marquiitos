import productos from './data/productos'
import './App.css'
import Parrafo from './components/Parrafo/Parrafo'
import Productos from './components/Producto/Producto'
import Titulo from './components/Titulo/Titulo'
import usuarios from './data/perfilUsuario'
import PerfilUsuario from './components/Perfil/Perfil'
import domicilio from './data/domicilio'
import Domicilio from './components/Domicilio/Domicilio'

function App() {
  return (
    <>
      <h1>Venta de Productos</h1>
      <Parrafo texto="Conoce nuestros mejores productos"/>
      <section>
        {productos.map((producto) => {
          return (
            <Productos 
              nombre={producto.nombre} 
              precio={producto.precio}
            />
          );          
        })}
      </section>
      <h1>"Tu Usuario"</h1>
      <section className="seccionUsuarios">        
        {usuarios.map((usuario) => {
          return (
            <PerfilUsuario
            nombre={usuario.nombre}
            edad={usuario.edad}
            email={usuario.email}
            />
          );      
        })}
      </section>
      <h1>"Tu domicilio"</h1>
      <section>
        {domicilio.map((domicil) => {
          return (
            <Domicilio 
              domicilio={domicil.domicilio}
              calle={domicil.calle}
              codPostal={domicil.codPostal}
            />
          );
        })}
      </section>
    </>
  );
}

export default App
