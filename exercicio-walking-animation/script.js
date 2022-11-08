const img = document.getElementById('img');

const body = document.querySelector('body');



let position = 0
let i = 1;

setInterval(() => {

    img.style.left = `${position}px`;

    img.src = `assets/${i}.png`;

    i++;
    position += body.offsetWidth / 32;



    console.log(body.offsetWidth);
    console.log(position);

    if (i > 8) {
        i = 1;
    }

    if (position > body.offsetWidth) {
        position = 0;
    }

}, 150);


