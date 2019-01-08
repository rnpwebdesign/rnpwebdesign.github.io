$(document).ready(function(){


$("#navbar").hide();
$("#wrapper").hide();

//cargador de página
(function() {

	var preload = document.getElementById("preload");
	var loading = 0;
	var id = setInterval(frame, 10);

	function frame() {
		if (loading == 100) {
			clearInterval(id);
		} else {
			loading = loading + 1;
			if (loading == 90) {
				$("#preload").fadeOut(600);
				$("#navbar").delay(600).show();
				$("#wrapper").delay(600).show();
			}
		}
	}

})();
//scroll
var ScrollLink = $('.scroll');
ScrollLink.click(function(e) {
	e.preventDefault()
	$('body,html').animate({
		scrollTop: $(this.hash).offset().top
	}, )
});
// boton que va al principio de la pagina
$('#btnup').click(function(){
	$('body,html').animate({scrollTop: 0},)
});
//



//enviar mail
$(function($){
		$("#form").submit(function(event){
			event.preventDefault();
				$.ajax({
			    url: "https://formspree.io/ramironietopalacio@gmail.com", 
			    method: "POST",
			    data: {
			    	nombre: $("#nombre").val(),
			    	email: $("#email").val(),
			    	mensaje: $("#textarea").val(),
				},
			    dataType: "json"
				}).done(function(){
					$("#nombre").val("");
			    	$("#email").val("");
			    	$("#textarea").val("");
					$(".formresponse").addClass("text-success").text("Mensaje enviado con éxito")					
				}).fail(function(){
					$(".formresponse").addClass("text-danger").text("Hubo un error en el envío de tu mensaje")
				});
		});
});
//parallax
$(window).scroll(function() {
	if (true) {}
});
//end document ready function
});

