let materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","pepito","juan"],
    logica: ["Hernandez","pedro","pepito","juan","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","cofla","maria"]
 }

const inscribir = (alumno,materia) =>{
    personas = materias[materia];
    if(personas.length >= 21){
        document.write(`lo siento ${alumno}, las clase de ${materia} ya estan llenas<br>`);
    } else {
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        } else if (materia == "progrmacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        } else if (materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }
        } else if (materia == "quimica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica:personas 
            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscripto a ${materia} correctamente<br>`);
    }
}
document.write(materias['fisica'] + "<br><br>");
inscribir("pedrito","fisica");
inscribir("sergio","fisica");
inscribir("Laura","fisica");
inscribir("Ladna","fisica");
inscribir("Flint","fisica");
inscribir("Javier","fisica");
inscribir("Ramses","fisica");
inscribir("Jorge","fisica");
inscribir("Gabriela","fisica");

document.write("<br>"+ materias['fisica']);