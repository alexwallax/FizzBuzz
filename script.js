//programa pede um número se for divisivel por 3 imprime "Fizz", se for divisivel por 5 imprime "Buzz" se for divisivel por 3 e por 5 imprime "FizzBuzz"

alert("Digite um número se for divisivel por 3 imprime Fizz, se for divisivel por 5 imprime Buzz se for divisivel por 3 e por 5 imprime FizzBuzz");
let resultado = fizzBuzz(parseInt(prompt("Digite um número")));

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number') {
        alert ("Não é um número");
    }
    else if((entrada % 3 === 0) && (entrada % 5 === 0)) {
        alert("FizzBuzz");
    } 
    else if(entrada % 3 === 0) {
        alert("Fizz");
    }
    else if(entrada % 5 === 0) {
        alert("Buzz");
    }
    else{
        alert(entrada + " não divisivel nem por 3 nem por 5 " );
    }
}
