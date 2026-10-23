/*
Array em JavaScript

O que é?

Uma variavel armazena apenas 1 valor 
enquanto o array armazena multiplos valores


//ex01:
//estrutura

let frutas = ["Maça", "Banana", "Uva", "Morango", "Caqui"]

//console.log(frutas)
//console.log(frutas[0])

//posso usar um loop para mostrar o array

for(let i = 0; i < frutas.length; i++){
    console.log(`A ${i + 1}° Fruta é ${frutas[i]}`)

    //console.log("A " + (i + 1) + "° Fruta é " + frutas[i]) //Exemplo sem interpolação
}

// Métodos dos Arrays
pop() - Remove um item do fim da fila
push() - Adiciona um item no fim da fila
unshift() - Adiciona um item no inicio da fila
shift() - Remove o primeiro da fila
length - Conta o tamanho do array

*/

let frutas = ["Maça", "Banana", "Uva"]

frutas.push("morango")
frutas.push("Pêra")
frutas.unshift("Abacate")
frutas.shift()
frutas.pop()

console.log(frutas)






