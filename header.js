//Animacion de sections
window.addEventListener("load", () => {
  AOS.init();
});

//Cambiar bandera
$(document).ready(function(){
  $(".dropdown-item").click(function(){
      var bandera = $(this).data('bandera');
      $("#bandera-idioma").attr("src", bandera);
  });
});

//Carrusel
$('#carouselProyectos').on('slide.bs.carousel', function (e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $('.carousel-item').length;
  
  if (idx >= totalItems-(itemsPerSlide-1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i=0; i<it; i++) {
      // append slides to end
      if (e.direction=="left") {
        $('.carousel-item').eq(i).appendTo('.carousel-inner');
      }
      else {
        $('.carousel-item').eq(0).appendTo('.carousel-inner');
      }
    }
  }
});