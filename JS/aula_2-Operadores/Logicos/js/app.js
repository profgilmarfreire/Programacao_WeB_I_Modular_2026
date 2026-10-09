/*
Operadores Logicos
&& -> (and/e) 
|| -> (or/ou)
!  -> (not/negado)
*/

//Exemplo simples
let num1 = 10
let num2 = 15
let num3 = 2

console.log("1 - Condição simples")

if(num1 >= num2){
    console.log("Entrou no IF")
} else{
    console.log("Entrou no ELSE")
}

//Condição composta

console.log("2 - Condição composta")

if((num1 != num2) && (num1>num3)){
    console.log("Entrou no IF")
} else{
    console.log("Entrou no ELSE")
}
//Condição tripla

console.log(" - Condição tripla")

if((num1 != num2) && (num1>num3) || (num1<num3) ){
    console.log("Entrou no IF")
} else{
    console.log("Entrou no ELSE")
}