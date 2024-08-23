var altura, largura = 0;
var vidas = 3;
var tempo = 0;
var intervaloDificuldade = 0;

var nivel = window.location.search;
nivel = nivel.replace('?', '')

if(nivel){
    switch(nivel){
        case 'facil':
            intervaloDificuldade = 2000;
            tempo = 30;
            break;
        case 'normal':
            intervaloDificuldade = 1500;
            tempo = 40;
            break;
        case 'dificil':
            intervaloDificuldade = 1000;
            tempo = 50;
            break;
        case 'infernal':
            intervaloDificuldade = 700;
            tempo = 60;
            break;
    }
}

function ajustarTamanhoTela (){
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustarTamanhoTela();


const cronometro = setInterval(() => {
    if(document.getElementById("TempoRestante")){
        tempo--
    
        if(tempo < 0){
            clearInterval(cronometro)
            location.href = "vitoria.html"
        } else {
            if(document.getElementById("TempoRestante")){
                document.getElementById("TempoRestante").innerHTML = tempo;
            }
        }
    }

}, 1000);


function GerarMosquitoAleatoriamente(){
    
    if(document.getElementById("Mosquito")){
        document.getElementById("Mosquito").remove()

        if(vidas <= 1){
            clearInterval(cronometro)
            window.location.href = "derrota.html"
            console.log(tempo)
        } else {
            document.getElementById("coracao" + vidas).src = "./imagens/coracao_vazio.png";

            vidas--
        }
    }

    const DefinirClasseMosquitoAleatoriamente = () =>{
        NumAleatorio = Math.ceil(Math.random() * 3);

        var letra = NumAleatorio < 1.5 ? 'A' : 'B';

        return 'mosquito' + NumAleatorio + ' ' + 'lado' + letra;
    }

    var numComBaseNaAltura = Math.ceil(Math.random() * altura) - 90;
    var numComBaseNaLargura = Math.ceil(Math.random() * largura) - 90;
    
    numComBaseNaAltura = numComBaseNaAltura < 0 ? 0 : numComBaseNaAltura;
    numComBaseNaLargura = numComBaseNaLargura < 0 ? 0 : numComBaseNaLargura;

    console.log(numComBaseNaAltura);console.log(numComBaseNaLargura);

    const mosquito = document.createElement('img')
    mosquito.src = "./imagens/mosca.png"
    mosquito.className = DefinirClasseMosquitoAleatoriamente();
    console.log(mosquito.className)
    mosquito.id = 'Mosquito'
    mosquito.style.position = 'absolute';
    mosquito.style.left = numComBaseNaLargura + 'px';
    mosquito.style.top = numComBaseNaAltura + 'px';
    mosquito.onclick = function(){
        this.remove()
    }
    
    document.body.appendChild(mosquito);
}