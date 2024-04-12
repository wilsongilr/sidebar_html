const cloud = document.getElementById("cloud");
const barralateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const swonoff = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");


menu.addEventListener("click",()=>{
    barralateral.classList.toggle("max-barra-lateral");
    if(barralateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barralateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

swonoff.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");

});

cloud.addEventListener("click",()=>{
    barralateral.classList.toggle("mini-barra-lateral"); /**Agrega la class mini-barra-laterar al / */
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
                span.classList.toggle("oculto");
            });
});




// cloud.addEventListener("click",()=>{
//     barraLateral.classList.toggle("mini-barra-lateral");
//     main.classList.toggle("min-main");
//     spans.forEach((span)=>{
//         span.classList.toggle("oculto");
//     });
// });