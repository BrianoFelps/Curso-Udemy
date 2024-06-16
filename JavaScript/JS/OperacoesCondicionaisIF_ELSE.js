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