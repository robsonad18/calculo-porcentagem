import {CryptoJS} from './node_modules/crypto-js';

class Config {
    private source: string = '';

    constructor() {
        this.source = '';
    }
}

class Md5{
    private value: number;

    private code:string;

    constructor(value: number) {
        this.value = value;

        this.code = CryptoJS.MD5(value.toString());
    }

    public getValue = () => {
        return this.value;
    }

    public getCode = () => {
        return this.code;
    }
}


const form = (document!.querySelector('form') as HTMLFormElement);

form.addEventListener('submit', function(event:Event){
    event.preventDefault();

    const value:string = (document!.querySelector('input') as HTMLInputElement).value.toString();

    if (!value) {
        throw new Error('Erro ao gerar valor');
    }

    (document!.getElementById('retorno') as HTMLDivElement).innerHTML = value;
});

