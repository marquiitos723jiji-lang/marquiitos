let usuario = {
    nombre: "Marcos",
    edad: 18,
    email: "marcosmiramorzasisi@gmail.com",
    activo: true,
    saludar(){
        console.log("Hola, " + "soy " + this.nombre + ", tengo " + this.edad + " anos " + "y vivo en " + usuario.pais)
    },
    esMayorDeEdad(){
        if (this.edad >= 18){
            return true
        } else {
            return false
        }
    },
}

usuario.esMayorDeEdad()
usuario.edad = 15
usuario.pais = "Argentina"
usuario.saludar()
console.log(usuario.esMayorDeEdad())







