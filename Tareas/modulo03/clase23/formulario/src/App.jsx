import { useState } from 'react'

import './App.css'

function App() {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
    email: ""
  });

  const [error, setError] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
    email: ""
  })

  const [submittedUsers, setSubmittedUsers] = useState ({
    datosEnviados: ""
  })

  const [mensajeError, setMensajeError] = useState({
    mensajeError: ""
  })

  function validarFormulario() {
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setError({
      nombre: 
      user.nombre.length == 0
        ? "Es obligatorio llenar el campo"
        : !regexNombre.test(user.nombre)
          ? "El nombre solo puede contener letras y espacios"
          : "",

      apellido:
      user.apellido.length == 0
        ? "Es obligatorio llenar el campo"
        : !regexNombre.test(user.apellido)
          ? "El apellido solo puede contener letras y espacios"
          : "",

      edad:
      user.edad.length == 0
        ? "Es obligatorio llenar el campo"
        : "",
      
      sexo:
      user.sexo.length == 0
        ? "Es obligatorio llenar el campo"
        : "",

      email:
       user.email.length == 0
        ? "Es obligatorio llenar el campo"
         : !regexEmail.test(user.email)
          ? "El email debe tener un formato valido"
         : ""
    });
  }

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: [event.target.value]
    });
  }

  function manejarSubmit(event) {
    validarFormulario();
    mostrarDatosEnPantalla();
    event.preventDefault();
  }

  function mostrarDatosEnPantalla (){
    setSubmittedUsers({
      datosEnviados:
       user.nombre.length != 0
        & error.nombre.length == 0
         & user.apellido.length != 0
          & error.apellido.length == 0
           & user.edad.length != 0
            & error.edad.length == 0
             & user.sexo.length != 0
              & error.sexo.length == 0
               & user.email.length != 0
                & error.email.length == 0
                 ? "Tu Formulario se envio exitosamente " + " Nombre: " + user.nombre + " Apellido: " + user.apellido + " Edad: " + user.edad + " " + " Sexo: " + user.sexo
                  : "!Error!, Verifique los campos antes de Enviar"
    })
  }



  function limpiarFormulario(){
    setUser({
      nombre: "",
      apellido: "",
      edad: "",
      sexo: "",
      email: ""
    })
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
      <label>Edad</label>
      <input
        type="number" 
        name="edad"
        min={10}
        max={100}
        value={user.edad} 
        onChange={handleChange}
      />
      {error.edad.length != 0 ? <label>{error.edad}</label> : <></>}
      <label>Sexo</label>
      <select
        name="sexo" 
        value={user.sexo} 
        onChange={handleChange}
      >
        <option value="">Seleccione una opcion</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>

      {error.sexo.length != 0 ? <label>{error.sexo}</label> : <></>}
      <label>Email</label>
      <input 
        type="text" 
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      {error.email.length != 0 ? <label>{error.email}</label> : <></>}
      <button>Enviar</button>
      <button type="button" onClick={limpiarFormulario}>
        Limpiar Formulario</button>
      {submittedUsers ? <label>{submittedUsers.datosEnviados}</label> : <></>}
    </form>
  );
}

export default App

/*datosEnviados:
        user.nombre.length != 0
        & error.nombre.length == 0
         & user.apellido.length != 0
          & error.apellido.length == 0
           & user.edad.length != 0
            & error.edad.length == 0
             & user.sexo.length != 0
              & error.sexo.length == 0
               ? "Datos Enviados:" + user.nombre + user.apellido + user.edad + user.sexo
                : "" */