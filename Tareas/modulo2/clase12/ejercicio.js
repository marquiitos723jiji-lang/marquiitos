//🎯 Parte 1

//Crear función calcularAreaRectangulo(base, altura) → retornar área

function calcularAreaRectangulo(base, altura){
       return area = base * altura
}

console.log(calcularAreaRectangulo(50, 40))
console.log("-------------------------------------------------")

//Crear función esMayorDeEdad(edad) → retornar true/false

function esMAyordeEdad(edad){
    if (edad >= 18){
        return true
    } else {
        return false
    }

}

console.log(esMAyordeEdad(15))
console.log("-------------------------------------------------")

//Usar variable global pais y local ciudad dentro de función → mostrar ambas

function paises(){
    var pais = "Argentina"
    let ciudad = "Cordoba"
    console.log("Vimes en el pais de " + pais + " y eres de " + ciudad)
}

paises()

console.log("-------------------------------------------------")

/*🎯 Parte 2 — Bonus

Crear función repetirTexto(texto, veces) → mostrar el texto repetido la cantidad de veces indicada*/

function repetirTexto(texto, veces){
    return texto.repeat(veces)
}

console.log(repetirTexto("hola", 3))

/*Comentario, hecho por Marcos Suarez (no se puede usar por ej: texto * veces  en el return para repetir Strings,
mejor usar por ej: return texto.repeat(veces))*/