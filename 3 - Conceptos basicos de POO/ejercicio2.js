class Celular{
    constructor(color, peso, tamaño, rdc, ram){
        this.color= color;
        this.peso = peso;
        this.tamaño= tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido == false;
    }

    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }

    tomarFoto(){
        alert(`foto tomada en una resolucon de pantalla de: ${this.resolucionDeCamara}`);
    }
    
    grabarVideo(){
        alert(`grabar video en: ${this.resolucionDeCamara}`);
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b></br>`;
    }
}

class CelularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram,rdce){
        super(color, peso, tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }

    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }

    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }

    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`;
    }
}

celular1 = new CelularAltaGama("rojo","130g","5.2'","4k","3GB","full HD");
celular2 = new CelularAltaGama("negro","142g","6'","4k","4GB","HD");

document.write(
    `${celular1.infoAltaGama()}<br>
    ${celular2.infoAltaGama()}<br>`);