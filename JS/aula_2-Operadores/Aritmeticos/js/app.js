let num1 = 10
let num2 = 2

let soma = num1 + num2
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2
let resto = num1 % num2
let exp = num1 ** num2
let porcento = num1*(num2/100)

console.log(soma)
console.log(sub)
console.log(mult)
console.log(div)
console.log(resto)
console.log(exp)
console.log(porcento)

//interação com usuario

//mandar alerta na tela 
//alert("Arthur PARA DE CONVERSAR!!!!!!")

//Receber dados do usuario 

//programa de media
let nome = prompt("Olá, Qual é o seu nome?")
let nota1 = Number(prompt("Informe a primeira nota"))
let nota2 = Number(prompt("Informe a Segunda nota"))
soma = nota1 + nota2
alert(`Olá ${nome} seja bem vindo! A soma de suas notas é: ${soma}`)
console.log(`Olá ${nome} seja bem vindo! A soma de suas notas é: ${soma}`)