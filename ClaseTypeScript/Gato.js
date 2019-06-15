"use strict";
var animal;
(function (animal) {
    var Gato = /** @class */ (function () {
        function Gato() {
        }
        Gato.prototype.hacerRuido = function () {
            return "miau";
        };
        return Gato;
    }());
    animal.Gato = Gato;
})(animal || (animal = {}));
