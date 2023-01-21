//FUNCIONES

/*respuesta = prompt("¡Hola Sergio! ¿Como fue tu dia?");
if (respuesta == "bien"){
    alert("Me alegro");
} else {
    alert("Una pena");
}

//Primera funcion en JavaScript
function saludar(){
    respuesta = prompt("¡Hola Sergio! ¿Como fue tu dia?");

    if (respuesta == "bien"){
        alert("Me alegro");
    } else {
        alert("Que pena");
    }
}
saludar();

//Funcion con RETURN
function saludar(){
    alert("Hola a todos");
    return("La funcion se ejecuto correctamente");
}
let saludo = saludar();
document.write(saludo);

//Funciones con parametros
function suma(num1,num2){
    let res = num1+num2;
    document.write(res);
    document.write("<br>")
}
suma(12,32);
suma(22,67);

//Funcion con parametros mas compleja
function saludar(nombre){
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.write(frase);
}
saludar("Sergio");*/

//funcion flecha
const saludar = (nombre)=>{
    document.write("Hola, como estas?" + nombre);
}
saludar("Sergio");