//Recapitulando a Aula de JavaScript (10/02/2025)

// 📌 1. Variáveis e Tipos de Dados
// O JavaScript possui diferentes formas de declarar variáveis:

var nome = "João";  // Evite usar (escopo global pode gerar problemas)
let idade = 25;  // Recomendado (escopo de bloco)
const PI = 3.1415;  // Valor fixo (não pode ser alterado)

//Tipos de Dados Primitivos:
let texto = "Olá, mundo!";  // String  
let numero = 42;  // Number  
let booleano = true;  // Boolean  
let nulo = null;  // Null (intencionalmente vazio)  
let indefinido;  // Undefined (não inicializado)  

//Arrays e Objetos:
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // "Maçã"
let pessoa = { nome: "Carlos", idade: 30 };
console.log(pessoa.nome); // "Carlos"

// 📌 2. Estruturas de Controle
// Usadas para tomar decisões no código.
// Condicional if-else

let hora = 14;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

//Switch-case:
let cor = "azul";
switch (cor) {
    case "vermelho":
        console.log("A cor escolhida foi vermelho.");
        break;
    case "azul":
        console.log("A cor escolhida foi azul.");
        break;
    default:
        console.log("Cor não reconhecida.");
}

//Laços de repetição (for e while)
for (let i = 0; i < 3; i++) {
    console.log("Contador:", i);
}
let contador = 0;
while (contador < 3) {
    console.log("Número:", contador);
    contador++;
}

// 📌 3. Funções e Escopo
// Função Tradicional:

function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));  // "Olá, Maria!"

//Arrow Function:
const dobro = (num) => num * 2;
console.log(dobro(5));  // 10
//Escopo de Variáveis:
let global = "Sou global";
function testarEscopo() {
    let local = "Sou local";
    console.log(global);  // OK
    console.log(local);   // OK
}
testarEscopo();

// console.log(local); // Erro! 'local' só existe dentro da função
//Callback Function (introdução):
function processar(callback) {
    console.log("Processando...");
    callback();
}

processar(() => console.log("Finalizado!"));
//Função Assíncrona (introdução):
async function pegarDados() {
    return "Dados recebidos!";
}
pegarDados().then(console.log); // "Dados recebidos!"




//////////////////////////////////////////////////////////////////////////////////////////

//Aula 17/02


// Arrow Functions e Higher-Order Functions no JavaScript
// O que são Arrow Functions?
// As Arrow Functions foram introduzidas no ECMAScript 6 (ES6), lançado em 2015. Elas representam uma sintaxe mais curta e concisa para escrever funções em JavaScript. Além disso, as arrow functions não possuem seu próprio this, o que pode evitar problemas comuns ao trabalhar com funções dentro de objetos e classes.
// Sintaxe da Arrow Function:
// Antes do ES6, as funções eram escritas com a palavra-chave function:
const somandoFuncaoes = function(a, b) {
    return a + b;
};
console.log(somandoFuncaoes(2, 3)); // 5

//Com as Arrow Functions, podemos reescrever esse código de forma mais concisa:
const somandoFuncoes = (a, b) => a + b;
console.log(somandoFuncaoes(2, 3)); // 5

// Principais Características das Arrow Functions:
// Se a função tiver apenas um parâmetro, os parênteses são opcionais:
const quadrado = x => x * x;
console.log(quadrado(4)); // 16

//Se houver múltiplos parâmetros, os parênteses são obrigatórios:
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4)); // 12

//Se houver mais de uma linha no corpo da função, é necessário usar {} e a palavra-chave return explicitamente:
const saudacao = (nome) => {
    return `Olá, ${nome}!`;
};
console.log(saudacao("João")); // "Olá, João!"

// As arrow functions não possuem seu próprio this, herdando o this do escopo onde foram declaradas. 
// Isso evita problemas comuns ao usar funções em eventos e objetos.

// Higher-Order Functions (Funções de Alta Ordem)
// No JavaScript, uma Higher-Order Function (HOF) é uma função que recebe outra função como argumento e/ou retorna uma função como resultado. Essas funções permitem criar código mais modular e reutilizável.
// Exemplo de Higher-Order Function:
// Antes do ES6:
function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
}
function somar(x, y) {
    return x + y;
}
console.log(aplicarOperacao(5, 3, somar)); // 8

//Com Arrow Functions, podemos simplificar ainda mais:
const aplicarOperacao = (a, b, operacao) => operacao(a, b);
console.log(aplicarOperacao(5, 3, (x, y) => x + y)); // 8
console.log(aplicarOperacao(10, 2, (x, y) => x * y)); // 20

// Exemplos comuns de Higher-Order Functions no JavaScript:
// Várias funções da API do JavaScript utilizam esse conceito, como map(), filter() e reduce().
// map() – Transforma um array aplicando uma função em cada elemento:
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8]

//filter() – Retorna um novo array apenas com os elementos que atendem a uma condição:
const idades = [10, 22, 30, 15, 18];
const maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade); // [22, 30, 18]

//reduce() – Reduz um array a um único valor:
const valores = [10, 20, 30, 40];
const soma = valores.reduce((total, num) => total + num, 0);
console.log(soma); // 100