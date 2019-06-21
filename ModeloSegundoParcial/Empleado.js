"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    //Constructor
    function Empleado(nombre, apellido, edad, horario, legajo) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.horario = horario;
        _this.legajo = legajo;
        return _this;
    }
    //Getters
    Empleado.prototype.getHorario = function () {
        return this.horario;
    };
    Empleado.prototype.getLegajo = function () {
        return this.legajo;
    };
    //Funciones
    Empleado.prototype.empleadoToJson = function () {
        return JSON.stringify(this);
    };
    return Empleado;
}(Persona));
