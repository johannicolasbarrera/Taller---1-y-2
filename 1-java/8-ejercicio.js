// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

function IsNumber (number){
    let num = prompt ( 'Ingrese un valor numérico');

    const num1 = parseFloat ( num );

    if ( isNaN ( num1 )){
        alert ( `'${ num1 }' no es un valor numérico, por favor ingrese un número válido`);
    }
    
        function multiplo ( number1 ) {
                      
            if ( number1 % 15 === 0){
                console.log ( 'Bing Bong' )
            }
            else if ( number1 % 3 === 0 ){
                console.log ( 'Bing' );
            }      
            else if ( number1 % 5 == 0 ){  
                console.log ( 'Bong' );
            } 
            else {
                console.log ( number );
            }
                            
        } 
        multiplo ( num )
}   

IsNumber ( )