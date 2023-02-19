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
let port = document.querySelectorAll("button")
let github = port.item(0)
let linkedin = port.item(1)

let botaoClaro = document.querySelector(".claro")
botaoClaro.addEventListener("click", () => {

    document.body.style.backgroundColor = '#f5f5f5'
    document.body.style.transition = '300ms'

    cima.style.backgroundColor = '#808080'
    cima.style.backgroundImage = 'none'
    cima.style.height = '50vh'

    baixo.style.backgroundColor = '#f5f5f5'
    baixo.style.transition = '300ms'
    baixo.style.height = '50vh'


    /* github.style.backgroundColor = '#808080'
    github.style.color = '#f5f5f5'
    github.style.transition = '300ms'

    linkedin.style.backgroundColor = '#808080'
    linkedin.style.color = '#f5f5f5'
    linkedin.style.transition = '300ms' */

    relogio.style.color = "#111"
    relogio.style.transition = "300ms"
    calendario.style.color = "#111"
    calendario.style.transition = "300ms"

})

let botaoEscuro = document.querySelector(".escuro")
botaoEscuro.addEventListener("click", () => {

    document.body.style.backgroundColor = '#0A0909'
    document.body.style.transition = '300ms'

    cima.style.backgroundColor = '#353333'
    cima.style.backgroundImage = 'none'
    cima.style.height = '50vh'

    baixo.style.backgroundColor = '#0A0909'
    baixo.style.transition = '300ms'
    baixo.style.height = '50vh'


    /* github.style.backgroundColor = '#F1F1ED'
    github.style.color = '#0A0909'
    github.style.transition = '0.6s ease'

    linkedin.style.backgroundColor = '#F1F1ED'
    linkedin.style.color = '#0A0909'
    linkedin.style.transition = '0.6s ease' */

    relogio.style.color = "#F1F1ED"
    relogio.style.transition = "300ms"
    calendario.style.color = "#F1F1ED"
    calendario.style.transition = "300ms"

})








