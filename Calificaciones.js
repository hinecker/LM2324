var notas=[];
function anadir(){
let numero= document.getElementById("numero").value;
if(numero<0 || numero>10){
    Document.getElementById("aviso").innerHTML="Debes introducir un número entre 0 y 10"
}
else {
    notas.push(numero);
    document.getElementById("notas").innerHTML = notas;
}
}
function borrar(){
document.getElementById("aviso").innerHTML ="";
document.getElementById("notas").innerHTML ="";
notas=[];
}
function calcularMedia(){
let total=0.0;
for (vsr i=0;i<notas,length;i++){
    total= total + notas[i];
}
total = total / notas.length:
document.getElementById("resultado").innerHTML = total;
}
