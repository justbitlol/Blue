function multiplication(){
	document.getElementById("mult-tb").innerHTML ="";
	var f=document.getElementById("factor").value;
	for(var i=1; i<=10; i++){
	var res=f*i;
	document.getElementById("mult-tb").innerHTML += res+ "<br/>";
}
}
