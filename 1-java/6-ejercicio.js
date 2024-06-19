// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces

let sentence = prompt ( 'Ingresa una frase' ); 

let num = prompt ('Ingresa (en valor numérico) las veces que quieres repetir tu frase')
const replay = parseFloat ( num )

if ( isNaN ( num ) ) {
    alert ( `'${ num }' no es un valor numérico, por favor ingrese un número válido`);
}
 
for ( i = 0; i < replay; i++) {
        
    console.log ( sentence )
}