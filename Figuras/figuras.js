//Codigo Cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado) {
    return lado * 4;
};
function areaCuadrado (lado) {
    return lado * lado
};

console.groupEnd();

//Codigo triangulo
console.group("Triangulos");
function perimetroTriangulo (lado1,lado2,ladobase) {
    return lado1 + lado2 + ladobase
};
function areaTriangulo (lado1,lado2,ladobase){
    const semiPer = ((0.5)*(lado1+lado2+ladobase))
    return Math.sqrt((semiPer)*(semiPer-lado1)*(semiPer-lado2)*(semiPer-ladobase)) 
};
console.groupEnd();

//Codigo circulo
console.group("circulos");
//const radioCirculo = 4;
function diametroCirculo (radio) {
    return radio*2;
}
const PI = Math.PI;
//console.log("El radio del circulo mide: " + radioCirculo + "cm");
//console.log("El diametro del circulo mide: " + diametroCirculo + "cm");
//console.log("El valor de PI es: " + PI + "cm");
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return PI*diametro
}
//console.log("El perimetro del Circulo es: " + perimetroCirculo + "cm");
function areaCirculo(radio){

 return PI*(radio*radio);
}
//console.log("El área del Circulo es: " + areaCirculo + "cm");
console.groupEnd();

function calcularperimetroCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
}
function calcularareaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function calcularperimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputbaseTriangulo");
    const lado1  = Number(input1.value);
    const lado2  = Number(input2.value);
    const ladobase  = Number(input3.value);

    const perimetroTri = perimetroTriangulo(lado1,lado2,ladobase);
    alert(perimetroTri);
};

function calcularareaTriangulo (){
    const TR4 = document.getElementById("InputTriangulo1");
    const TR5 = document.getElementById("InputTriangulo2");
    const TR6 = document.getElementById("InputbaseTriangulo");
    const L4  = Number(TR4.value);
    const L5  = Number(TR5.value);
    const L6  = Number(TR6.value);
    const areaTri = areaTriangulo(L4,L5,L6);
    alert(areaTri);  
};
function calcularperimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularareaCirculo(){
const input = document.getElementById("InputRadio");
const value = input.value;

const area = areaCirculo(value);
alert(area);
}