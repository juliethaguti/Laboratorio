var httpReq = new XMLHttpRequest();

var callback = function{
    if(xml.readyState === 4){
        if(xml.status === 200){
            var respuesta = xml.responseText;
            if(respuesta == "true")
            {
                alert("login ok");
            }
            else if(respuesta == "false"){
                alert("Usuario o contraseña incorrectos");
            }
            else{
                alert(respuesta);
            }
        }
    }
}

function enviar(){
    var email = document.getElementById("txtEmail").value;
    var pass = document.getElementById("txtPassword").value;
    
    var datosLogin = {email:email,password:pass}
    Request.send(JSON.stringify(datosLogin));

}

//window.re