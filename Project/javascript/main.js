// hamburger menu
function toggleClass() {
    let menu = document.querySelector(".main-nav");
    menu.classList.toggle("toggleCls");
}

let hamburger = document.querySelector(".hamIcon");

hamburger.addEventListener("click", toggleClass);