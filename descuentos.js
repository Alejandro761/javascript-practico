// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio* (porcentajePrecioConDescuento) / 100);
    return precioConDescuento;
}

/* console.log({
    precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento
}); */

function priceDiscount(){
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById('InputDiscount');
    const discountValue = inputDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    
    const resultP = document.getElementById('ResultP');
    resultP.innerHTML = 'El precio con descuento son: $' + precioConDescuento;
}

const cupones = ['bienvenido', 'abril2022', 'veranoHSBC'];


function priceCupon() {
    const inputPrice = document.getElementById('InputPrice2');
    const priceValue = inputPrice.value;
    const inputCupon = document.getElementById('InputCupon');
    const CuponValue = inputCupon.value;

    const resultPCupon = document.getElementById('ResultPCupon');
    
    if(CuponValue == cupones[0]){
        const precioConCupon = calcularPrecioConDescuento(priceValue, 10);
        resultPCupon.innerHTML = 'El precio con el cupon es: $' + precioConCupon;
    }
    else if(CuponValue == cupones[1]){
        const precioConCupon = calcularPrecioConDescuento(priceValue, 20);
        resultPCupon.innerHTML = 'El precio con el cupon es: $' + precioConCupon;
    }
    else if(CuponValue == cupones[2]){
        const precioConCupon = calcularPrecioConDescuento(priceValue, 35);
        resultPCupon.innerHTML = 'El precio con el cupon es: $' + precioConCupon;
    }
    else {
        resultPCupon.innerHTML = 'El cupon no existe:(';
    }
}

