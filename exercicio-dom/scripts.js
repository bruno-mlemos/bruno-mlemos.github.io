const underline = document.querySelector('.underline');
const italic = document.querySelector('.italic');
const bold = document.querySelector('.bold');

const lessButton = document.querySelector('.decrease-button');
const moreButton = document.querySelector('.increase-button');

const sizeDemonstration = document.querySelector('.font-size');



const redButton = document.querySelector('.red');
const blueButton = document.querySelector('.blue');
const pinkButton = document.querySelector('.pink');
const blackButton = document.querySelector('.black'); ``



const text = document.querySelector('.text');

function transformUnderline() {

    if (text.style.textDecoration == 'underline') {
        text.style.textDecoration = 'none';
    } else {
        text.style.textDecoration = 'underline';
    }
}

function transformItalic() {

    if (text.style.fontStyle == 'italic') {
        text.style.fontStyle = 'normal';
    } else {
        text.style.fontStyle = 'italic';
    }
}

function transformBold() {
    if (text.style.fontWeight == 'bold') {
        text.style.fontWeight = 'normal';
    } else {
        text.style.fontWeight = 'bold';
    }
}


let tamanhoTexto = 20;

function decreaseSize() {

    if (tamanhoTexto > 12) {
        tamanhoTexto = tamanhoTexto - 2;

        text.style.fontSize = tamanhoTexto + 'px';

        sizeDemonstration.textContent = `${tamanhoTexto}`;
    }


}

function increaseSize() {
    tamanhoTexto = tamanhoTexto + 2;
    text.style.fontSize = tamanhoTexto + 'px';

    sizeDemonstration.textContent = `${tamanhoTexto}`;
}


function transformRed() {

    text.style.color = 'red';

}

function transformBlue() {
    text.style.color = 'blue';
}

function transformPink() {
    text.style.color = 'purple';
}

function transformBlack() {
    text.style.color = 'black';
}


underline.onclick = transformUnderline;
italic.onclick = transformItalic;
bold.onclick = transformBold;

lessButton.onclick = decreaseSize;
moreButton.onclick = increaseSize;

redButton.onclick = transformRed;
blueButton.onclick = transformBlue;
pinkButton.onclick = transformPink;
blackButton.onclick = transformBlack;
