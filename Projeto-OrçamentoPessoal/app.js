class Despesa{
    constructor(ano, mes, dia, tipo, desc, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.desc = desc;
        this.valor = valor;
    }

    consultarDespesa() {
        let atributos = document.getElementsByClassName("form-control");
        let valoresArray = [];
        let variavelNobj = parseInt(localStorage.getItem('variavelNobj') || '0', 10)

        for (let i = 0; i < atributos.length; i++) {
            var valor = atributos[i].value;
            
            if(valor.trim()){
                valoresArray.push(valor)
                atributos[i].value = ''
            } else{
                alert('parô, preenche tudo')
                return;// Mesma coisa que break;
            }
        }

        const despesas = new Despesa(...valoresArray)

        registrarDespesa(despesas, variavelNobj)

        variavelNobj++;
        localStorage.setItem('variavelNobj', variavelNobj.toString())
        console.log(variavelNobj);
    }
}

const registrarDespesa = (d, nD) => {
    console.log(nD)
    localStorage.setItem(`Despesa${nD}`, JSON.stringify(d));
    console.log(localStorage.getItem(`Despesa ${nD}`))
}