document.write("<h1>if/else primeiro:</h1>")
if (2 === 2.0){
    document.write("Bloco do if executado")
} else {
    document.write("Bloco do else executado")
}

document.write("<h1>if/else segundo:</h1>")
if (2 === '2'){
    document.write("Bloco do if executado")
} else {
    document.write("Bloco do else executado")
}

document.write("<h1>if/else terceiro:</h1>")
/* Ele considera ambos iguais, a menos que seja executado o !== */
if (2 != '2'){
    document.write("Bloco do if executado")
} else {
    document.write("Bloco do else executado")
}

// OPERADORES LÓGICOS + OPERADORES DE COMPARAÇÃO

const faltasPermitidas = 50;
let faltasDoAluno = 1;

const MediaParaAprovação = 70;
let MediaDoAluno = 84

document.write("<h1>APROVAÇÃO DE ALUNOS:</h1>")
if (faltasDoAluno <= faltasPermitidas && MediaDoAluno >= MediaParaAprovação){
    document.write(
        "ALUNO APROVADO!!!!!!!!!!!!!!!!!!!!!!!!!! <br><br> MÉDIA NECESSÁRIA: " + MediaParaAprovação + "<br>" + "MÉDIA OBTIDA: ", MediaDoAluno, "<br> MÁXIMO DE FALTAS PERMITIDAS: ", faltasPermitidas, " <br> FALTAS DO ALUNO: ", faltasDoAluno
    )
} else {
    document.write(
        "ALUNO REPROVADO!!!!!!!!!!!!!!!!!!!!!!!!!! <br><br> MÉDIA NECESSÁRIA: " + MediaParaAprovação + "<br>" + "MÉDIA OBTIDA: ", MediaDoAluno, "<br> MÁXIMO DE FALTAS PERMITIDAS: ", faltasPermitidas, " <br> FALTAS DO ALUNO: ", faltasDoAluno
    )
}


// OPERADOR TERNÁRIO

// var resultado = <condição> ? <verdadeiro> : <falso>

var resultado = faltasDoAluno <= faltasPermitidas && MediaDoAluno >= MediaParaAprovação ? "ALUNO APROVADO!!!!!!!!!!!!!!!!!!!!!!!!!!" : "ALUNO REPROVADO!!!!!!!!!!!!!!!!!!!!!!!!!!";

console.log(`Dados do resultado via operador ternário: ` + resultado)