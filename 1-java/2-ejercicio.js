// Completa el siguiente programa para imprimir los números que sean mayores a 10.

const nums = [4, 70, 58, 23, 0, 1, 5, 10];

let largerNum = [];

function countingNumber ( i ) { 

    for ( i = 0; i < nums.length; i++) {
        if ( nums [ i ] > 10 ){
        largerNum.push ( nums [ i ] );
        }
    }

    
}
countingNumber ( nums )

console.log ('los números de la lista mayores a 10 son: ' + largerNum)