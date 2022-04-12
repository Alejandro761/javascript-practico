function calcularMediaAritmetica(lista){
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

// const lista1 = [100,200,500,41865];


function esPar(numerito) {
    if(numerito%2 == 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    
    let mediana;
    const mitadLista = parseInt(lista.length/2);
    
    if( esPar(lista.length) ){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedio = calcularMediaAritmetica( [elemento1, elemento2] );
        mediana = promedio;
    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}

function ordenarLista(lista){
    
}