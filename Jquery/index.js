//$("document").ready(saludar)
window.addEventListener("load",function(){
    /* console.log(this.document.getElementById("parrafo").innerHTML); */
    console.log($("#parrafo").html("algo"));
    console.log($("#parrafo").html());
    /* this.document.getElementById("#btn").addEventListener("click",saludar); */
    $("#btn").click(saludar);
    $("#txt").val('Nuevo valor')//Con parametro set y sin parametro get
    $("#txt").attr('id')
    //luego hacer ajax jquery
});

function saludar(){
    alert("Hola");
}