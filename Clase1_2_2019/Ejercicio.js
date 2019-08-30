var nombre;
nombre = "Juliet";
nombre = 132;

// if(nombre == 132){
//     alert("El nombre es 132");
// }
// else{
//     alert("Usted no es 132");
// }
var a = cargar;//Esta es una funcion solo pasada como parámetro.
//JAvascript utiliza funciones como variable guardandolas en la variable.

function cargar(){
    var boton = document.getElementById("btn");
    boton.onclick = mostrar;
}

window.onload = a; //setear la variable, puede ser también window.onload = cargar;. Ejecuta la funcion cuando termine de cargar, 
//sin colocar los parentesis porque yo no la ejecuto. La ejecuta el evento al final de cargar la página.

//window.addEventListener("load", cargar); -> Tambien puede ser... Pero con este puede agregar mas de una función.

console.log(sumar(1,2));
function sumar(num1, num2){
    console.log(num1);
    //alert(num1+num2);
    return num1+num2;
}

function mostrar(){
    var usuario = document.getElementById("usr");
    var Password = document.getElementById("pass");

    if(usuario.value == "juliet"){
        alert("el usuario es valido");
    }
    else{
        alert("El usuario no es válido");
    }

    if(Password.value == 321){
        alert("La contraseña es valida");
    }
    else{
        alert("La contraseña no es válida");
    }
}