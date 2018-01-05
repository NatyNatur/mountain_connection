$(document).ready(function(){
	//mostrar textarea para comentar 
	$(".btn-comentar").click(function(){
		$("#comentario").removeClass('none').addClass('block');
	}); 
//Agregar post 
$("#btn-publicar").click(function(){
  var firstName= "First name"; //reemplazar para llamado desde base de datos. 
  var lastName= "Last Name"; 
  var name = firstName + " " + lastName + " -- "; 
  var mypost = $("#mypost").val(); 
  var momentoActual= new Date();
  var hora= momentoActual.getHours(); 
  var minutos= momentoActual.getMinutes(); 
  var horaImprimible= hora + ":" + minutos; 
  console.log(mypost);
  $("#post-friend").before('<div class="container-fluid">'+
                            '<div class="row">'+
                              '<div class="post-friend panel panel-default" id="post-friend">'+
                                '<div class="row">' +
                                  '<div class="panel-heading">'+
                                    '<div class="caja-imagen">'+
                                      '<div class="imagen-friend" id="myimg"></div>'+
                                    '</div>'+
                                    '<div class="name-friend"> <p>'+ name +'</p></div>'+
                                  '</div>'+
                                '</div>'+

                                '<div class="row">'+
                                  '<div class="mensaje-friend"><p>' + mypost +'</p></div>'+
                                '</div>'+
                  
                                '<div class="row">'+
                                 '<div class="reacciones-friend">'+
                                    '<button type="button" class="btn btn-xs btn-link"><span class="glyphicon glyphicon-thumbs-up"></span></button>'+
                                    '<button type="button" class="btn btn-comentar">Comentar</button>'+
                                  '</div>'+
                                '</div>'+
                                
                                '<hr class="line">'+
                                '<textarea placeholder="Escribe tu comentario ..." class="comentar-post none" id="comentario"></textarea>'+
                              '</div>'+
                            '</div>'+
                          '</div>'); 
  $("#mypost").val("");

}); 

  $(document).on('change', '.btn-file :file', function() {
    var input = $(this),
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [label]);
  });

  $('.btn-file :file').on('fileselect', function(event, label) {
    var input = $(this).parents('.input-group').find(':text'),
      log = label;

      if( input.length ) {
        input.val(log);
      } else {
        if( log ) alert(log);
      }

    });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#img-upload').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imgInp").change(function(){
    readURL(this);
  });

  $("#clear").click(function(){
    $('#img-upload').attr('src','');
    $('#urlname').val('');
  });

 $('[data-toggle="tooltip"]').tooltip()

});
    