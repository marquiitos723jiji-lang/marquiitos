let numeros = [2, 4, 6, 8];

//1- encontrar el numero mayor

const mayor = numeros.reduce((max, num) =>{
    if (num > max) {
        return num;
    } else {
        return max; //
    }
});

console.log(mayor);
//no es .length
//