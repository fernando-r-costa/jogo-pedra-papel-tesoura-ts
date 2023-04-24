var telaBemVindo = document.querySelector(".tela-bem-vindo");
var inputNomeJogador = document.getElementById("input-nome");
var buttonIniciar = document.getElementById("button-nome");
var telaJogo = document.querySelector(".tela-jogo");
var boaSorte = document.querySelector(".boa-sorte");
var partidas = document.getElementsByName("partidas");
var objetoEscolhido = document.getElementById("objEscolhido");
var buttonPedra = document.getElementById("button-pedra");
var buttonPapel = document.getElementById("button-papel");
var buttonTesoura = document.getElementById("button-tesoura");
var infoPainel = document.querySelector(".info-painel");
var objetoComputador = document.querySelector(".objeto-computador");
var mostraPartidas = document.getElementById("info-partidas");
var mostraPontosJogador = document.getElementById("info-pontos-jogador");
var mostraPontosComputador = document.getElementById("info-pontos-computador");
var revanche = document.getElementById("button-revanche");
var desistir = document.getElementById("button-desistir");
var telaFim = document.querySelector(".tela-fim");
var agradecimento = document.querySelector(".agradecimento");
var objEscolhido = "";
var qtePartidas = 0;
var pontosJogador = 0;
var pontosComputador = 0;
var numPartidas = 0;
function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function exibePainel(frase) {
    infoPainel.innerText = frase;
}
function inicio() {
    telaBemVindo.style.display = "none";
    telaJogo.style.display = "grid";
    boaSorte.innerText = "Boa Sorte, ".concat(inputNomeJogador.value, "!!!");
}
function partida() {
    for (var i = 0 in partidas) {
        if (partidas[i].checked) {
            numPartidas = partidas[i].value;
        }
    }
    if (pontosJogador == (numPartidas - parseInt(numPartidas / 2))) {
        exibePainel('Você ganhou o jogo!');
        tentativa.hidden = true;
        revanche.hidden = false;
        desistir.hidden = false;
    }
    else if (pontosComputador == (numPartidas - parseInt(numPartidas / 2))) {
        exibePainel('Você perdeu o jogo!');
        tentativa.hidden = true;
        revanche.hidden = false;
        desistir.hidden = false;
    }
}
function objPedra() {
    objEscolhido = "pedra";
    compara();
}
function objPapel() {
    objEscolhido = "papel";
    compara();
}
function objTesoura() {
    objEscolhido = "tesoura";
    compara();
}
function compara() {
    var objetos = ['pedra', 'papel', 'tesoura'];
    var objSorteado = objetos[sorteia(0, 2)];
    if (objEscolhido === objSorteado) {
        exibePainel("Empatou!\n                    O computador jogou ".concat(objSorteado, "."));
        qtePartidas++;
        mostraPartidas.innerText = "Partidas: ".concat(qtePartidas);
    }
    else if (objEscolhido == 'pedra' && objSorteado == 'tesoura' ||
        objEscolhido == 'papel' && objSorteado == 'pedra' ||
        objEscolhido == 'tesoura' && objSorteado == 'papel') {
        exibePainel("Voc\u00EA ganhou!\n                    O computador jogou ".concat(objSorteado, "."));
        qtePartidas++;
        pontosJogador++;
        mostraPontosJogador.innerText = "Pontos do Jogador: ".concat(pontosJogador);
        mostraPartidas.innerText = "Partidas: ".concat(qtePartidas);
        partida();
    }
    else if (objEscolhido == 'pedra' && objSorteado == 'papel' ||
        objEscolhido == 'papel' && objSorteado == 'tesoura' ||
        objEscolhido == 'tesoura' && objSorteado == 'pedra') {
        exibePainel("Voc\u00EA perdeu!\n                    O computador jogou ".concat(objSorteado, "."));
        qtePartidas++;
        pontosComputador++;
        mostraPontosComputador.innerText = "Pontos do Computador: ".concat(pontosComputador);
        mostraPartidas.innerText = "Partidas: ".concat(qtePartidas);
        partida();
    }
}
function reinicio() {
    qtePartidas = 0;
    pontosJogador = 0;
    pontosComputador = 0;
    numPartidas.value = "";
    objEscolhido = "";
    tentativa.hidden = false;
    revanche.hidden = true;
    desistir.hidden = true;
    mostraPartidas.innerText = "Partidas: ".concat(qtePartidas);
    mostraPontosJogador.innerText = "Pontos do Jogador: ".concat(pontosJogador);
    mostraPontosComputador.innerText = "Pontos do Computador: ".concat(pontosComputador);
}
function desiste() {
    jogo.hidden = true;
    fim.hidden = false;
    final.innerText = "".concat(nomeJogador.value, " obrigado por jogar!\n                        At\u00E9 a pr\u00F3xima!");
}
buttonIniciar.onclick = inicio;
revanche.onclick = reinicio;
desistir.onclick = desiste;
buttonPedra.onclick = objPedra;
buttonPapel.onclick = objPapel;
buttonTesoura.onclick = objTesoura;
