// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.

// Si es múltiplo debe imprimir Si, el número x es múltiplo 5, de lo contrario debe imprimir No, el número x no es múltiplo de 5. 

function multiplo ( num1 ){ 
    let number = prompt ( 'Ingrese un valor numérico' ) ;

    const num = parseFloat( number );

    if ( isNaN ( num )){
        alert ( `'${ number }' no es un valor numérico, por favor ingrese un número válido`);
    }
    else if ( num1 % 5 == 0 ){ 
            console.log ( `Sí, el número ${ number } es múltiplo de 5` );
              
    } 
    else { 
        console.log ( `No, el número ${ number } no es múltiplo de 5`);
    }

}
multiplo (  );