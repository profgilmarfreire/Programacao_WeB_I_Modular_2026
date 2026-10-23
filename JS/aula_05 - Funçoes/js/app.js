/*
Funçoes em JavaScript

O que é?
Funções São blocos de códigos reutilizaveis


//Funções Simples
console.log("Funções Simples")

//Estrutura da função

function saudacao(){
    console.log("Seja bem vindo usuário")
}

//A função só executada quando chamada

//saudacao()

//Funçoes com paramentros

let usuario = prompt("Qual é o seu nome")

function saudacaoUser(nome){
    console.log(`Seja bem vindo ${nome}`)
}

saudacaoUser(usuario)



//funçoes com retorno (Devolve algum dado)

function media(n1, n2, n3){
    return (n1 +n2 +n3)/3    
}
console.log(media(7.5,8.5,3.2))

*/

// função arrow Fuction

let mult = (n1, n2)=>{
    return n1 * n2
}

console.log(mult(20,10))