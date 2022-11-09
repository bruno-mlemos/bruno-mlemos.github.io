const body = document.querySelector('body');
const char = document.querySelector('.char');
const h1 = document.querySelector('h1');

let px = 60;
let py = 485;


function walkingDown(event) {

    let tecla = event.key;

    if (tecla == 'a') {

        if (py <= 485) {

        } else {

            py = py - 94;
            char.style.left = `${py}px`;

            char.setAttribute('src', './assets/left.png')
        }


    } else if (tecla == 's') {

        if (px >= 700) {

        } else {
            px = px + 107;
            char.style.top = `${px}px`;
            char.setAttribute('src', './assets/front.png')
        }


    } else if (tecla == 'd') {

        if (py >= 1300) {

        } else {
            py = py + 94;
            char.style.left = `${py}px`;
            char.setAttribute('src', './assets/right.png')
        }

    } else if (tecla == 'w') {

        if (px <= 60) {


        } else {
            px = px - 107;

            char.style.top = `${px}px`;
            char.setAttribute('src', './assets/back.png')
        }


    }

}

document.addEventListener('keydown', walkingDown);




