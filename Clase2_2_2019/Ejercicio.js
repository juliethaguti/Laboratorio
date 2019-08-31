window.addEventListener("load",function(){
    var btnSumar = document.getElementById("sumar");
    btnSumar.addEventListener("click",Sumar);
    var btnSumaYGuarda = document.getElementById("sumGuarda");
    btnSumaYGuarda.addEventListener("click",SumarGuardar);
});

function Sumar(){
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var resul = document.getElementById("resultado");

    var resultado = parseInt(num1.value)+parseInt(num2.value);

    resul.value = resultado;
}
//Hacer funciones para el parcial
function SumarGuardar(){
    Sumar();
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resul = document.getElementById("resultado").value;
    var tabla = document.getElementById("tabla");
    var tbody = document.getElementById("CuerpoTabla");
    var html = tbody.innerHTML;
    html = html+"<tr><td>"+num1+"</td><td>"+num2+"</td><td>"+resul+"</td></tr>";
    tbody.innerHTML= html;
}