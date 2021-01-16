let parameter1 = "Szkoła Programowania Akademia 108";
let parameter2 = "a";

function howManyTimes(par1, par2) {
    let tablica = par1.split("");
    let suma = 0;
    for (let i = 0; i < tablica.length; i++) {
        if (tablica[i] === par2) {
            suma += 1;
        }
    }
    return suma;
};

console.log(howManyTimes(parameter1, parameter2));
