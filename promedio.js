const lista1 = [100, 200, 300, 500];



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

