/*
Tipos de variáveis

let (É uma variavel que pode mudar de valor)
const (significa constante, e não pode mudar de valor)
Exemplos
*/
const cpf = "00244588763"
//console.log(cpf)
//cpf = "11411255696" 
//console.log(cpf) // Erro! Assignment to constant variable.(não aceito)

/*
Variaveis criadas fora de {} (Bloco de instruções) são
chamadas de variaveis de escopo global, ou seja, voce pode
usar a variável em qualquer parte do código

Variaveis criadas dentro {bloco} após a saida do bloco
a variavel é deletada
*/

//tipos de variaveis - OBS: Em JS Não precisa declarar o tipo ou tipagem

let num1 = 10  //tipo int -Variaveis do tipo numérica são chamadas de "Number" 
let num2 = 10.5 // tipo double
let nome = "Gilmar" // String
let verdade = true // Tipo boolean
let resposta // undefined
let saldo = null // Variavel foi definida com valor nullo

// Como saber o tipo de variavel use "typeof"

console.log(typeof num1 )
console.log(typeof num2)
console.log(typeof nome)
console.log(typeof verdade)
console.log(typeof resposta)
console.log(typeof saldo)




