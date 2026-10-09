alert("Bem vindos a aula de Switch Case")
let num1 = Number(prompt("Insira o primeiro numero"))
let num2 = Number(prompt("Insira o segundo numero"))
let soma, mult

let escolha = Number(prompt("Digite 1 para soma ou 2 para Multiplicação"))

switch(escolha){
    case 1:{
        soma = num1 + num2
        alert(`Você escolheu soma. A somas dos numeros é ${soma}`)
    }
    break
    case 2:{
        mult = num1 * num2
        alert(`Você escolheu Multiplicação. O produto dos numeros é ${mult}`)
    }
    break
    default: alert("ERROR! opção invalida")

}