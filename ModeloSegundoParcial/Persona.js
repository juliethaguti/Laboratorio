"use strict";
var Persona = /** @class */ (function () {
    //Constructor
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    //Propiedades
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    //Funciones
    Persona.prototype.personaToJson = function () {
        return JSON.stringify(this);
    };
    return Persona;
}());
