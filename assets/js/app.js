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
    