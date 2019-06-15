"use strict";
//En html se hace referencia al archivo js
var lista = new Array(); //Guardar el local storage para no pisarla
/* lista.push(new animal.Perro ("Pepe"));
lista.push(new animal.Gato()); */
lista.forEach(saludar);
function saludar(mi) {
    console.log(mi.hacerRuido());
}
function otraCosa() {
    console.log("Hace algo");
}
/* function saludar():string{
    let miPerro:Perro = new Perro("Pepe");
    let miPerro2:Perro = new Perro();
    return miPerro.hacerRuido()+" - "miGato.hacerRuido();
} */
var i;
function agregar() {
    var nombre = String($("#nombre").val());
    lista.push(new animal.Perro(nombre));
}
function modificar() {
    var indice = Number($("#indice").val());
    var nombre = String($("#nombre").val());
    for (var i_1 = 0; i_1 < lista.length; i_1++) {
        var animal_1 = lista[i_1];
        if (indice == i_1) {
            lista[i_1].setNombre(nombre);
        }
    }
}
function eliminar() {
}
//importar con /// path=...
//importar con namespace
//En html tener en cuenta el orden de los archivos js.
//Exportar funciones tambien.
