var telaBemVindo = document.querySelector(".tela-bem-vindo");
var inputNomeJogador = document.getElementById("input-nome");
var buttonIniciar = document.getElementById("button-nome");
var telaJogo = document.querySelector(".tela-jogo");
var boaSorte = document.querySelector(".boa-sorte");
var partidas = document.getElementsByName("partidas");
var objetoJogador = document.querySelector(".objeto-jogador");
var buttonPedra = document.getElementById("button-pedra");
var buttonPapel = document.getElementById("button-papel");
var buttonTesoura = document.getElementById("button-tesoura");
var infoPainel = document.querySelector(".info-painel");
var objetoComputador = document.querySelector(".objeto-computador");
var objetoSorteado = document.getElementById("objeto-sorteado");
var mostraPartidas = document.getElementById("info-partidas");
var mostraPontosJogador = document.getElementById("info-pontos-jogador");
var mostraPontosComputador = document.getElementById("info-pontos-computador");
var buttons = document.querySelector(".buttons");
var revanche = document.getElementById("button-revanche");
var desistir = document.getElementById("button-desistir");
var telaFim = document.querySelector(".tela-fim");
var agradecimento = document.querySelector(".agradecimento");
var qtePartidas = 0;
var pontosJogador = 0;
var pontosComputador = 0;
var numPartidas = 0;
function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function exibeTela(campo, display) {
    campo.style.display = display;
}
function exibePainel(item, frase) {
    item.innerHTML = frase;
}
function jogadaComputador(objSorteado) {
    switch (objSorteado) {
        case 'papel':
            exibePainel(objetoSorteado, '<img src="./assets/imagens/papel.png">');
            break;
        case "pedra":
            exibePainel(objetoSorteado, '<img src="./assets/imagens/pedra.png">');
            break;
        case "tesoura":
            exibePainel(objetoSorteado, '<img src="./assets/imagens/tesoura.png">');
            break;
        case "resetar":
            exibePainel(objetoSorteado, '');
            break;
    }
}
function inicio() {
    exibeTela(telaBemVindo, "none");
    exibeTela(telaJogo, "grid");
    exibePainel(boaSorte, "Boa Sorte, ".concat(inputNomeJogador.value, "!!!"));
}
function partida() {
    for (var i = 0 in partidas) {
        if (partidas[i].checked) {
            numPartidas = partidas[i].value;
        }
    }
    if (pontosJogador == (numPartidas - parseInt(numPartidas / 2))) {
        exibePainel(infoPainel, 'Você ganhou o jogo!');
        setTimeout(function () {
            finalPartida();
        }, 1500);
    }
    else if (pontosComputador == (numPartidas - parseInt(numPartidas / 2))) {
        exibePainel(infoPainel, 'Você perdeu o jogo!');
        setTimeout(function () {
            finalPartida();
        }, 1500);
    }
}
function finalPartida() {
    exibeTela(objetoJogador, "none");
    exibeTela(objetoComputador, "none");
    exibeTela(buttons, "block");
}
function compara(objEscolhido) {
    var objetos = ['pedra', 'papel', 'tesoura'];
    var objSorteado = objetos[sorteia(0, 2)];
    jogadaComputador(objSorteado);
    if (objEscolhido === objSorteado) {
        exibePainel(infoPainel, "Empatou!");
        qtePartidas++;
        exibePainel(mostraPartidas, "Partidas: ".concat(qtePartidas));
    }
    else if (objEscolhido == 'pedra' && objSorteado == 'tesoura' ||
        objEscolhido == 'papel' && objSorteado == 'pedra' ||
        objEscolhido == 'tesoura' && objSorteado == 'papel') {
        exibePainel(infoPainel, "Voc\u00EA ganhou!");
        qtePartidas++;
        pontosJogador++;
        exibePainel(mostraPontosJogador, "Pontos do Jogador: ".concat(pontosJogador));
        exibePainel(mostraPartidas, "Partidas: ".concat(qtePartidas));
        partida();
    }
    else if (objEscolhido == 'pedra' && objSorteado == 'papel' ||
        objEscolhido == 'papel' && objSorteado == 'tesoura' ||
        objEscolhido == 'tesoura' && objSorteado == 'pedra') {
        exibePainel(infoPainel, "Voc\u00EA perdeu!");
        qtePartidas++;
        pontosComputador++;
        exibePainel(mostraPontosComputador, "Pontos do Computador: ".concat(pontosComputador));
        exibePainel(mostraPartidas, "Partidas: ".concat(qtePartidas));
        partida();
    }
}
function reinicio() {
    qtePartidas = 0;
    pontosJogador = 0;
    pontosComputador = 0;
    numPartidas = 0;
    exibeTela(objetoJogador, "block");
    exibeTela(objetoComputador, "flex");
    exibeTela(buttons, "none");
    exibePainel(infoPainel, "Vamos lá!");
    exibePainel(mostraPartidas, "Partidas: ".concat(qtePartidas));
    exibePainel(mostraPontosJogador, "Pontos do Jogador: ".concat(pontosJogador));
    exibePainel(mostraPontosComputador, "Pontos do Computador: ".concat(pontosComputador));
    jogadaComputador("resetar");
}
function desiste() {
    exibeTela(telaJogo, "none");
    exibeTela(telaFim, "grid");
    exibePainel(agradecimento, "".concat(inputNomeJogador.value, " obrigado por jogar!<br> At\u00E9 a pr\u00F3xima!"));
}
buttonIniciar === null || buttonIniciar === void 0 ? void 0 : buttonIniciar.addEventListener("click", function () { inicio(); });
revanche === null || revanche === void 0 ? void 0 : revanche.addEventListener("click", function () { reinicio(); });
desistir === null || desistir === void 0 ? void 0 : desistir.addEventListener("click", function () { desiste(); });
buttonPedra === null || buttonPedra === void 0 ? void 0 : buttonPedra.addEventListener("click", function () { compara("pedra"); });
buttonPapel === null || buttonPapel === void 0 ? void 0 : buttonPapel.addEventListener("click", function () { compara("papel"); });
buttonTesoura === null || buttonTesoura === void 0 ? void 0 : buttonTesoura.addEventListener("click", function () { compara("tesoura"); });
