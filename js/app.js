$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        fade:true,
        pauseOnHover: false,
        speed: 1000
    });


    var typed = new Typed('.services_type', {
        strings: ['Широкоформатная печать', 'Государственная символика', 'Наружная реклама', 'Полиграфия и сувенирная продукция', 'Оформление мероприятий', 'Дизайн макеты и 3D-моделирование', 'Флажная продукция', 'Оформление офисов и точек продаж', 'Застройка выставочных стендов'],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
      });

      $(".tab_item").not(":first").hide();
      $(".tab").click(function() {
          $(".tab").removeClass("active").eq($(this).index()).addClass("active");
          $(".tab_item").hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass("active");

  });






          