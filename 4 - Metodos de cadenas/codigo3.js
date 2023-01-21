/**
 * OBJETO MATH
 */

//LA RAIZ CUBICA DE UN NUMERO
//let numero = Math.cbrt(27);

//EL MAXIMO DE UN CONJUNTO
// let numero = Math.max(4,1,6,12,63,243,90);

//PARA QUE ME DE UN NUMERO PSEUDO-ALEATORIO ENTRE 0 Y 1
/*let numero = Math.random()*100;
numero = numero.toString();
num = numero[0] + numero[1];
if (numero[1] == "."){
    num = numero[0];
}*/

//PARA QUE ME DE UN NUMERO PSEUDO-ALEATORIO Y REDONDEADO  
let numero = Math.random()*100;
numero = Math.round(numero);

document.write(numero);