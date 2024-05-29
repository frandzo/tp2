document.getElementById("subm").onclick = test;
function test(){
    console.log("TEST");
    if(!document.getElementById("registro").checkValidity()){
        document.getElementById("p").style="visibility:visible;color:red;"
        document.getElementById("p").innerHTML = "Datos Inválidos!";
    }else{
        document.getElementById("p").style="visibility:visible;color:green;"
        document.getElementById("p").innerHTML = "Registro Exitoso!";
    }
}   