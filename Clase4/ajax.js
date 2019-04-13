var xml = new XMLHttpRequest();
window.addEventListener("load",function(){
    var btn = $("btn");
    btn.addEventListener("click",enviarGet);
});

function callback(){
    if(xml.readyState===4){
        if(xml.status===200){
            var respuesta = xml.responseText;
            if(respuesta == "true"){
                alert("login ok")
            }
            else if(respuesta == "false"){
                alert("Usuario o contraseña incorrectos")
            }
            else{
                alert(respuesta);
            }
        }      
    }
}
function enviarGet(){
    var usr = $("usr");
    var pass =$("pass");

    if(usr.value!=""&&pass.value!=""){
        var parametros ="usr="+usr.value+"&pass="+pass.value;
        xml.open("GET","http://localhost:3000/login"+parametros,true)
        xml.onreadystatechange = callback;
        xml.send();
    }else{
        alert("Debe ingresar usuario y pass")
    }
}

function $(id){
    return document.getElementById(id);
}