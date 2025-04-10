//03 Verificar se um número é par ou ímpar


var prompt = require('prompt-sync')();

let num = prompt ("Ola, digite um numero:")

if(num % 2){
    console.log("Seu numero é impar")
}else{
    console.log("Seu numero é par")
}
