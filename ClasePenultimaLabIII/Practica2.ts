// Funciones Básicas
function sumar( a, b ){
  return a + b;
}
var sumarTs = (a,b)=>a+b;

var contar = function( heroes ){
  return heroes.length;
}
var contarTs = (heroes)=>heroes.length;

var superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
/* function llamarBatman( llamar ){
  if( llamar ){
    console.log("Batiseñal activada");
  }
} */
function llamarBatman(llamar:boolean = false){
  if( llamar ){
    console.log("Batiseñal activada");
  }
}
llamarBatman();

// Rest?
function unirheroes( ...personas:string[] ){
  return personas.join(", ");
}


// Tipo funcion
function noHaceNada( numero, texto, booleano, arreglo ){
}
//type 
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco;
