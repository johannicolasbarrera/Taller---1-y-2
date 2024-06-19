// En una granja remota, un grupo de ovejas se encuentra en peligro. Están encerradas en diferentes corrales, algunas sanas y salvas, pero otras enfermas o incluso enfrentando la amenaza de un lobo feroz. Tu misión, como programador experto, es crear un programa en JavaScript que te ayude a rescatar a las ovejas vivas y preparar el terreno para su futuro bienestar.


// La siguiente lista corrales representa los corrales.

// Cada posición en la lista contiene un string que indica el estado de un animal:

// oveja: Oveja sana y salva.
// muerta: Oveja que necesita ser removida del corral.
// lobo: ¡Un peligro para las ovejas!
// '': Un espacio libre en el corral.

const corrales = [
    ['oveja', 'oveja', '', 'oveja', ''],
    ['oveja', 'oveja', 'oveja', 'oveja', ''],
    ['oveja', 'muerta', 'lobo', '', 'muerta']
];

// Contar ovejas
function iterarOvejas(corrales) {
    let ovejasSanas = 0;
    corrales.forEach(corral => {
        corral.forEach(granja => {
            if (granja === 'oveja') {
                ovejasSanas++;
            }
        });
    });
    return ovejasSanas;
}

// Espacios libres
function iterarEspacios(corrales) {
    let espaciosCorral = 0;
    corrales.forEach(corral => {
        corral.forEach(granja => {
            if (granja === '' || granja === 'muerta') {
                espaciosCorral++;
            }
        });
    });
    return espaciosCorral;
}

// Borrar al lobo
function borrarLobo(corrales) {
    corrales.forEach(corral => {
        const loboMalo = corral.indexOf('lobo');
        if (loboMalo !== -1) {
            corral[loboMalo] = ''; // Eliminar al lobo
        }
    });
}

// ovejas bienvenidas
function ovejasNuevas (corrales, totalLobos) {
    const totalOvejasNievas = totalLobos * 2;
    let corralIndex = 0;
    for (let i = 0; i < totalOvejasNievas; i++) {
        while (corrales[corralIndex].includes('muerta') || corrales[corralIndex].includes('lobo')) {
            corralIndex = (corralIndex + 1) % corrales.length;
        }
        const indiceEspacioLibre = corrales[corralIndex].indexOf('');
        corrales[corralIndex][indiceEspacioLibre] = 'oveja';
    }
}

// Ejecutamos las funciones y mostramos los resultados
console.log("Ovejas vivas:", iterarOvejas(corrales));
console.log("Espacios libres:", iterarEspacios(corrales));
borrarLobo(corrales);
console.log("Después de borrar al lobo:");
console.log(corrales);
ovejasNuevas(corrales, 1); // podria decirse que hay 1 lobo
console.log("Después de dar la bienvenida a las nuevas ovejas:");
console.log(corrales);