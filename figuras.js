//Codigo Cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo triangulo
console.group("Triangulos");
const ladotriangulo1 = 5;
const ladotriangulo2 = 7;
const basetriangulo = 9;
const alturatriangulo = 5.5;
console.log("El primer lado del triangulo mide: " + ladotriangulo1 + "cm");
console.log("El segundo lado del triangulo mide: " + ladotriangulo2 + "cm");
console.log("El tercer lado del triangulo mide: " + basetriangulo + "cm");
console.log(
    "Los lados del triangulo miden: " 
+ladotriangulo1 
+ "cm, "
+ ladotriangulo2 
+ "cm, " 
+ basetriangulo 
+ "cm"
);console.log("La altura del triangulo es de: " + alturatriangulo + "cm");
const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 +basetriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
const areaTriangulo = (basetriangulo * alturatriangulo)/2;
console.log("El área del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Codigo circulo
console.group("circulos");
const radioCirculo = 4;
const diametroCirculo =radioCirculo*2;
const PI = Math.PI;
console.log("El radio del circulo mide: " + radioCirculo + "cm");
console.log("El diametro del circulo mide: " + diametroCirculo + "cm");
console.log("El valor de PI es: " + PI + "cm");
const perimetroCirculo = PI*diametroCirculo
console.log("El perimetro del Circulo es: " + perimetroCirculo + "cm");
const areaCirculo = PI*(radioCirculo*radioCirculo);
console.log("El área del Circulo es: " + areaCirculo + "cm");
console.groupEnd();