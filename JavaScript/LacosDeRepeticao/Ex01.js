//01. Contar de 1 a 10(Use o do While)

var prompt = require('prompt-sync')();

let num = 0;

do {
    if (num <= 10) {
        console.log("Número atual é: " + num);
        num = num + 1;
    }
} while (num > 0);
