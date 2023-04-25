let telaBemVindo = document.querySelector(".tela-bem-vindo");
let inputNomeJogador = document.getElementById("input-nome");
let buttonIniciar = document.getElementById("button-nome");
let telaJogo = document.querySelector(".tela-jogo");
let boaSorte = document.querySelector(".boa-sorte");
let partidas = document.getElementsByName("partidas");
let objetoJogador = document.querySelector(".objeto-jogador");
let buttonPedra = document.getElementById("button-pedra");
let buttonPapel = document.getElementById("button-papel");
let buttonTesoura = document.getElementById("button-tesoura");
let infoPainel = document.querySelector(".info-painel");
let objetoComputador = document.querySelector(".objeto-computador");
let objetoSorteado = document.getElementById("objeto-sorteado");
let mostraPartidas = document.getElementById("info-partidas");
let mostraPontosJogador = document.getElementById("info-pontos-jogador");
let mostraPontosComputador = document.getElementById("info-pontos-computador");
let buttons = document.querySelector(".buttons");
let revanche = document.getElementById("button-revanche");
let desistir = document.getElementById("button-desistir");
let telaFim = document.querySelector(".tela-fim");
let agradecimento = document.querySelector(".agradecimento");
let qtePartidas = 0;
let pontosJogador = 0;
let pontosComputador = 0;
let numPartidas = 0;


function sorteia(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibeTela(campo: HTMLElement, display: string) {
    campo.style.display = display;
}

function exibePainel(item: HTMLElement, frase: string) {
    item.innerHTML = frase;
}

function jogadaComputador(objSorteado: string) {
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
    exibePainel(boaSorte, `Boa Sorte, ${inputNomeJogador.value}!!!`);
}

function partida() {
    for (var i = 0 in partidas) {
        if (partidas[i].checked) {
            numPartidas = partidas[i].value;
        }
    }
    if (pontosJogador == (numPartidas - parseInt(numPartidas / 2))) {
        exibePainel(infoPainel, 'Você ganhou o jogo!');
        setTimeout(() => {
            finalPartida();
        }, 1500);
    } else if (pontosComputador == (numPartidas - parseInt(numPartidas / 2))) {
        exibePainel(infoPainel, 'Você perdeu o jogo!');
        setTimeout(() => {
            finalPartida();
        }, 1500);
    }
}

function finalPartida() {
    exibeTela(objetoJogador, "none");
    exibeTela(objetoComputador, "none");
    exibeTela(buttons, "block");
}

function compara(objEscolhido: string) {
    let objetos = ['pedra', 'papel', 'tesoura'];
    let objSorteado = objetos[sorteia(0, 2)];
    jogadaComputador(objSorteado);
    if (objEscolhido === objSorteado) {
        exibePainel(infoPainel, `Empatou!`);
        qtePartidas++
        exibePainel(mostraPartidas, `Partidas: ${qtePartidas}`);

    } else if (objEscolhido == 'pedra' && objSorteado == 'tesoura' ||
        objEscolhido == 'papel' && objSorteado == 'pedra' ||
        objEscolhido == 'tesoura' && objSorteado == 'papel') {
        exibePainel(infoPainel, `Você ganhou!`);
        qtePartidas++
        pontosJogador++
        exibePainel(mostraPontosJogador, `Pontos do Jogador: ${pontosJogador}`);
        exibePainel(mostraPartidas, `Partidas: ${qtePartidas}`);
        partida();

    } else if (objEscolhido == 'pedra' && objSorteado == 'papel' ||
        objEscolhido == 'papel' && objSorteado == 'tesoura' ||
        objEscolhido == 'tesoura' && objSorteado == 'pedra') {
        exibePainel(infoPainel, `Você perdeu!`);
        qtePartidas++
        pontosComputador++
        exibePainel(mostraPontosComputador, `Pontos do Computador: ${pontosComputador}`);
        exibePainel(mostraPartidas, `Partidas: ${qtePartidas}`);
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
    exibePainel(infoPainel, "Vamos lá!")
    exibePainel(mostraPartidas, `Partidas: ${qtePartidas}`);
    exibePainel(mostraPontosJogador, `Pontos do Jogador: ${pontosJogador}`);
    exibePainel(mostraPontosComputador, `Pontos do Computador: ${pontosComputador}`);
    jogadaComputador("resetar");
}

function desiste() {
    exibeTela(telaJogo, "none");
    exibeTela(telaFim, "grid");
    exibePainel(agradecimento, `${inputNomeJogador.value} obrigado por jogar!<br> Até a próxima!`);
}

buttonIniciar?.addEventListener("click", function () { inicio() });
revanche?.addEventListener("click", function () { reinicio() });
desistir?.addEventListener("click", function () { desiste() });

buttonPedra?.addEventListener("click", function () { compara("pedra") });
buttonPapel?.addEventListener("click", function () { compara("papel") });
buttonTesoura?.addEventListener("click", function () { compara("tesoura") });