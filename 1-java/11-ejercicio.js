//Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

let number1 = parseFloat( prompt ('Ingrese el primer valor numérico') );

let number2 = parseFloat( prompt ('Ingrese el segundo valor numérico') );



function add ( num1, num2 ){
    if ( isNaN ( num1 && num2 ) ){
        
        alert ( "No ingresaste un valor numérico");

    } 
    else {

        return num1 + num2;
    }
   
    
 
}

console.log ( `La suma de ${ number1 } más ${ number2 } es igual a:`, add( number1, number2) )