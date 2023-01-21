const titulo = document.querySelector(".titulo");

//nombreDeClase ="grandeeee"
//let valor = titulo.classList.contains(nombreDeClase);

//if(valor){
//    document.write(`la clase "${nombreDeClase}" existe`);
//    titulo.classList.remove(nombreDeClase);
//} else {
//    document.write(`la clase "${nombreDeClase}" NO existe`);
//    titulo.classList.add(nombreDeClase);
//}

let resultado = titulo.textContent;
let resultado1 = titulo.innerHTML;
let resultado2 = titulo.outerHTML;

alert(resultado);
alert(resultado1);
alert(resultado2);