function pesquisacep(cep) {
    let cepfinal = cep
    let validacep = /^[0-9]{8}$/



    if (cepfinal != '') {
        if (validacep.test(cepfinal)) {

            let script = document.createElement('script')
            script.src = 'https://viacep.com.br/ws/' + cepfinal + '/json/?callback=callback_name'
            document.body.appendChild(script)

        }
        else{
            limparcampos()
            alert('CEP INVÁLIDO DESGRAÇADO')
        }
    }
    else {
        limparcampos()
    }
}

function callback_name(objetocep) {

    if (!('erro' in objetocep)) {

        document.getElementById('rua').value = (objetocep.logradouro)
        document.getElementById('bairro').value = (objetocep.bairro)
        document.getElementById('cidade').value = (objetocep.localidade)
        document.getElementById('uf').value = (objetocep.uf)
    }
    else {
        limparcampos()
        alert('ESCREVEU O CPF QUE NÃO EXISTE  NÉ O FDP')
    }

}
function limparcampos() {
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('uf').value = ""
}