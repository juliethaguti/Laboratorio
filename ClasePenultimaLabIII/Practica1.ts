// Tipos
var batman:string = "Bruce";
var superman:string = "Clark";

var existe:boolean = false;

// Tuplas
var parejaHeroes:[string,string] = [batman,superman];
var villano:[string, number,boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerzas{
  fuerzaFlash = 5,
fuerzaSuperman = 100,
fuerzaBatman = 1,
fuerzaAcuaman = 0}

// Retorno de funciones
/* function activar_batiseñal(){
  return "activada";
} */
let activar_batiseñal:()=>"activada";
/* function pedir_ayuda(){
  console.log("Auxilio!!!");
} */
let pedir_ayuda:() => void;
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log( largoDelPoder );
