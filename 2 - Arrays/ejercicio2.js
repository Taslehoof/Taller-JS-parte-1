//parte 1 del EJERCICIO

// let free = false;

// const validarCliente = (time)=>{
//     let edad = prompt("Cual es tu edad?");
//     if (edad>18){
//         if (time >= 2 && time <7  && !free){
//             alert("podes pasar gratis porque sos la primer persona despues de las 2 AM");
//             free=true;
//         } else {
//             alert(`son las ${time}:00 Hs podes pasar, pero tenes que pagar la entrada`);
//         }
//     } else {
//         alert("mira papu, sos menor de edad por ende no vas a pasar, MAQUINOLA");
//     }
// }
// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.3);
// validarCliente(3);

//parte 2 del EJERCICIO

/*let cantidad = prompt("cuantos alumnos son ?");
let alumnosTotales =[];

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
    ________Asencias: <b>${30 - alumnosTotales[alumno][1]} </b>`;
    if(30 - alumnosTotales[alumno][1]>18){
        resultado +="<b style='color:red'>REPROBADO POR INASISTENCIA</b><br><br>";
    } else {
        resultado += "<br><br>"
    }
    document.write(resultado);
}*/

//parte 3 del EJERCICIO
const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
   return parseInt(num1) - parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1,num2)=>{
   return parseInt(num1) * parseInt(num2);
}

alert("¿Que operacion desea realizar?");
let operacion = prompt("1: suma, 2: resta, 3: dividir, 4: multiplicacion");

if (operacion == 1){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
} else if (operacion == 2){
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
} else if (operacion == 3){
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
} else if (operacion == 4){
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
} else {
    alert("no se ha encontrado la operacion");
}