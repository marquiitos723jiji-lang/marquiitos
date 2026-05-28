import Producto from "./components/producto/producto";
import Perfil from "./components/perfil/perfil";
import Subtitulo from "./components/subtitulo";
import Titulo from "./components/titulo";
import productos from "./data/productos";
import Domicilio from "./components/domicilio/domicilio";
import "./App.css";
import Parrafo from "./components/parrafo";

function app() {
  return (
    <>
      <Titulo texto="Disfruta de una Ciesta"/>
      <Parrafo texto="Seleccione el Producto que Quiera"/>
      <section className="contProductos">
        {
          productos.map((producto) => {
            return (<Producto nombre={producto.nombre} precio={producto.precio} />)
          })
        }
      </section>
      <Titulo texto="Tu Perfil"/>
      <section className="contPerfil">
        <Perfil nombre="Marcos" edad="18" email="marcuspalioolmost@gmail.com"/>
      </section>
      <Titulo texto="Tu Domicilio"/>
      <section className="contDomicilio">
        <Domicilio pais="Argentina" provincia="Cordoba" localidad="Villa de Maria" departamento="Rio Seco" codPostal="2244" calle={"Abraham Benchetrith"}/>
      </section>     
    </>
  );
}

export default app;