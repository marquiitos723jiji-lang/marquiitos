console.log("Mostrar numeros del 1 al 100")
for(i = 1; i <= 100; i++){
    console.log(i)
}

console.log("---------------------------------")
console.log("Mostrar numeros impares")
for(i = 1; i <= 100; i++){
    if (i % 2 != 0){
        console.log(i)
    }
}

console.log("---------------------------------")
console.log("Mostrar multiplos de 3")
for(i = 1; i <= 100; i++){
    if (i % 3 == 0){
        console.log(i)
    }
}

console.log("---------------------------------")
console.log("Calcular Suma del 1 al 100")

let contador = 0
for(let i = 1; i <= 100; i++){
   contador += i
}

console.log(contador)