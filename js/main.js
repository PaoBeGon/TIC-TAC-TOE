$(document).ready(function(){
	$(".cont").on("click",marcar);
		$(this).html("x")

		$(".reiniciar").on("click",function(a){
		$(".cont").html("")
	});

	$(".cont").on("click",function(a){
		var x1=$("#cas1").text()
		var x2=$("#cas2").text()
		var x3=$("#cas3").text()
		var x4=$("#cas4").text()
		var x5=$("#cas5").text()
		var x6=$("#cas6").text()
		var x7=$("#cas7").text()
		var x8=$("#cas8").text()
		var x9=$("#cas9").text()

		if(x1==x2 && x2==x3 && x1!="")
			alert("Jugador "+x1+ " gana");
		else if(x4==x5 && x5==x6 && x4!="")
			alert("Jugador "+x4+ " gana");
		else if(x7==x8 && x8==x9 && x7!="")
			alert("Jugador "+x7+ " gana");
		else if(x1==x4 && x4==x7 && x1!="")
			alert("Jugador "+x1+ " gana");
		else if(x2==x5 && x5==x8 && x2!="")
			alert("Jugador "+x2+ " gana");
		else if(x3==x6 && x6==x9 && x3!="")
			alert("Jugador "+x3+ " gana");
		else if(x1==x5 && x5==x9 && x1!="")
			alert("Jugador "+x1+ " gana");
		else if(x3==x5 && x5==x7 && x3!="")
			alert("Jugador "+x3+ " gana");
		if(i==9){
			alert("Empate")
			i=0;
		}
		
	});

});

var i=0;
function marcar(){
	i++;
	if(i%2==0)
		$(this).text("o");
	else
		$(this).text("x");
}