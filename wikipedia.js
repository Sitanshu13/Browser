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
    let sn = parseInt(l);
    console.log(sn);
    if(sn == '1')
    {
        window.open('https://en.wikipedia.org/wiki/' + s[0]);
        reload = true;
        iput = ' '
    }
    else if(sn == '2')
    {
        window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]);
    }
    else if(sn == 3)
    {
        window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]);
    }
    else if(sn == 4)
    {
        window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]);
    }
    else if(sn == 5)
    {
        window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]);
    }
    else if(sn == 6)
    {
        window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]+'_'+s[5]);
    }
    else if(sn == 7)
    {
        window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]+'_'+s[5]+'_'+s[6]);
    }
    else if(sn == 8)
    {
        window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]+'_'+s[5]+'_'+s[6]+'_'+s[7]);
    }
    else if(sn == 9)
    {
        window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]+'_'+s[5]+'_'+s[6]+'_'+s[7]+'_'+s[8]);
    }
    else if(sn == 10)
    {
        window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]+'_'+s[5]+'_'+s[6]+'_'+s[7]+'_'+s[8]+'_'+s[9]);
    }
});

iput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        let a = String(iput.value)
        let s = (a.split(" "));
        console.log(s);
        let l = s.length;
        console.log(l);
        let sn = parseInt(l);
        console.log(sn);
        if(sn == '1')
        {
            window.open('https://en.wikipedia.org/wiki/' + s[0]);
        }
        else if(sn == '2')
        {
            window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]);
        }
        else if(sn == 3)
        {
            window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]);
        }
        else if(sn == 4)
        {
            window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]);
        }
        else if(sn == 5)
        {
            window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]);
        }
        else if(sn == 6)
        {
            window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]+'_'+s[5]);
        }
        else if(sn == 7)
        {
            window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]+'_'+s[5]+'_'+s[6]);
        }
        else if(sn == 8)
        {
            window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]+'_'+s[5]+'_'+s[6]+'_'+s[7]);
        }
        else if(sn == 9)
        {
            window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]+'_'+s[5]+'_'+s[6]+'_'+s[7]+'_'+s[8]);
        }
        else if(sn == 10)
        {
            window.open('https://en.wikipedia.org/wiki/' + s[0] +'_'+s[1]+'_'+s[2]+'_'+s[3]+'_'+s[4]+'_'+s[5]+'_'+s[6]+'_'+s[7]+'_'+s[8]+'_'+s[9]);
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

//https://en.wikipedia.org/wiki/