let sbtn = document.getElementById('sbtn');
let iput = document.querySelector('input');
let body = document.querySelector('body');

body.addEventListener('keyup', (e) => {
    if(e.keyCode === 9){
        window.open('index.html');
}});

sbtn.addEventListener('click', function(){
    let a = String(iput.value)
    let s = (a.split(" "));
    console.log(s);
    let l = s.length;
    console.log(l);
    let sn = parseInt(l - 1);
    console.log(sn);
    if(sn == '1'){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1] +'&ref=nb_sb_noss_1');
    }
    else if(sn == '2'){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 3){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 4){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 5){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 6){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 7){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 8){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 9){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'+'+s[9]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 10){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'+'+s[9]+'+'+s[10]+'&ref=nb_sb_noss_1');
    }
});

iput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        let a = String(iput.value)
    let s = (a.split(" "));
    console.log(s);
    let l = s.length;
    console.log(l);
    let sn = parseInt(l - 1);
    console.log(sn);
    if(sn == '1'){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1] +'&ref=nb_sb_noss_1');
    }
    else if(sn == '2'){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 3){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 4){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 5){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 6){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 7){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 8){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 9){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'+'+s[9]+'&ref=nb_sb_noss_1');
    }
    else if(sn == 10){
        window.open('https://www.amazon.com/s?k='+s[0]+'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'+'+s[9]+'+'+s[10]+'&ref=nb_sb_noss_1');
    }
    }
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

//https://www.amazon.com/s?k='+s[0]'+'+s[1]+'&ref=nb_sb_noss_1

// + s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'+'+s[9]