//cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Lados del cuadrado: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

console.log("Perímetro del cuadrado: " + perimetroCuadrado(ladoCuadrado) + " cm");

function areaCuadrado(lado){
    return lado * lado;
} 

console.log("Areaa del cuadrado: " + areaCuadrado(ladoCuadrado) + " cm²");

console.groupEnd();

//triangulo

console.group('Triangulo');
 
function perimetroTriangulo(lado, lado2, base){
    return (lado+base+lado2);
}

// console.log("Perímetro del triangulo: " + perimetroTriangulo + " cm");

function areaTriangulo(lado, lado2, base){
    let altura;
    if(lado==lado2){
        altura = Math.sqrt(lado**2 - (base/2)**2)
        return (base*altura)/2;
    }
} 

// console.log("Area del triangulo: " + areaTriangulo + " cm²");

console.groupEnd();

console.group('Circulo');
/* 
const radioCirculo = 4;
const diametro = radioCirculo*2;*/
const PI = Math.PI; 

function diametro(radio){
    return radio*2;
}

function perimetroCirculo(radio) {
    return diametro(radio)*PI;
}

function areaCirculo(radio) {
    return radio * radio * PI;
}

// console.log("Perímetro del circulo: " + perimetroCirculo + " cm");
// console.log("Area del circulo: " + areaCirculo + " cm²");
console.groupEnd();

//interacción con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById('InputLadoTriangulo1');
    const inputLado2 = document.getElementById('InputLadoTriangulo2');
    const inputBase = document.getElementById('InputBaseTriangulo');
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1,valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById('InputLadoTriangulo1');
    const inputLado2 = document.getElementById('InputLadoTriangulo2');
    const inputBase = document.getElementById('InputBaseTriangulo');
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);

    const area = areaTriangulo(valueLado1, valueLado2,valueBase);
    alert(area);
}

function calcularAltura(){
    const inputLado1 = document.getElementById('InputLadoTriangulo1');
    const inputLado2 = document.getElementById('InputLadoTriangulo2');
    const inputBase = document.getElementById('InputBaseTriangulo');
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);
    
    if (valueLado1 == valueLado2 && valueLado1!=valueBase) {
        alert('La altura del triángulo es: ' + Math.sqrt(valueLado1*valueLado1- (valueBase/2)*(valueBase/2)));
        //numero**2 = numero al cuadrado
    }  else {
        alert('El triángulo no es isósceles.');
    }
}