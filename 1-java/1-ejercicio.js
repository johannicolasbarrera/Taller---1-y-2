// Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

let nums = [ 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

let listOne = [];

for ( i = 0; i < nums.length; i++ ){
    if ( nums [ i ] == 1 )
        listOne.push ( nums [ i ] )
}
console.log ( listOne.length )