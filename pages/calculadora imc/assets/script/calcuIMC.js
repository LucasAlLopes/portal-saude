AOS.init();

function calcular() {
    let peso = document.getElementById('peso').value;
    //Variável que guarda o peso do usuário.
    
    let altura = document.getElementById('altura').value;
    //Variável que guarda a altura do usuário.
    
    let calculo = peso / (altura * altura)
    //Variável que guarda o primeiro valor do IMC, sem casas decimais limitadas.
    
    let imc = parseFloat(calculo.toFixed(2))
    //Variável que seleciona apenas duas casas decimais no resultado da operação 'calculo'.
    
    //Início do If Else com as respostas possíveis que aparecerão na tela de acordo com o resultado do IMC do usuário.
    if (imc < 18.5) {
        document.getElementById('resultado').innerHTML = 
        "IMC: " +imc+ " kg/m²"

        document.getElementById('classificacao').innerHTML =
        "Classificação: Magreza"

        document.getElementById('mensagemErro').innerHTML = 
        ""
    } else if (imc > 18.5 && imc < 24.9) {
        document.getElementById('resultado').innerHTML = 
        "IMC: " +imc+ " kg/m²"

        document.getElementById('classificacao').innerHTML =
        "Classificação: Normal"

        document.getElementById('mensagemErro').innerHTML = 
        ""
    } else if (imc > 25.0 && imc < 29.0) {
        document.getElementById('resultado').innerHTML = 
        "IMC: " +imc+ " kg/m²"

        document.getElementById('classificacao').innerHTML =
        "Classificação: Sobrepeso"

        document.getElementById('mensagemErro').innerHTML = 
        ""
    } else if (imc > 30.0 && imc < 34.9) {
        document.getElementById('resultado').innerHTML = 
        "IMC: " +imc+ " kg/m²"

        document.getElementById('classificacao').innerHTML =
        "Classificação: Obesidade grau I"

        document.getElementById('mensagemErro').innerHTML = 
        ""
    } else if (imc > 35.0 && imc < 39.0) {
        document.getElementById('resultado').innerHTML = 
        "IMC: " +imc+ " kg/m²"

        document.getElementById('classificacao').innerHTML =
        "Classificação: Obesidade grau II"

        document.getElementById('mensagemErro').innerHTML = 
        ""
    } else if (imc > 40) {
        document.getElementById('resultado').innerHTML = 
        "IMC: " +imc+ " kg/m²"

        document.getElementById('classificacao').innerHTML =
        "Classificação: Obesidade grau III"

        document.getElementById('mensagemErro').innerHTML = 
        ""
    } else {
        document.getElementById('mensagemErro').innerHTML = 
        "Erro, insira valores válidos!"
    }
}