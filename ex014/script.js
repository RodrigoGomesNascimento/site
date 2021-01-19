function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//variavel que ira receber o ano com 4 digitos por isso o fullyear.
    var fano = document.getElementById('txtano')//vai receber o valor do form digitado pelo user
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) >= ano){
        window.alert('Verifique os dados e tente novamente.')
    }else{
        //para o radio como tem o mesmo nome tem q ser o getByName
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // criando um a tag img dinamicamente com javascript
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //res.innerHTML = `Idade Calculada: ${idade}`
        //Verificar os dados do radio se é masculino ou feminino
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade <= 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade <= 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade <= 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        //centralizar com javascript
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}