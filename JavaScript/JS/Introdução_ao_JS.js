// alert("Hello world!");
document.getElementById("input").value = "Aqui está o valor partindo do código JS";


// VARIÁVEIS
var VariavelNumero1 = 1; /* Escopo global */
let VariavelQuePodeSerAlterada = "String";
const VariavelQueNaoPodeSerAlterada = `String`;
const VariavelArray = ['Valor1', 2, 2.5, false, true];

document.write(VariavelArray);


// Concatenação

/*
Pedir em um tipo de alert a resposta (entrada de dados) 
Recebe apenas strings (convertendo valores numéricos)!!!
*/
const nomeDoUsuario = prompt("Nome do usuário: ");
const IdadeDoUsuario = prompt("Idade do usuário:");

// Escreve conteúdo dentro do body com hard code
document.write('<h2> Olá, ' + nomeDoUsuario + '. Bem vindo ao site! Você tem ' +IdadeDoUsuario+ ' anos!')


//DIFERENÇAS ENTRE NULL E UNDEFINED

//Ausência intencional de valor
const NULO = null;

//Indefinição de valor, que deveria estar definido (indisponibilidade)
const INDEFINIDO = undefined; 
/* ou */ 
let /*var*/ indefinido /*Já vem indefinida por padrão*/ 

// console.log(NULO);
console.log(indefinido);

indefinido = 'oii'
console.log(indefinido)

indefinido = 123124
console.log(indefinido)