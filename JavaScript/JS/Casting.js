
var Num1 = prompt("Escreva o primeiro número que vem à sua cabeça:")
var Num2 = prompt("Escreva o segundo número que vem à sua cabeça:")

Num1 = parseFloat(Num1)
console.log(Num1)
Num2 = parseInt(Num2)
console.log(Num2)

Num1 = Num1.toString()
console.log(Num1)

/* Sem conversão de tipo dos valores, apenas ocorre a
concatenação. Pelo contrário, os números são somados */
document.write(Num1 + Num2)