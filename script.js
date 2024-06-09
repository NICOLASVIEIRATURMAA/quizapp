import { trocarTema, verificarTema } from "./helpers/tema-helper.js"



const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    tema = trocarTema(body, botaoTema) // Atualiza o valor de 'tema'
})

verificarTema(body, botaoTema)
