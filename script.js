function togglmodel() {
const html = document.documentElement
html.classList.toggle("light")
//if(html.classList.contains('light')) {
//html.classList.remove('light')
//} else {
   // html.classList.add('light')
// esse é uma das maneiras}
const img = document.querySelector("#profile img")

// substituir a imagem
if (html.classList.contains("light")) {
//se tiver light mode, aplicar a imagem light
img.setAttribute("src", "./assets/assets/avatarvictor2.png")
img.setAttribute("alt", "foto de victor sorrindo, usando uma camisa azul, o fundo é azul claro com lilás")
} else {
    //se não tiver light mode manter a imagem
    img.setAttribute("src", "./assets/assets/avatarvictor.png")
    img.setAttribute("alt", "foto de victor, usando um casaco amarelo, o fundo é azul claro")

}


}





