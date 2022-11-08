const sorteio = ['vermelho', 'azul', 'roxo', 'laranja'];

let selectedColor = -1;

const boxRed = document.querySelector('.red');
const boxBlue = document.querySelector('.blue');
const boxPurple = document.querySelector('.purple');
const boxOrange = document.querySelector('.orange');

const sortear = document.querySelector('.sortear');

const result = document.querySelector('.h2-result');


boxRed.onclick = () => {

    boxRed.style.border = '4px solid black';
    boxBlue.style.border = 'none';
    boxPurple.style.border = 'none';
    boxOrange.style.border = 'none';

    boxRed.style.margin = '0px 7px';
    boxBlue.style.margin = '0px';
    boxPurple.style.margin = '0px';
    boxOrange.style.margin = '0px';

    selectedColor = 0;


}

boxBlue.onclick = () => {

    boxBlue.style.border = '4px solid black';
    boxPurple.style.border = 'none';
    boxRed.style.border = 'none';
    boxOrange.style.border = 'none';

    boxBlue.style.margin = '0px 7px';
    boxRed.style.margin = '0px';
    boxOrange.style.margin = '0px';
    boxPurple.style.margin = '0px';

    selectedColor = 1;

}

boxPurple.onclick = () => {

    boxPurple.style.border = '4px solid black';
    boxBlue.style.border = 'none';
    boxRed.style.border = 'none';
    boxOrange.style.border = 'none';


    boxPurple.style.margin = '0px 7px';
    boxRed.style.margin = '0px';
    boxBlue.style.margin = '0px';
    boxOrange.style.margin = '0px';

    selectedColor = 2;
}

boxOrange.onclick = () => {

    boxOrange.style.border = '4px solid black';
    boxBlue.style.border = 'none';
    boxRed.style.border = 'none';
    boxPurple.style.border = 'none';

    boxOrange.style.margin = '0px 7px';
    boxRed.style.margin = '0px';
    boxBlue.style.margin = '0px';
    boxPurple.style.margin = '0px';

    selectedColor = 3;
}

sortear.onclick = () => {

    const aleatoryPosition = Math.floor(Math.random() * 4);

    if (selectedColor == -1) {
        result.textContent = 'Por favor, selecione uma cor antes de sortear';

    } else if (aleatoryPosition == selectedColor) {
        result.textContent = 'Parabéns! Você escolheu a cor sorteada';
        console.log(result);
    } else {
        result.textContent = `Você errou. A cor sorteada foi ${sorteio[aleatoryPosition]} `;
        console.log(result);
    }

    boxOrange.style.border = 'none';
    boxBlue.style.border = 'none';
    boxRed.style.border = 'none';
    boxPurple.style.border = 'none';

    boxRed.style.margin = '0px';
    boxBlue.style.margin = '0px';
    boxPurple.style.margin = '0px';
    boxOrange.style.margin = '0px';

    selectedColor = -1;

}





