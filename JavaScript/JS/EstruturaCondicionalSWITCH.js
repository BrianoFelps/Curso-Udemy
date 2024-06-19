var a = "abóbora";

// Funciona como o if/else, com sintaxe mais simples, de forma mais restrita, com comparações de idênticos (===)
// O parâmetro pega o valor usado como parâmetro de comparação aos case's
switch (a){
    // O case pode ser usado várias vezes. O valor ao lado da palavra reservada é o que vai ser comparado ao parâmetro;
    case 0: 
        document.write("Banana");
        // O break pode ser omitido, mas dessa forma o código rodaria todos os cases até encontrar um break.

    case 1: 
        document.write("Maçã");

    case "abóbora":
        document.write(`Case: É uma abóbora!!!!!!!!!!!!!!!!!!!!!!!!!`)

        // O default funciona como o "else" do IF/ELSE
    default:
        document.write("<br> Default: Não é uma fruta");
        break;
}

/* 
Adendo: tu podes ver um exemplo bonito de utilização do
switch no teu github, no repo "SistemaAutomotiva1", 
SistemaAutomotiva1/src/main/java/com/mycompany/visao/empresa/ListEmpresa.java, 
linha 260.
*/