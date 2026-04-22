//1. Invertir un array sin usar elementos avanzados

let consolas = ["ps1", "ps2", "xbox360", "nintendo switch"]

for(let i = consolas.length; i >= 0; i--){
    console.log(consolas[i])
}

//2. Crear un array y eliminar todos sus elementos usando pop en un loop

let animales = ["oveja", "oso", "vaca", "leopardo"]

for(let i = animales.length - 1; i >= 0; i--){
    animales.pop()

}

console.log(animales)

//3. Crear un array y duplicar todos sus elementos en consola (Pueden usar strings para que sea mas facil):

let herramientas = ["martillo", "cerrucho", "taladro", "pinsas", "tenasa"]

for(let i = 0; i < herramientas.length; i++){
    let linea = ""

    for(let j = 0; j < 2; j++){
        linea += herramientas[i] + ""
    }

    console.log(linea)
}
