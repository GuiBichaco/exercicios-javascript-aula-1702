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