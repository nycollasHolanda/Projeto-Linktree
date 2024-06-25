function toggleMode() {
    const html = document.documentElement
html.classList.toggle("light")

const img = document.querySelector("#profile img")

if (html.classList.contains("light")) {
    img.setAttribute("src", "./imagens/daniel.jpeg")
    document.querySelector("#profile p").innerHTML = "Daniel"
} else {
    img.setAttribute("src", "./imagens/danielOFrio.jpeg")
    document.querySelector("#profile p").innerHTML = "The Cooler Daniel"
}

}