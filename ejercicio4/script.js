document.getElementById("clickMe").onclick = test;
function test(){
    var h=document.getElementById("h").value;
    var m=document.getElementById("m").value;
    alert(m/(h*0.01*h*0.01));
}   