const inputCardName = document.getElementById('input_name');
const inputCardNumber = document.getElementById('input_number');
const inputCardMonth = document.getElementById('input_month');
const inputCardYear = document.getElementById('input_year');
const inputCardCvv = document.getElementById('input_cvv');

const cardName = document.getElementById('card_name');
const cardNumber = document.getElementById('card_number');
const cardMonth = document.getElementById('card_month');
const cardYear = document.getElementById('card_year');
const cardCvv = document.getElementById('card_cvv');

inputCardName.addEventListener('input', function () {
    cardName.textContent = inputCardName.value;
});

inputCardNumber.addEventListener('input', function () {
    // Remove qualquer espaço em branco existente no valor do campo
    let cardNumberValue = inputCardNumber.value.replace(/\s/g, '');

    // Adiciona um espaço a cada 4 caracteres no número do cartão
    cardNumberValue = cardNumberValue.replace(/(.{4})/g, '$1 ');

    // Define o valor formatado no campo de entrada
    inputCardNumber.value = cardNumberValue;

    // Define o valor formatado no elemento de visualização do cartão
    cardNumber.textContent = cardNumberValue;
});

inputCardMonth.addEventListener('input', function () {
    cardMonth.textContent = inputCardMonth.value;
});

inputCardYear.addEventListener('input', function () {
    cardYear.textContent = inputCardYear.value;
});

inputCardCvv.addEventListener('input', function () {
    cardCvv.textContent = inputCardCvv.value;
});

const validateCard = document.getElementById('submit_btn');
const formHidden = document.querySelector('form')
const thankHidden = document.getElementById('thank')

validateCard.addEventListener('click', function () {
    formHidden.classList.add('d-none');
    thankHidden.classList.remove('d-none');
});

const returnForm = document.getElementById('return_btn');

returnForm.addEventListener('click', function () {
    formHidden.classList.remove('d-none');
    thankHidden.classList.add('d-none');
})