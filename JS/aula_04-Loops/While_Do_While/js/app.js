
let num1, num2, soma, mult, escolha, opcao

do{
    alert("Bem vindos a aula de Switch Case")
    num1 = Number(prompt("Insira o primeiro numero"))
    num2 = Number(prompt("Insira o segundo numero"))
    
    escolha = Number(prompt(`Digite 1 para soma ou 2 para Multiplicação`))

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
    opcao = Number(prompt(`Deseja tentar novamente?
    1 - Sim
    0 - Não`))
    if(opcao == 0 ){
        alert("Obrigado por usar nosso programa")
    }
}while(opcao != 0)