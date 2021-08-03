"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_js_1 = require("./node_modules/crypto-js");
var Config = /** @class */ (function () {
    function Config() {
        this.source = '';
        this.source = '';
    }
    return Config;
}());
var Md5 = /** @class */ (function () {
    function Md5(value) {
        var _this = this;
        this.getValue = function () {
            return _this.value;
        };
        this.getCode = function () {
            return _this.code;
        };
        this.value = value;
        this.code = crypto_js_1.CryptoJS.MD5(value.toString());
    }
    return Md5;
}());
var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var value = document.querySelector('input').value.toString();
    if (!value) {
        throw new Error('Erro ao gerar valor');
    }
    document.getElementById('retorno').innerHTML = value;
});
