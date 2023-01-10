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
<<<<<<< HEAD
boton.addEventListener("click", (a) => {
    msj(boton)
})
boton2.addEventListener("click", (b) => {
    msj_github(boton2)
})
boton3.addEventListener("click", (c) => {
    mnsj(boton3)
    msj_mdn(boton3)
})




// let x = parrafo;
// let x2 = _parrafo;

// function cambioColor(){
//     x.style.color = "#fff";
//     x.style.transition = ".5s all";
//     x2.style.color = "#fff";
//     x2.style.transition = ".5s all";
//     x.removeEventListener("mouseover", e);
//     x2.removeEventListener("mouseover", e);
//     x2.addEventListener("mouseout", (a) => {
//         x.style.color = "#000";
//     })
//     }

// class cambio {
//     parrafo.addEventListener("mouseover", (e) => {
//         parrafo.style.color = "#fff"
//         parrafo.style.transition = ".5s all"
//         parrafo.removeEventListener("mouseover", e);
//             parrafo.addEventListener("mouseout", (a) => {
//                 parrafo.style.color = "#000"
//             })
        
//     })
// }

// function white(){
//     parrafo.style.color = "#fff"
//     parrafo.style.transition = ".5s all"
// }

// parrafo.addEventListener("click", (d) => {
    //    white(parrafo)
// })


// function black(){
    // parrafo.style.color = "#000"
// }

// _parrafo.addEventListener("mouseout", (e) => {
    //    black(_parrafo2)
// })


// parrafo.addEventListener("click", (f) => {
    
//     parrafo.removeEventListener("mouseover", e);
//         parrafo.addEventListener("mouseout", (i) => {
            
//         })
    
// })

=======
>>>>>>> c2e7a2d (adding JS)
