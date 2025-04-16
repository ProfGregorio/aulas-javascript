const prompt = require('prompt-sync')();

let numero1 = prompt('Digite o 1º número: ');
let numero2 = prompt('Digite o 2º número: ');
let soma = Number(numero1) + Number(numero2)
console.log(`A soma entre ${numero1} e ${numero2} é ${soma}!`);