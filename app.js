let menu = document.querySelector('nav ul')
let hamburger = document.querySelector('nav .mobile')
hamburger.addEventListener('click',funcion(){
    menu.classList.toggle('show')
})