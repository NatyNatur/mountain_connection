$(document).ready(function(){
	//mostrar textarea para comentar 
	$(".btn-comentar").click(function(){
		$("#comentario").removeClass('none').addClass('block');
	}); 

	//agregar comentario
$('#comentario').bind("enterKey",function(e){
var comentario= $("#comentario").val(); 
var momentoActual= new Date();
		var hora= momentoActual.getHours(); 
		var minutos= momentoActual.getMinutes(); 
		var horaImprimible= hora + ":" + minutos; 
$(".line").after('<div class="caja-comentario-post">' +
														'<div class="comentario-de-post">'+ 
																'<p class="comentario-nuevo">' + horaImprimible + '</p><br>'+
																'<p class="comentario-nuevo">' + comentario + '</p>'+
																'<div id="img-comentario-post"></div>'+
															'</div>'+
														'</div>'); 
$("#comentario").val("");
});
$('#comentario').keyup(function(e){
if(e.keyCode == 13)
{
  $(this).trigger("enterKey");
}

;
});
	

});
		