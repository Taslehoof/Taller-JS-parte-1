/*
let recipiente = "barbijo";
alert(recipiente);

let nombre = prompt("Hola rancio");
alert(nombre);


let numero = 10;
numero +=5;
document.write(numero);

saludo = "¡Hola pedro! ";
pregunta = "¿Como estas?";

numero1 = 53;
numero2 = 8;
frase = "" + numero1 + numero2;
//frase = saludo + pregunta;
document.write(frase);

nombre = "Sergio Agustin Conti";
frase = `Soy ${nombre} y estoy caminando`;
document.writeln(frase);

nombre = "lucas"
//CONDICIONALES
if (nombre == "sergio"){
    alert("tu nombre es "+ nombre);
}
else if (nombre == "conti"){
    alert("to nombre es " + nombre);
}
else {
    alert("tu nombre es otro");
}
*/

dineroCofla = prompt("Cuanto dinero tienes? Cofla");
dineroRobe = prompt("Cuanto dinero tienes? Roberto");
dineroPedro = prompt("Cuanto dinero tienes? Pedro");

dineroCofla = parseInt(dineroCofla)
//Cofla
if (dineroCofla >= 0.6 && dineroCofla<1){
    alert("Cofla, comprate el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
} 
else if(dineroCofla >= 1 && dineroCofla<1.6){
    alert("Cofla, comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
}
else if(dineroCofla >= 1.6 && dineroCofla<1.7){
    alert("Cofla, comprate el helado de heladix");
    alert("y te sobran " + (dineroCofla - 1.6));
}
else if(dineroCofla >= 1.7 && dineroCofla<1.8){
    alert("Cofla, comprate el helado de heladovich");
    alert("y te sobran " + (dineroCofla - 1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla<2.9){
    alert("Cofla, comprate el helado de helardo");
    alert("y te sobran " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9){
    alert("Cofla, comprate el helado con confies o el pote de 1/4 kg");
    alert("y te sobran " + (dineroCofla - 2.9));
}else {
    alert("Lo siento, Cofla pobre de mierda no te alcanza para ningun helado");
}
//Roberto
if (dineroRobe >= 0.6 && dineroRobe<1){
    alert("Roberto, comprate el helado de agua");
} 
else if(dineroRobe >= 1 && dineroRobe<1.6){
    alert("Roberto, comprate el helado de crema");
}
else if(dineroRobe >= 1.6 && dineroRobe<1.7){
    alert("Roberto, comprate el helado de heladix");
}
else if(dineroRobe >= 1.7 && dineroRobe<1.8){
    alert("Roberto, comprate el helado de heladovich");
}
else if(dineroRobe >= 1.8 && dineroRobe<2.9){
    alert("Roberto, comprate el helado de helardo");
}
else if (dineroRobe >= 2.9){
    alert("Roberto, comprate el helado con confites o el pote de 1/4 kg");
}else {
    alert("Lo siento, Roberto pobre de mierda no te alcanza para ningun helado");
}
//Pedro
if (dineroPedro >= 0.6 && dineroPedro<1){
    alert("Pedro, comprate el helado de agua");
} 
else if(dineroPedro >= 1 && dineroPedro<1.6){
    alert("Pedro, comprate el helado de crema");
}
else if(dineroPedro >= 1.6 && dineroPedro<1.7){
    alert("Pedro, comprate el helado de heladix");
}
else if(dineroPedro >= 1.7 && dineroPedro<1.8){
    alert("Pedro, comprate el helado de heladovich");
}
else if(dineroPedro >= 1.8 && dineroPedro<2.9){
    alert("Pedro, comprate el helado de helardo");
}
else if (dineroPedro >= 2.9){
    alert("Pedro, comprate el helado con confites o el pote de 1/4 kg");
}else {
    alert("Lo siento, Pedro pobre de mierda no te alcanza para ningun helado");
}