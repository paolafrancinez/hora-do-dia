function carregar(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    var saudacao = window.document.getElementById ('saudacao')
    var motivacional = window.document.getElementById ('motivacional')
   // var hora = 22
     msg.innerText = `Agora são ${hora} horas.`
         if(hora >= 0 && hora < 12) {
            img.src = 'fotomanha.png'
            saudacao.innerHTML = `Bom Dia!`
            motivacional.innerHTML = `Se você acredita que é capaz de realizar seus objetivos, nenhum obstáculo irá atrapalhar!`
            document.body.style.background = '#ffdead'
    } else if (hora >= 12 && hora < 18) {
             img.src = 'fototarde.png'
             saudacao.innerHTML = `Boa Tarde!`
             motivacional.innerHTML = `Acredite no seu potencial e na sua capacidade de vencer!`
            document.body.style.background = '#a0522d'
    } else {
            img.src = 'fotonoite.png'
            saudacao.innerHTML = `Boa Noite!`
            motivacional.innerHTML = `Faça o bem, inspire a alegria e espalhe sorrisos por onde for!`
            document.body.style.background = '#4682b4'
    }
}
      


      

