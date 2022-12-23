const container = document.getElementById("container");
const parrafo = document.getElementById("p");
const post = document.getElementById("post");
const _parrafo = document.getElementById("p2");
const boton = document.getElementById("button");
const boton2 = document.getElementById("button2");
const boton3 = document.getElementById("button3");

// function e(){
//     alert("Hola")
// }
function msj(){
    window.open("https://google.com", "__blank")
}

function msj_github(){
    window.open("https://github.com/repositories", "__blank")
}

function msj_mdn(){
    window.open("https://developer.mozilla.org", "__blank")
}
boton.addEventListener("click", (a) => {
    msj(boton)
})
boton2.addEventListener("click", (b) => {
    msj_github(boton2)
})
boton3.addEventListener("click", (c) => {
    msj_mdn(boton3)
})
