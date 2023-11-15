AOS.init();

function calcular() {
    let peso = document.getElementById('peso').value;
    //variável para guardar o peso do usuário

    let altura = document.getElementById('altura').value;
    //vaiável para guardar a altura do usuário

    let idade = document.getElementById('idade').value;
    //variável para guardar idade do usuário

    var generoEscolhido = document.querySelector('input[name="genero"]:checked').value;
    //variavel com valor Homem ou Mulher escolhidos na tela

    let calculo;
    //variável vazia, recebe valor apenas no IfElse
    if (generoEscolhido == "homem") {
        calculo = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade)
        
        document.getElementById('resultado').innerHTML = 
        "Sua Taxa de Metabolismo Basal é: " + calculo.toFixed(2)
    } else if (generoEscolhido == "mulher") {
        calculo = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)

        document.getElementById('resultado').innerHTML = 
        "Sua Taxa de Metabolismo Basal é: " + calculo.toFixed(2)
    } else {
        document.getElementById('mensagemErro').innerHTML = 
        "Erro, insira valores válidos!"
    }
}