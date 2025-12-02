const botaoAbrir = document.querySelector("button"); 
const botaoFechar = document.querySelector(".fechar-menu");
const menu = document.querySelector(".menu-lateral");


botaoAbrir.addEventListener("click", () => {
    menu.classList.add("abrir");
    document.body.classList.add("escurecer");
});


botaoFechar.addEventListener("click", () => {
    menu.classList.remove("abrir");
    document.body.classList.remove("escurecer");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("abrir");
    document.body.classList.remove("menu-open");
});