window.addEventListener("load", function(){
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