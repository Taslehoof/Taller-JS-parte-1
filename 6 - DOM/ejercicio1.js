const contenedor = document.querySelector(".flex-container");

const boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();

function crearLlave(nombre, modelo, precio){
    img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo= `<h3>${modelo}</h3>`;
    precio= `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

//const llave = crearLlave("Llave 1","modelo X","33");
//contenedor.innerHTML += llave[0] + llave[1] + llave[2];
//contenedor.innerHTML += llave[0] + llave[1] + llave[2];

//let div = document.createElement("DIV");
//div.classList.add("flex-item");

//Con este metodo puedo enviar el valor del objeto al servidor para 
//poder capturarlo desde el servidor
const changeHidden=(Number)=>{
    document.querySelector(".key-data").value = number;
}

let documentFragmente = document.createDocumentFragment();

//Con esto puedo genero la cantidad de elementos que yo considere necesarios
//para el sistema, en este caso son 20 pero si quisiera pudieran ser mas o menos.
for (var i = 1 ; i<=20 ;i++){
    let modeloRandom= Math.round(Math.random()*10000);
    let precioRandom= Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragmente.appendChild(div);
}

contenedor.appendChild(documentFragmente);