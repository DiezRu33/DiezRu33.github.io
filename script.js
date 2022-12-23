const container = document.getElementById("container");
const parrafo = document.getElementById("p");
const post = document.getElementById("post");
const _parrafo = document.getElementById("p2");

let x = parrafo;
let x2 = _parrafo;

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

function e(){
    
}

parrafo.addEventListener("mouseover", (e) => {
    parrafo.style.color = "#fff"
    parrafo.style.transition = ".5s all"
    parrafo.removeEventListener("mouseover", e);
        parrafo.addEventListener("mouseout", (a) => {
            parrafo.style.color = "#000"
        })
    
})

