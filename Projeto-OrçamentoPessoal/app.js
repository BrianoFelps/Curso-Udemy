class Despesa{
    constructor(ano, mes, dia, tipo, desc, valor){
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.desc = desc;
        this.valor = valor;
    }

    recuperarTodasDespesas (){
        const idDespesa = localStorage.getItem('variavelNobj');
        let despesas = []
    
        for (let i = 0; i < idDespesa; i++) {
            const despesa = JSON.parse(localStorage.getItem(`Despesa${i}`))
    
            if(despesa == null){
                continue
            }
    
            despesas.push(despesa)

            despesa.id = i;
        }
    
        return despesas
    }

    recuperarDespesasDigitadas (){
        let atributos = document.getElementsByClassName("form-control");
        const valoresArray = [];
    
        for (let i = 0; i < atributos.length; i++) {
            const valor = atributos[i].value;
            valoresArray.push(valor)
        }
        // console.log(`Valores array: ${valoresArray}`)
        return valoresArray;
    }

    consultarDespesa() {
        let atributos = document.getElementsByClassName("form-control");
        let valoresInput = this.recuperarDespesasDigitadas(false);
        let variavelNobj = parseInt(localStorage.getItem('variavelNobj') || '0', 10)

        const modalSuccess = new Modal('text-success', 'btn-success', 'Despesa registrada!', 'Despesa registrada com sucesso!');
        const modalDanger = new Modal('text-danger', 'btn-danger', 'Erro no registro!', 'Preencha todos os campos antes de continuar!')

        for (let i = 0; i < atributos.length; i++) {
            if (valoresInput[i] == undefined || valoresInput[i] == ''){
                
                //Categorizar modal
                modalDanger.categorizarModal(modalDanger)
                $('#modalRegistro').modal('show')
                return; // Mesma coisa que break

            } else if (valoresInput[i].trim()){

                modalSuccess.categorizarModal(modalSuccess)
                $('#modalRegistro').modal('show')
                atributos[i].value = ''

            }
        }

        const despesas = new Despesa(...valoresInput)

        registrarDespesa(despesas, variavelNobj)

        variavelNobj++
        localStorage.setItem('variavelNobj', variavelNobj.toString())
        console.log(variavelNobj);
    }

    carregarListaDespesas(totalDespesas = [], filtro = false) {

        if(totalDespesas.length == 0 && filtro !== true){
            totalDespesas = new Despesa().recuperarTodasDespesas()
        }
    
        const tbody = document.getElementById('lista-despesas');
        tbody.innerHTML = ''
    
        totalDespesas.forEach(d => {
            for (let i = 0; i < totalDespesas.length; i++) {
                var linha = tbody.insertRow(i-1)
            }
            linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
            linha.insertCell(1).innerHTML = d.tipo
            linha.insertCell(2).innerHTML = d.desc
            linha.insertCell(3).innerHTML = d.valor

            const btn = document.createElement("button")
            btn.className = 'btn btn-danger'
            btn.id = `excluir_${d.id}`
            btn.innerHTML= '<span class="font-weight-bold">&times;</span>'
            linha.insertCell(4).append(btn)
            btn.onclick = () =>{

                localStorage.removeItem(`Despesa${d.id}`)
                window.location.reload()
            }
        })
    }    

    filtrarDespesas(){
        const valoresInput = this.recuperarDespesasDigitadas();
        const despesaFiltradora = new Despesa(...valoresInput)

        let despesasFiltradas = new Despesa().recuperarTodasDespesas()
    
        // console.log(despesaFiltradora)

        // console.log(despesasFiltradas)
    
        if(despesaFiltradora.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesaFiltradora.ano)
        }
        if(despesaFiltradora.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesaFiltradora.mes)
        }
        if(despesaFiltradora.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesaFiltradora.dia)
        }
        if(despesaFiltradora.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesaFiltradora.tipo)
        }
        if(despesaFiltradora.desc != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.desc.toLowerCase().includes(despesaFiltradora.desc.toLowerCase()))
        }
        if(despesaFiltradora.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.valor.toString().startsWith(despesaFiltradora.valor.toString()));
        }
        this.carregarListaDespesas(despesasFiltradas, true)
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

        if(header && botao){
            // Verificar se já existem classes definidas anteriormente
            if (header.classList.length > 4) {
                // Substituir a classe existente no header pela nova
                header.classList.replace(header.classList.item(4), modal.classeTexto );
            } else {
                // Caso não exista nenhuma classe, apenas adicionar
                header.classList.add(modal.classeTexto);
            }

            // Mesma lógica para o botão
            if (botao.classList.length > 1) {
                botao.classList.replace(botao.classList.item(1), modal.classeBotao);
            } else {
                botao.classList.add(modal.classeBotao);
            }
        }

        divTitulo.textContent = modal.titulo
        divDescricao.textContent = modal.descricao
    }
}

const registrarDespesa = (d, nD) => {
    // console.log(nD)
    localStorage.setItem(`Despesa${nD}`, JSON.stringify(d));
    // console.log(localStorage.getItem(`Despesa${nD}`))
}

