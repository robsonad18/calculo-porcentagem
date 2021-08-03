const form = (document!.querySelector('[data-form-calc]') as HTMLFormElement);

form.addEventListener('submit', function(event:Event){
    event.preventDefault();

    let porcentagem = (document!.querySelector('[data-input-porcentagem]') as HTMLInputElement).value;
    let valor       = (document!.querySelector('[data-input-valor]') as HTMLInputElement).value;

    if (!porcentagem || !valor) {
        throw new Error('Nenhum valor encontrado');
    }

    let calc = (Number(valor) / 100) * Number(porcentagem);

    (document!.querySelector('h1') as HTMLElement).textContent = calc.toString() + '%';

});


(document!.querySelector('[data-limpar]') as HTMLButtonElement).addEventListener('click',function(event:Event){
    event.preventDefault();

    window.location.reload();
});