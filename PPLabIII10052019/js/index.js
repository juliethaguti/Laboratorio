var xhr = new XMLHttpRequest();

window.addEventListener("load",function(){
    mostrarFormulario(true);
    xhr.open("GET","http://localhost:3000/materias",true);
    xhr.onreadystatechange = callback;
    xhr.send();
    var btnCerrar = document.getElementById("btnCerrar");
    btnCerrar.addEventListener("click",cerrar);
    var btnModificar = document.getElementsByClassName("modificar");
    btnModificar.addEventListener("click",modificar);
});

function callback(){
    if(xhr.readyState === 4 && xhr.status === 200){

        var resp = xhr.responseText;
        var array = JSON.parse(resp);
        cargar(array);
    }
    else{
        console.log("ERROR"+xhr.status);
    }
}

function cargar(respuesta){
    var tabla = document.createElement("table");
    document.getElementById("detalleBackground").appendChild(tabla);
    var cabezaTabla = document.createElement("thead");
    tabla.appendChild(cabezaTabla);
    var nombreTitulo = document.createElement("th");
    cabezaTabla.appendChild(nombreTitulo);
    nombreTitulo.appendChild(document.createTextNode("Nombre"));
    var cuatriTitulo = document.createElement("th");
    cabezaTabla.appendChild(cuatriTitulo);
    cuatriTitulo.appendChild(document.createTextNode("Cuatrimestre"));
    var fechaF = document.createElement("th");
    cabezaTabla.appendChild(fechaF);
    fechaF.appendChild(document.createTextNode("Fecha Final"));
    var turnoTitulo = document.createElement("th");
    cabezaTabla.appendChild(turnoTitulo);
    turnoTitulo.appendChild(document.createTextNode("Turno"));
    var cuerpoTabla = document.createElement("tbody");
    tabla.appendChild(cuerpoTabla);
    
    for(var i = 0; i<15;i++){
        
        var fila = document.createElement("tr");
        cuerpoTabla.appendChild(fila);
        fila.addEventListener("dblclick",dobleClick);
        var columna = document.createElement("td");
        fila.appendChild(columna);
        var nombre = document.createTextNode(respuesta[i].nombre);
        columna.appendChild(nombre);
        var columnaCuatri = document.createElement("td");
        fila.appendChild(columnaCuatri);
        var cuatrimestre = document.createTextNode(respuesta[i].cuatrimestre);
        columnaCuatri.appendChild(cuatrimestre);
        var columnaFecha = document.createElement("td");
        fila.appendChild(columnaFecha);
        var fechaFinal = document.createTextNode(respuesta[i].fechaFinal);
        columnaFecha.appendChild(fechaFinal);
        var columnaTurno = document.createElement("td");
        fila.appendChild(columnaTurno);
        var turno = document.createTextNode(respuesta[i].turno);
        columnaTurno.appendChild(turno);
    }
}

function mostrarFormulario(mostrar){
    var Formulario = document.getElementById("contenedor");
    Formulario.hidden = mostrar;
}

function dobleClick(){
    mostrarFormulario(false);
    
}

function cerrar(){
    mostrarFormulario(true);
}

function modificar(){

}