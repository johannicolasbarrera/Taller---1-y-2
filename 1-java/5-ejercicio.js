// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango.

let num1 = prompt ('Ingrese el primer número')

let num2 = prompt ('Ingrese el segundo número')

const number1 = parseFloat ( num1 )
const number2 = parseFloat ( num2 )

if ( isNaN ( number1 && number2 ) ) {
    alert ( `Algunos de los valores ingresados entre '${ num1 }' y/o '${ num2 }' son inválidos, por favor ingresa únicamente valores numéricos`);
}

if (num1 == num2) {
    alert (`No existen números enteros entre '${ num1 }' y '${ num2 }' debido a que son números iguales`)
}

function contar ( num1, num2){
    if (num1 <= num2 ){
        for ( i = num1; i <= num2; i++ )
            console.log ( i )
    }
    else if ( num1 >= num2 ) {
        for ( i = num1; i >= num2; i-- ){
            console.log ( i )
        }
            
    }
    
}

contar ( number1, number2 )