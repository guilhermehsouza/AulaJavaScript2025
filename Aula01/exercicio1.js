document.write("<h1>Exercício 1</h1>");

var numero;
numero = prompt("Digite um numero qualquer:");

var quadrado, cubo;

quadrado = Number(numero) * Number(numero);
cubo = Number(numero) * Number(numero) * Number(numero);

document.write("O quadrado do número é "+ quadrado);
document.write("O cubo do número é " + cubo);
