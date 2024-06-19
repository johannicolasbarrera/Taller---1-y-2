// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

let num =   prompt ('Ingrese la cantidad de números que quiere en su lista'); 

let num1 = parseFloat ( num )

const newList = [];

if ( isNaN ( num ) ) {
    alert ( `'${ num }' no es un valor numérico, por favor ingrese un número válido`);
}

for ( i = 1 ; i <= num; i++){
    newList.push ( i )
}

newList.splice (1, 1)

newList.forEach ( 
    function ( newList, i ){
        console.log ( newList,'Está en el campo', i)
    }
)