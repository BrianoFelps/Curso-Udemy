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
                
                //Categorizar modal
                const modal = new Modal('text-success', 'btn-success', 'Despesa registrada!', 'Despesa registrada com sucesso!');

                console.log(modal)

                modal.categorizarModal(modal)
                
                $('#modalRegistro').modal('show');

                // atributos[i].value = '';
            } else{
                $('#modalRegistro').modal('show');

                const modal = new Modal();

                return; // Mesma coisa que break
            }
        }

        console.log(...valoresArray)

        const despesas = new Despesa(...valoresArray)

        registrarDespesa(despesas, variavelNobj)

        variavelNobj++
        localStorage.setItem('variavelNobj', variavelNobj.toString())
        console.log(variavelNobj);
    }
}

class Modal {
    constructor (cT, cB, titulo, descricao){
        this.classeTexto = cT,
        this.classeBotao = cB,
        this.titulo = titulo,
        this.descricao = descricao
    }

    categorizarModal(modal){
        const header = document.getElementById('modal-header');
        const botao = document.getElementById('btn-modal');
        const divTitulo = document.getElementById('modalH');
        const divDescricao = document.getElementById('modal-body');

        header.classList.add(modal.classeTexto)
        botao.classList.add(modal.classeBotao)
        divTitulo.textContent = modal.titulo;
        divDescricao.textContent = modal.descricao;
    }
}

const registrarDespesa = (d, nD) => {
    console.log(nD)
    localStorage.setItem(`Despesa${nD}`, JSON.stringify(d));
    console.log(localStorage.getItem(`Despesa${nD}`))
}