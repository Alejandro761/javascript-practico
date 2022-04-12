function calcularModa(lista) {
    const listaCount = {};

    lista.map( function(elemento){
        if(listaCount[elemento]){ //si existe
            listaCount[elemento]++;
        } else{
            listaCount[elemento] = 1;
        }
    });

    //entries crea un Array
    const listaArray = Object.entries(listaCount).sort( 
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    const mayor = listaArray[listaArray.length-1];
    let moda = [];
    listaArray.map( function(elemento){
        if (elemento[1] == mayor[1]){
            moda.push(elemento);
        }    
    })
    // const moda = listaArray[listaArray.length-1];
    return moda;
}