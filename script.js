let valorInicial, valorFinal, desconto
valorInicial = document.getElementById('valorInicial')
valorFinal = document.getElementById('valorFinal')
desconto = document.getElementById('desconto')

function CalcularDesconto(){
    if (validarDados(valorInicial.value, desconto.value)){
    
    let valorI, valorF, desc

    valorI = parseFloat(valorInicial.value)
    desc = parseFloat(desconto.value)

    if (desc >= 0 || desc <= 10){
       valorF = valorI - (valorI * (desc/100))
    }
    else if (desc >= 11 || desc <= 20){
    valorF = valorI - (valorI * (desc/100))
    }
    else if (desc >= 21 || desc <= 30){
        valorF = valorI - (valorI * (desc/100))
    }
    else if (desc >= 31 || desc <= 40){
        valorF = valorI - (valorI * (desc/100))
    }
    else if (desc >= 41 || desc <= 50){
        valorF = valorI - (valorI * (desc/100))
    }
    else if (desc >= 51 || desc <= 100){
        valorF = valorI - (valorI * (desc/100))
    }
    

    valorFinal.textContent = valorF
    limparCampos()
}
}

function validarDados(valor1,valor2){
    if (isNaN(valor1) || isNaN(valor2) || valor1.trim()==='' || valor2.trim()===''){
        exibirDados()
            alert('Insira valores válidos, com números!')
            return
        }
        return true
    }

function limparCampos(){
    valorInicial.value = ' '
    desconto.value = ' '
    valorInicial.focus()
}

function exibirDados(pValorFinal=''){
    limparCampos()
    valorFinal.textContent = pValorFinal
}

