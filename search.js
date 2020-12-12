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
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == '2')
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 3)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 4)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 5)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 6)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 7)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 8)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 9)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 10)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'+'+s[9]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
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
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == '2')
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 3)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 4)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 5)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 6)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 7)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 8)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 9)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
        }
        else if(sn == 10)
        {
            window.open('https://www.google.com/search?sxsrf=ALeKk00_bO9jn7aZctAMQc5A0PyKtjQN-Q%3A1607774993714&source=hp&ei=EbPUX6ekKfSY4-EP3Iar0Ak&q='+ s[0] +'+'+s[1]+'+'+s[2]+'+'+s[3]+'+'+s[4]+'+'+s[5]+'+'+s[6]+'+'+s[7]+'+'+s[8]+'+'+s[9]+'&oq=&gs_lcp=CgZwc3ktYWIQARgAMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGDkDmgBcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab');
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