function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 13
//arquivo que vai apareder a hora é o msg
//vai ter interpolação então é crase
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    //bom dia
    img.src = 'manha.png'
    document.body.style.background = '#efe0c9'

}else if (hora >= 12 && hora <18){
    //Boa tarde
    img.src = 'tarde.png'
    document.body.style.background = '#f4bb58'
}else{
    //Boa noie
    img.src = 'noite.png'
    document.body.style.background = '#1c495f'
}
}