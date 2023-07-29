function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 
    msg.innerHTML = `Agora sao ${hora} horas</br>`
        if(hora >= 0 && hora < 12) {
            //bom dia
            msg.innerHTML += `Bom Dia`
            img.src="manha.jpg"
            document.body.style.background = "rgb(108, 133, 180)"
        }else if(hora >= 12 && hora <18) {
            //boa tarde
            msg.innerHTML += `Boa Tarde`
            img.src= "tarde.jpg"
            document.body.style.background = "rgb(48, 12, 12)"
        }else{
            //boa noite
            msg.innerHTML += `Boa Noite`
            img.src ="noite.jpg"
            document.body.style.background = "rgb(20, 5, 5)"
        }

}