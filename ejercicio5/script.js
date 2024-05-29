document.getElementById("clickMe").onclick = test;
function test(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    alert("El área es de "+(((a-c)*b/2)+(b*c))+" metros cuadrados");
}   