window.addEventListener("load",function(){
    var boton = document.getElementById("btn");
    boton.addEventListener("click",agregar); //Agregar el boton agregar
});

function $(id){
    return document.getElementById(id);
}

function agregar(){
    var nombre = $("Nombre").value;
    var apellido = $("Apellido").value;
    // var apellido = document.getElementById("nombre").value;
    // var nombre = document.getElementById("apellido").value;
    if(apellido == "" || nombre == "")
    {
        document.getElementById("Nombre").className="error";
        document.getElementById("Apellido").className="error";
        alert("Debe ingresar un nombre y un apellido");

        return;
    }
    var respuesta = confirm("Esta seguro que desea agregar a un persona?");
    if(respuesta == true)
    {
        document.getElementById("Nombre").className="sinError";
        document.getElementById("Apellido").className="sinError";
        var tCuerpo = document.getElementById("tCuerpo");

        tCuerpo.innerHTML = tCuerpo.innerHTML +
        "<td>"+nombre+"</td>"+
        "<td>"+apellido+"</td>"+
        "<td><a href=''borrar</a></td>";
        cerrar();
    }
}

function abrir(){
    var contAgregar = document.getElementById("contAgregar");
    var btn = document.getElementById("btn");
    btn.hidden = true;

    contAgregar.hidden = false;
}

function cerrar(){
    var contAgregar = document.getElementById("contAgregar");
    var btn = document.getElementById("btn");
    //contAgregar.removeAttribute(LaClaseQueQuiero remover,laotra)
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
}

