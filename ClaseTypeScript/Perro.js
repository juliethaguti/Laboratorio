"use strict";
var animal;
(function (animal) {
    var Perro = /** @class */ (function () {
        //No existe la sobrecarga se haria el constructor con parametros y ?
        function Perro(nombre) {
            this.nombre = ""; //Por defecto público //si es privado hacer getter setter
            if (nombre != undefined) {
                this.nombre = nombre;
            }
        }
        Perro.prototype.hacerRuido = function () {
            return "Guau!!";
        };
        Perro.prototype.getNombre = function () {
            return this.nombre;
        };
        Perro.prototype.setNombre = function (nombre) {
            this.nombre = nombre;
        };
        return Perro;
    }());
    animal.Perro = Perro;
})(animal || (animal = {}));
