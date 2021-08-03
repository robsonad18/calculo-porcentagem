"use strict";
var form = document.querySelector('[data-form-calc]');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var porcentagem = document.querySelector('[data-input-porcentagem]').value;
    var valor = document.querySelector('[data-input-valor]').value;
    if (!porcentagem || !valor) {
        throw new Error('Nenhum valor encontrado');
    }
    var calc = (Number(valor) / 100) * Number(porcentagem);
    document.querySelector('h1').textContent = calc.toString() + '%';
});
document.querySelector('[data-limpar]').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.reload();
});
