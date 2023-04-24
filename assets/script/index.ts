let telaBemVindo = document.querySelector(".tela-bem-vindo");
let inputNomeJogador = document.getElementById("input-nome");
let buttonIniciar = document.getElementById("button-nome");
let telaJogo = document.querySelector(".tela-jogo");
let boaSorte = document.querySelector(".boa-sorte");
let partidas = document.getElementsByName("partidas");
let objetoEscolhido = document.getElementById("objEscolhido");
let buttonPedra = document.getElementById("button-pedra");
let buttonPapel = document.getElementById("button-papel");
let buttonTesoura = document.getElementById("button-tesoura");
let infoPainel = document.querySelector(".info-painel");
let objetoComputador = document.querySelector(".objeto-computador");
let mostraPartidas = document.getElementById("info-partidas");
let mostraPontosJogador = document.getElementById("info-pontos-jogador");
let mostraPontosComputador = document.getElementById("info-pontos-computador");
let revanche = document.getElementById("button-revanche");
let desistir = document.getElementById("button-desistir");
let telaFim = document.querySelector(".tela-fim");
let agradecimento = document.querySelector(".agradecimento");
let objEscolhido = "";
let qtePartidas = 0;
let pontosJogador = 0;
let pontosComputador = 0;
let numPartidas = 0;


function sorteia(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibePainel(frase: string) {
    infoPainel.innerText = frase;
}

function inicio() {
    telaBemVindo.style.display = "none";
    telaJogo.style.display = "grid";
    boaSorte.innerText = `Boa Sorte, ${inputNomeJogador.value}!!!`;
}

function partida() {
    for (var i = 0 in partidas) {
        if (partidas[i].checked) {
            numPartidas = partidas[i].value: number;
        }
    }
    if (pontosJogador == (numPartidas - parseInt(numPartidas / 2))) {
        exibePainel('Você ganhou o jogo!');
        tentativa.hidden = true;
        revanche.hidden = false;
        desistir.hidden = false;

    } else if (pontosComputador == (numPartidas - parseInt(numPartidas / 2))) {
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
    let objetos = ['pedra', 'papel', 'tesoura'];
    let objSorteado = objetos[sorteia(0, 2)];
    if (objEscolhido === objSorteado) {
        exibePainel(`Empatou!
                    O computador jogou ${objSorteado}.`);
        qtePartidas++
        mostraPartidas.innerText = `Partidas: ${qtePartidas}`

    } else if (objEscolhido == 'pedra' && objSorteado == 'tesoura' ||
        objEscolhido == 'papel' && objSorteado == 'pedra' ||
        objEscolhido == 'tesoura' && objSorteado == 'papel') {
        exibePainel(`Você ganhou!
                    O computador jogou ${objSorteado}.`);
        qtePartidas++
        pontosJogador++
        mostraPontosJogador.innerText = `Pontos do Jogador: ${pontosJogador}`;
        mostraPartidas.innerText = `Partidas: ${qtePartidas}`
        partida();

    } else if (objEscolhido == 'pedra' && objSorteado == 'papel' ||
        objEscolhido == 'papel' && objSorteado == 'tesoura' ||
        objEscolhido == 'tesoura' && objSorteado == 'pedra') {
        exibePainel(`Você perdeu!
                    O computador jogou ${objSorteado}.`);
        qtePartidas++
        pontosComputador++
        mostraPontosComputador.innerText = `Pontos do Computador: ${pontosComputador}`;
        mostraPartidas.innerText = `Partidas: ${qtePartidas}`
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
    mostraPartidas.innerText = `Partidas: ${qtePartidas}`
    mostraPontosJogador.innerText = `Pontos do Jogador: ${pontosJogador}`;
    mostraPontosComputador.innerText = `Pontos do Computador: ${pontosComputador}`;
}

function desiste() {
    jogo.hidden = true;
    fim.hidden = false;
    final.innerText = `${nomeJogador.value} obrigado por jogar!
                        Até a próxima!`
}

buttonIniciar.onclick = inicio;
revanche.onclick = reinicio;
desistir.onclick = desiste;

buttonPedra.onclick = objPedra;
buttonPapel.onclick = objPapel;
buttonTesoura.onclick = objTesoura;