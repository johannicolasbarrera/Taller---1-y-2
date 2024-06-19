//Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

let name = prompt ('Ingrese su nombre completo')

let yearBirth = parseFloat ( prompt ('Ingrese su año de nacimiento') )

const yearCurrent = 2024

function subtract ( num1, num2 ) {
    if ( isNaN ( num2 ) )

        alert ('Por favor ingrese su año de nacimiento en valor numérico')
    
    return num1 - num2

}


console.log ( `Hola ${ name }, grandioso! Tienes`, subtract ( yearCurrent, yearBirth ), 'años')