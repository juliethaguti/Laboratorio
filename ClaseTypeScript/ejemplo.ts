    
//En html se hace referencia al archivo js

let lista:Array<animal.Perro> = new Array<animal.Perro>();//Guardar el local storage para no pisarla
/* lista.push(new animal.Perro ("Pepe"));
lista.push(new animal.Gato()); */

lista.forEach(saludar);

function saludar(mi:animal.Animal){
    console.log(mi.hacerRuido());
}

function otraCosa(){
    console.log("Hace algo");
}
/* function saludar():string{
    let miPerro:Perro = new Perro("Pepe");
    let miPerro2:Perro = new Perro();
    return miPerro.hacerRuido()+" - "miGato.hacerRuido();
} */

var i;

function agregar():void{
    let nombre: string = String($("#nombre").val());
    lista.push(new animal.Perro (nombre));
    
}

function modificar(){
    let indice :number = Number($("#indice").val());
    let nombre: string = String($("#nombre").val());
    for(let i = 0; i < lista.length; i++){
        let animal = lista[i];
        if(indice == i){
            lista[i].setNombre(nombre);
        }   
    }
}

function eliminar(){

}
//importar con /// path=...
//importar con namespace
//En html tener en cuenta el orden de los archivos js.
//Exportar funciones tambien.
