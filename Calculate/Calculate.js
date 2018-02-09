function calculate(){
var t=widthBox.value;
//read from the textBox
var w=document.getElementById("widthBox").value;
var l=document.getElementById("lenghtBox").value;
var h=document.getElementById("heightBox").value;
w=parseFloat(w);
h=parseFloat(h);
l=parseFloat(l);
var result=w*l*h;
document.getElementById("result").innerHTML=result;
}