console.log('estou funcionando')


const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(){
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);

var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});