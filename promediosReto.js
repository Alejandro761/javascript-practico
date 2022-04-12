//media geometrica
const n = [10, 20, 30];
let producto = 1;

for (const i of n) {
    producto *= i;
}

console.log('El resultado es: ' + Math.pow(producto, 1/n.length));

//media armonica
let suma = 0;

for (const i of n) {
    suma += 1/i;
}

console.log('El resultado es: ' + n.length/suma);