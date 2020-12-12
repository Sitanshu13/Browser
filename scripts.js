let sbtn = document.getElementById('sbtn');
let iput = document.querySelector('input');
let body = document.querySelector('body');

body.addEventListener('keyup', (e) => {
    if(e.keyCode === 45){
        window.open('search.html');
}});

body.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        window.open('https://' + iput.value + '/');
}});

console.log(iput);

sbtn.addEventListener('click', function(){
    window.open('https://' + iput.value + '/');
});

const slide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = nav.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else
            {
                link.style.animation = `fade 0.5s ease forwards ${index / 7 + 0.9}s`;
            }
        });

        burger.classList.toggle('toggle')
    });
}

slide();