let calendario = document.getElementById('calendario')
window.addEventListener("load", dia)

function dia() {

    let data = new Date()
    let semana = data.getDay()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()

    if (dia < 10) {
        dia = "0" + dia
    }

    if (semana == 0) {
        semana = "Domingo"
    } if (semana == 1) {
        semana = "Segunda-feira"
    } if (semana == 2) {
        semana = "Terça-feira"
    } if (semana == 3) {
        semana = "Quarta-feira"
    } if (semana == 4) {
        semana = "Quinta-feira"
    } if (semana == 5) {
        semana = "Sexta-feira"
    } if (semana == 6) {
        semana = "Domingo"
    }

    if (mes == 0) {
        mes = "janeiro"
    } if (mes == 1) {
        mes = "fevereiro"
    } if (mes == 2) {
        mes = "março"
    } if (mes == 3) {
        mes = "abril"
    } if (mes == 4) {
        mes = "maio"
    } if (mes == 5) {
        mes = "junho"
    } if (mes == 6) {
        mes = "julho"
    } if (mes == 7) {
        mes = "agosto"
    } if (mes == 8) {
        mes = "setembro"
    } if (mes == 9) {
        mes = "outubro"
    } if (mes == 10) {
        mes = "novembro"
    } if (mes == 11) {
        mes = "dezembro"
    }

    calendario.innerHTML = `${semana}, ${dia} de ${mes}`

}

let relogio = document.getElementById('rel')
window.addEventListener("load", tempo)


function tempo(){
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    if (segundos < 10) {
        segundos = "0" + segundos
    }

    if (minutos < 10) {
        minutos = "0" + minutos
    }

    if (hora < 10) {
        hora = "0" + hora
    }

    // hora = (hora < 10) ? "0" + hora : hora;
    // minutos = (minutos < 10) ? "0" + minutos : minutos;
    // segundos = (segundos < 10) ? "0" + segundos : segundos;

    relogio.innerHTML = `${hora}:${minutos}:${segundos}`

    setTimeout(tempo, 1000);
}

// temas

let cima = document.getElementById("cima")
let baixo = document.getElementById("baixo")
let port = document.querySelectorAll("a")
let github = port.item(0)
let linkedin = port.item(1)

let botaoClaro = document.querySelector(".claro")
botaoClaro.addEventListener("click", () => {

    document.body.style.backgroundColor = '#f5f5f5'
    document.body.style.transition = '300ms'

    cima.style.backgroundColor = '#808080'
    cima.style.backgroundImage = 'none'

    baixo.style.backgroundColor = '#f5f5f5'
    baixo.style.transition = '300ms'

    github.style.backgroundColor = '#808080'
    github.style.color = '#f5f5f5'
    github.style.transition = '300ms'

    linkedin.style.backgroundColor = '#808080'
    linkedin.style.color = '#f5f5f5'
    linkedin.style.transition = '300ms'

    relogio.style.color = "#111"
    relogio.style.transition = "300ms"
    calendario.style.color = "#111"
    calendario.style.transition = "300ms"

})

let botaoEscuro = document.querySelector(".escuro")
botaoEscuro.addEventListener("click", () => {

    document.body.style.backgroundColor = '#111'
    document.body.style.transition = '300ms'

    cima.style.backgroundColor = '#808080'
    cima.style.backgroundImage = 'none'

    baixo.style.backgroundColor = '#111'
    baixo.style.transition = '300ms'

    github.style.backgroundColor = '#f5f5f5'
    github.style.color = '#111'
    github.style.transition = '300ms'

    linkedin.style.backgroundColor = '#f5f5f5'
    linkedin.style.color = '#111'
    linkedin.style.transition = '300ms'

    relogio.style.color = "#f5f5f5"
    relogio.style.transition = "300ms"
    calendario.style.color = "#f5f5f5"
    calendario.style.transition = "300ms"

})

let botaoLondres = document.querySelector(".londres")
botaoLondres.addEventListener("click", () => {
    document.body.style.backgroundColor = '#808080'
    document.body.style.transition = '300ms'

    cima.style.backgroundColor = 'none'
    cima.style.backgroundImage = 'url(imagens/london.jpg)'
    cima.style.backgroundSize = 'cover'
    cima.style.backgroundRepeat = 'no-repeat'
    cima.style.height = '400px'

    baixo.style.backgroundColor = '#808080'
    baixo.style.transition = '300ms'

    github.style.backgroundColor = '#4169e1'
    github.style.color = '#111'
    github.style.transition = '300ms'

    linkedin.style.backgroundColor = '#4169e1'
    linkedin.style.color = '#111'
    linkedin.style.transition = '300ms'

    relogio.style.color = "#111"
    relogio.style.transition = "300ms"
    calendario.style.color = "#111"
    calendario.style.transition = "300ms"
})








