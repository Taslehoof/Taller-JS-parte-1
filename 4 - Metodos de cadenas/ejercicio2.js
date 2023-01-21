const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","pedro","pepito","juan"],
        logica: ["Hernandez","pedro","pepito","juan","cofla","maria"],
        quimica: ["Rodriguez","pedro","juan","cofla","maria"]
    }

    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
        Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>`);
    }
}

const cantidadDeClases = (alumno) =>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal= 0;
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `<b sytle='color:blue'>${alumno}</b> esta <b>${cantidadTotal} de clases: <b style='color:green'>${clasesPresentes}</b><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("juan"));

