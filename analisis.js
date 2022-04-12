const salariosMX = mexico.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosMXSorted = salariosMX.sort(
    function(salarioA, salarioB) {
        return salarioA - salarioB;
    }
);

function esPar(n) {
    return (n % 2 === 0);
    /* if (n%2 == 0){
        return true;
    } else {
        return false;
    } */
}

function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    
    // for (let i=0; i<lista.length; i++){
    //     sumaLista += lista[i];
    // }
    
    const sumaLista = lista.reduce(
        //nuevoElemento será la variable que recorrera cada valor del array
        //valor acumulado inicia en 0, pero en la siguiente iteración tendrá el valor de la suma que retorna función
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista1 = sumaLista/lista.length;
    return promedioLista1;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2] );
        return mediana;
    } else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

console.log(salariosMXSorted[19])

const medianaGeneralMX = medianaSalarios(salariosMXSorted);
/* mediana del top 10% */
const spliceStart = (salariosMXSorted.length * 90 /100 );
const spliceCount = salariosMXSorted.length - spliceStart;

//utilizar mejor slice para no alterar el array, ya que salariosMXSorted se le van a quitar los elementos que se le dieron a salariosMXTop
const salariosMXTop10 = salariosMXSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosMXTop10);

console.log({medianaGeneralMX, medianaTop10, });