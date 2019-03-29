//window.addEventListener("load",inicio)
//funcion anonima
window.addEventListener("load",function(){
    var btnSumar = document.getElementById("btnSumar");
    btnSumar.addEventListener("click",sumar)

    var btnSumarGuardar = document.getElementById("btnSumarGuardar");
    btnSumarGuardar.addEventListener("click",guardar);
})
function sumar()
{
  var num1 = document.getElementById("inNum1");
  var num2 = document.getElementById("inNum2");
  var resul = document.getElementById("inResul");

  var resultado = parseInt(num1.value)+parseInt(num2.value);
  
  resul.value = resultado;
}

function guardar(){
    var num1 = document.getElementById("inNum1").value;
    var num2 = document.getElementById("inNum2").value;
    var resul = document.getElementById("inResul").value;
    var tabla = document.getElementById("tabla");
    console.log(tbody.innerHTML);
    //Devuelve todo lo que está entre apertura y cierre
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "<tr><td>"+num1+"</td></tr>";
}