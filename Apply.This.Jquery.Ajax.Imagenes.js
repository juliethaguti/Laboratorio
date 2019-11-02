this === window // true
var person 1 = {
name: 'Carlos',lastName:'Lopez'}

var printName = function(){
console.log(this.name+this.lastName}
printName.apply(person1); //this === person1

$('div').click(function(){
    $(this).hide();//No es necesario pasar el event, se hace de esta manera. 
    //Con el this capturo el objeto que tuvo en el evento
    //$(this).show();
});

$('#div').fadeIn();
$('#div').fadeIn('slow');
$('#div').fadeIn(3000);
$('#div').fadeOut();

$.ajax()//Recibe solo un parametro, un objeto json y podemos setearle todas las propiedades que quiera. 
//ContentType para envios de objetos json -> application/json url,type, data, success

//Bootstrap : npm init y despues: npm install --save bootstrap
//Bootstrap siempre te da una hoja de estilos. Hacer referencia a bootstrap.min.css

/* El valor por defecto del div toma el 100% de la pantalla la clase row lo divide en 12, el otro div lo divide digamos en 4 columnas
class='col-md-4 col-sm-1' En cuanto se divide la pantalla segun el tamaño de la columna. Para que sea responsive tenemos que setear todos los 
tamaños de la pantalla como queremos que se vea.

Alineaciones verticales u horizontales 
*Verticales:
class='row align-items-end'
Si no sobre los hijos class='col-alig-self-center'
*Horizontal:
row-justify-content-end

Orientación:
class:'col-3 order-3' ó 
class='col-3 order-md-2 order-lg-3'
SE puede cambiar el orden de acuerdo al tamaño de la columna

Anidamiento de columnas

Offset: Nos permite saltear columnas*/