class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} de edad, y soy de color ${this.color}`;
    }
    
    verInfo(){
        document.write(this.informacion+"<br>");
    }    
}

//Clase con herencia
class Perro extends animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null; 
    }

    //metodo para que ladre el perro
    //ladrar(){
        //alert("¡WAW!"); 
    //}
    
    //Definiendo un SETTERS
    set setRaza(newName){
        this.raza = newName;
    }

    //Definiendo un GETTERS
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro",4,"marron","Doberman");
const gato = new animal("gato",2,"negro");
const pajaro = new animal("pajaro",1,"verde");

/*document.write(perro.informacion + "<br>");
document.write(gato.informacion + "<br>");
dooument.write(pajaro.informacion + "<br>");*/

perro.setRaza="Pedro";
document.write(perro.getRaza);
//perro.verInfo();
//perro.ladrar();
//gato.verInfo();
//pajaro.verInfo();