
const inputA = document.querySelector('.input-a');
const inputB = document.querySelector('.input-b');
const selectOperation = document.querySelector('.select-operation');
const button = document.querySelector('.btn-result');
const output = document.querySelector('.output');


button.addEventListener('click', function() {
    const a = Number (inputA.value);
    const b = Number (inputB.value);
    const operation = selectOperation.value;
    const result = calculate ({a, b, operation});

    output.innerHTML = result;
} )