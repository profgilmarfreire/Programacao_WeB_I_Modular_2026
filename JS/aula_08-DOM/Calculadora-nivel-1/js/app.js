let visor = document.getElementById('userTela')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn0 = document.getElementById('btn0')
let btnMais = document.getElementById('btnMais')
let btnMenos = document.getElementById('btnMenos')
let btnMult = document.getElementById('btnMult')
let btnDiv = document.getElementById('btnDiv')
let btnEqual = document.getElementById('btnEqual')
let btnClear = document.getElementById('btnClear')
let btnDel = document.getElementById('btnDel')

let display = ""

btn1.addEventListener('click', () =>{
    visor.value = display += "1"
})

btn2.addEventListener('click', () =>{
    visor.value = display += "2"
})

btn3.addEventListener('click', () =>{
    visor.value = display += "3"
})

btn4.addEventListener('click', () =>{
    visor.value = display += "4"
})

btn5.addEventListener('click', () =>{
    visor.value = display += "5"
})

btn6.addEventListener('click', () =>{
    visor.value = display += "6"
})

btn7.addEventListener('click', () =>{
    visor.value = display += "7"
})

btn8.addEventListener('click', () =>{
    visor.value = display += "8"
})

btn9.addEventListener('click', () =>{
    visor.value = display += "9"
})

btn0.addEventListener('click', () =>{
    visor.value = display += "0"
})

btnMais.addEventListener('click', () =>{
    visor.value = display += "+"
})

btnMenos.addEventListener('click', () =>{
    visor.value = display += "-"
})

btnMult.addEventListener('click', () =>{
    visor.value = display += "*"
})

btnDiv.addEventListener('click', () =>{
    visor.value = display += "/"
})

btnEqual.addEventListener('click', () =>{
    
    
    if(display == 0 || display == " "){
        alert(`ERROR!
            Não existe operação apenas com 0
            ou tela vazia!
            `)
    }else{
        display = eval(display)

        if(display < 0){
            visor.style.color = "red"        
        }else{
            visor.style.color = "black" 
        }
        
        visor.value = display

    }    
    console.log(display)
    
})

btnClear.addEventListener('click', () =>{
    display = ""
    visor.value = "0"
})

btnDel.addEventListener('click', () =>{
        
    if(typeof display === "number"){
        alert(`ERROR!
            Pressione a tecla CE para limpar a tela
            ou
            Continue a operação com a igualdade!
            `)
    }else{
        display = display.slice(0,-1)
        visor.value = display
    }
    
})



