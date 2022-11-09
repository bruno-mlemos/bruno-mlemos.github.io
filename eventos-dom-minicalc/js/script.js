
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');

const btnAdd = document.getElementById('add');
const btnMinus = document.getElementById('minus');
const btnDivide = document.getElementById('divide');
const btnMultiply = document.getElementById('multiply');

const resultado = document.querySelector('.container h2');

let valorPrimeiro = null;
let valorSegundo = null;


n1.addEventListener('blur', () => {
    valorPrimeiro = +n1.value;
})

n2.addEventListener('blur', () => {
    valorSegundo = +n2.value;
})


btnAdd.addEventListener('click', () => {

    if (valorPrimeiro === null || valorSegundo === null) {

        resultado.textContent = `Resultado: Preencha os dois numeros`;


    } else {
        resultado.textContent = `Resultado: ${valorPrimeiro + valorSegundo}`;
    }

})

btnMinus.addEventListener('click', () => {

    if (valorPrimeiro === null || valorSegundo === null) {

        resultado.textContent = `Resultado: Preencha os dois numeros`;


    } else {
        resultado.textContent = `Resultado: ${valorPrimeiro - valorSegundo}`;
    }

})

btnDivide.addEventListener('click', () => {

    if (valorPrimeiro === null || valorSegundo === null) {

        resultado.textContent = `Resultado: Preencha os dois numeros`;


    } else {
        resultado.textContent = `Resultado: ${valorPrimeiro / valorSegundo}`;
    }

})

btnMultiply.addEventListener('click', () => {

    if (valorPrimeiro === null || valorSegundo === null) {

        resultado.textContent = `Resultado: Preencha os dois numeros`;


    } else {
        resultado.textContent = `Resultado: ${valorPrimeiro * valorSegundo}`;
    }

})