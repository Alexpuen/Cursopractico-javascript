
function CalcularPrecioConDescuento (precio,descuento){
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
return precioConDescuento;
}
