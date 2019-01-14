$(document).ready(function(){

$("#navbar").hide();
$("#wrapper").hide();
$('#btnup').hide();

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
//parallax
$(window).scroll(function() {
	if ($(window).scrollTop() > $('#acercadenosotros').offset().top) {
		$('#btnup').fadeIn()
	}else{
		$('#btnup').hide()
	}
});
//end document ready function
});

