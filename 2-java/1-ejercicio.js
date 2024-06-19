// Crea una función para que calcule el promedio de al menos 3 notas y que retorne el valor de la letra asociada:

// Calificación	Equivalente en letras
// Entre 4.8 <= 5.0	E = Excelente
// Entre 4.5 < 4.8	MB = Muy bueno
// Entre 4.0 < 4.4	B = Bueno
// Entre 3.5 < 4.0	A = Aprobado
// Entre 0 < 3.5	R = Reprobado 


function promedio() {
    let notas = [];
    let regla = '';
    let suma = 0;
    let promedio = 0;

    do {
        let nota1 = parseFloat(prompt("Ingrese la nota"));
        if (nota1 <= 5) {
            notas.push(nota1);
        }
        regla = prompt("¿Desea ingresar otra nota? S/N");
    } while (regla.toLowerCase() === 's');

    for (const nota of notas) {
        suma += nota;
    }
    promedio = suma / notas.length;

    if (promedio > 4.8 && promedio <= 5) {
        console.log("E");
    } else if (promedio > 4.5 && promedio <= 4.8) {
        console.log("MB");
    } else if (promedio > 4.0 && promedio <= 4.4) {
        console.log("B");
    } else if (promedio > 3.5 && promedio <= 4.0) {
        console.log("A");
    } else if (promedio > 0 && promedio < 3.5) {
        console.log("R");
    }
}

promedio();






// function calculateAverage ( notes ) { 

//     const add = notes.reduce ( ( result, note ) => result + note, 0 )
//     const result = add / notes.length;

//     if ( result >= 4.8 && result <= 5.0 ){ 
//         return 'E = Excelente'
//     }
//     else if ( result >= 4.5 && result < 4.8 ){
//         return 'MB = Muy Bueno'
//     }
//     else if ( result >= 4.0 && result < 4.5 ){
//         return 'B = Bueno'
//     }
//     else if ( result >= 3.5 && result < 4.0 ){
//         return 'A = Aprobado'
//     }
//     else {
//         return 'R = Reprobado'
//     }

// }



// const optionNotes = [ ];
// let option;