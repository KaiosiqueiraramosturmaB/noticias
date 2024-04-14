const botaoAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")

console.log(body)

botaoAbrir.addEventListener('click', )
botaoFechar.addEventListener('click', )

function abrirMenu() {
    body.classList.add("Escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("Escurecer")
    nav.classList.remove("abrir")
}