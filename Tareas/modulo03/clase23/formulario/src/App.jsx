import { useState } from 'react'

import './App.css'

function App() {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
    email: "",
  })

  const [error, setError] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
    email: "",
  })

  const [nuevosErrores, setNuevosErrores] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
    email: "",
  })  

  function validarFormulario() {
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
    const regexApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setError({
      nombre:
        user.nombre.length == 0 
          ? "por favor, compelte este campo"
            : !regexNombre.test(user.nombre)
            ? "el nombre solo puede contener letras y espacios"
              : "",

      apellido:
        user.apellido.length == 0
        ? "por favor, complete este campo"
          : !regexApellido.test(user.apellido)
          ? "el appellido solo puede tener letras y espacios"
            : "",

      edad:
        user.edad.length == 0
        ? "por favor, complete este campo"
          : "",

      sexo:
        user.sexo.length == 0
        ? "por favor, complete este campo "
          : "",

      email:
        user.email.length == 0
        ? "por favor, complete este campo"
          : !regexEmail.test(user.email)
          ? "el email debe tener un formato valido"
            : "",
    })
  }

  function manejarSubmit (event) {
    validarFormulario();
    event.preventDefault();
  }

  function handleChange (event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })

    if(error[event.target.name].length !== 0) {
      validarFormulario();
    }
  }

  return (
    <form onSubmit={manejarSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        name="nombre"
        value={user.nombre}
        onChange={handleChange} 
        />
      {error.nombre.length != 0 ? <label>{error.nombre}</label> : <></>}
      <label>Apellido</label>
      <input
        type="text"
        name="apellido"
        value={user.apellido}
        onChange={handleChange} 
        />
      {error.apellido.length != 0 ? <label>{error.apellido}</label> : <></>}
      <label>edad</label>
      <input
        type="number"
        name="edad"
        min= {0}
        max= {100}
        value={user.edad}
        onChange={handleChange}
        />
      {error.edad.length != 0 ? <label>{error.edad}</label> : <></>}
      <label>Sexo</label>
        <select
          type="text"
          name="sexo"
          value={user.sexo}
          onChange={handleChange}           
        >
          <option selected disabled>Seleccione su genero</option>
          <option>Masculino</option>
          <option>Femenino</option>
        </select>
      {error.sexo.length != 0 ? <label>{error.sexo}</label> : <></>}
      <label>email</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
       />
      {error.email.length != 0 ? <label>{error.email}</label> : <></>}
      <button type="Submit">Enviar</button>
    </form>
  );
}

export default App
