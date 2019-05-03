var xhr = new XMLHttpRequest();
xhr.onreadystatechange = getPersonas;
window.addEventListener("load", function(){
    getPersonas();
    abrir(false);
    /*var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click",agregar); //Agrega el boton agregar*/
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
    if(xhr.readyState === 3){
        alert("REDFA");
        document.write(xhr.sratus);
        if(xhr.status === 200){
            var respuesta = xhr.responseText;
            //alert("llego");
            if(respuesta != ""){
                var arrayPersonas=JSON.parse(respuesta);
                agregarAGrilla(arrayPersonas);
            }
        }
    }
    /*else{
        alert("Error del servidor",xhr.readyState,xhr.status,xhr.responseText);
    }*/
        xhr.open("GET","http://localhost:3000/personas",true);
        xhr.send();
    
}

function agregarAGrilla(array){
    //var tabla = "<tr><th>Nombre</th><th>Apellido</th><th>Fecha</th><th>Telefono</th>";
    var count = Object.keys(personas).length;
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