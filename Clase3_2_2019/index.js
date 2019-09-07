window.addEventListener("load",function(){
    var btnGuardar = document.getElementById("Guardar");
    btnGuardar.addEventListener("click",Agregar);
    var link = document.getElementById("link");
    //link.addEventListener("click",Borrar);
});

function Agregar(){
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    /*var tabla = document.getElementById("tabla");*/

    if(nombre == "" || apellido == ""){
        document.getElementById("txtNombre").className = "error";
        document.getElementById("txtApellido").className = "error";

        alert("LLenar todos los datos");
    }
    else{
        document.getElementById("txtNombre").className = "sinError";
        document.getElementById("txtApellido").className = "sinError";
        var tBody = document.getElementById("cuerpoTabla");

        var html = tBody.innerHTML;
        html = html+"<tr><td>"+nombre+"</td><td>"+apellido+"</td><td><a href='' onclick='Borrar(event)' id='link'>Borrar</a></td></tr>";
        tBody.innerHTML= html;
    }
}

function Borrar(e){
    //propiedad target: cual fue el elemento que ejecuto el evento.
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.parentNode);

    e.target.parentNode.parentNode.innerHTML=""
}



