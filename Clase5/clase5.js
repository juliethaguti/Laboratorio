var xhr = new XMLHttpRequest();

window.addEventListener("load", function(){
    xhr.open("GET","http://localhost:3000/personas",true);
    xhr.onreadystatechange = getPersonas;
    xhr.send();
    abrir(false);
});

/*function $(id){
    return document.getElementById(id);
}*/

function agregar(){ 
    abrir(true);
    limpiar();
}

function abrir(mostrar){
    var contAgregar = document.getElementById("contenedor");
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.hidden = mostrar;

    contAgregar.hidden = !mostrar;
}

function guardar(){
    //var nombre = $("Nombre").value;
    //var apellido = $("Apellido").value;
    var nombre = document.getElementById("Nombre").value;
    var apellido  = document.getElementById("Apellido").value;

    if(apellido == "" || nombre == "")
    {
        document.getElementById("Nombre").className="conError";
        document.getElementById("Apellido").className="conError";
        alert("Debe ingresar un nombre y un apellido");
        //return;
    }
    else{
        var respuesta = confirm("Esta seguro que desea agregar a un persona?");
        if(respuesta == true)
        {
            document.getElementById("Nombre").className="sinError";
            document.getElementById("Apellido").className="sinError";
            var tCuerpo = document.getElementById("cuerpoTabla");

            tCuerpo.innerHTML = tCuerpo.innerHTML +
            "<tr><td>"+nombre+"</td><td>"+apellido+"</td><td><a href=''>borrar</a></td>";
            cerrar();   
        }
    }
}

function cerrar(){
    abrir(false);
}

function limpiar(){
    document.getElementById("Nombre").value="";
    document.getElementById("Apellido").value="";
}

function getPersonas(){
    if(xhr.readyState === 4){
        //alert("Llega");
        if(xhr.status === 200){
            var respuesta = xhr.responseText;
            if(respuesta != ""){
                var arrayPersonas=JSON.parse(respuesta);
                agregarPersona(arrayPersonas);
            }
        }
    }
    else{
        alert("Error del servidor",xhr.readyState,xhr.status,xhr.responseText);
    }
}

function agregarPersona(array){
    var cuerpoTabla = document.getElementById("table");
    for(var i = 0;i < array.length; i++){
        var nodoFila = document.createElement("tr");
        var persona = array[i];
        var columnas = Object.keys(persona);
        //cuerpoTabla.appendChild(nodoFila);
        for(var j = 0; j < 5; j++){
            var nodoColumna = document.createElement("td");
            nodoFila.appendChild(nodoColumna);
            var textoCelda = document.createTextNode(persona);
            nodoColumna.appendChild(textoCelda);
        }
    }
}
function agregarAGrilla(array){
    //var tabla = "<tr><th>Nombre</th><th>Apellido</th><th>Fecha</th><th>Telefono</th>";
    var tabla = document.getElementById("table");
    var count = array.length;
    for(var i = 0; i<count;i++){
        tabla += "<tr><td>";
        tabla += array[i].nombre;
        tabla += "</td><td>";
        tabla += array[i].apellido;
        tabla += "</td><td>";
        tabla += array[i].fecha;
        tabla += "</td><td>";
        tabla += array[i].telefono;
        tabla += "</td></tr>"
    }
    document.getElementById("cuerpoTabla").innerHTML = tabla;
}

//Tema : hijos, padres.
/* for(i=0; i< personas.length;i++){
    var row = document.createElement("tr");
    var obj = personas[i];
    var columnas = Object.keys(obj);
    for(var j = 0; j < columnas.length;j++){
        var col = document.createElement(td);
        var text = document.createTextNode(obj[columnas[j]]);
        columnas.appendChild(text);
        row.appendChild(columnas);
    }
    var cel = document.createElement("td");
    var link = document.createElement("a");
    link.setAttribute("href", "#");
    link.addEventListener("click",referenciaFuncion)
    var text = document.createTextNode("borrar");
    link.appendChild("text");
    cel.appendChild("link");
    row.appendChild("cel");
}

function borrar(event){
    event.preventDefault();//Resetea todos los valores por defecto
    event.target//Devuleve el componente de donde salió este evento
} */

/*Hacer modificar, agregar, borrar */

/* localStorage Permite al navegador guardar información. Dos tipos de storage local y session.
clave, valor en formato string. Ej: localStorage.setItem("clave","valor"),var obj = json.parse(localStorage.getItem("obj"))
.setItem("obj",JSON.stringify...); 

    array.slice(índice, cuántosAPartirDeEseIndice) -> Para borrar un elemento o más*/