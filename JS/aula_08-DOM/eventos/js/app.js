/*
Em JS podemos manipular a estrutura HTML através de Eventos
1 - click	Disparado quando o usuário clica no elemento. 
*/
let titulo = document.getElementById('t1')

function alterarTitulo(){
    let novoTitulo = prompt("Digite o novo titulo")
    titulo.textContent = novoTitulo
}

/*

2 - mousemove- Ativado continuamente enquanto o cursor se 
move sobre o elemento.

*/


function mudarCor(){    
    let blackDiv = document.getElementById('caixa')
    blackDiv.style.backgroundColor = "red"

}

function mudarCorSaida(){    
    let blackDiv = document.getElementById('caixa')
    blackDiv.style.backgroundColor = "green"
}
