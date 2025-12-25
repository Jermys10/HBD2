$(window).on('load', function () {
  $('.loading').fadeOut('fast');
  $('.container').fadeIn('fast');
});

$('document').ready(function () {
  var vw;

  // Helper: posicionar globos centrados
  function positionBalloonsCentered() {
    vw = $(window).width() / 2;

    // detener animaciones
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();

    // si ya están renombrados (b11..b88), los animamos centrados
    $('#b11').animate({ top: 240, left: vw - 350 }, 500);
    $('#b22').animate({ top: 240, left: vw - 250 }, 500);
    $('#b33').animate({ top: 240, left: vw - 150 }, 500);
    $('#b44').animate({ top: 240, left: vw - 50 }, 500);
    $('#b55').animate({ top: 240, left: vw + 50 }, 500);
    $('#b66').animate({ top: 240, left: vw + 150 }, 500);
    $('#b77').animate({ top: 240, left: vw + 250 }, 500);
    $('#b88').animate({ top: 240, left: vw + 350 }, 500);
  }

  $(window).resize(function () {
    positionBalloonsCentered();
  });

  $('#turn_on').click(function () {
    $('#bulb_yellow').addClass('bulb-glow-yellow');
    $('#bulb_red').addClass('bulb-glow-red');
    $('#bulb_blue').addClass('bulb-glow-blue');
    $('#bulb_green').addClass('bulb-glow-green');
    $('#bulb_pink').addClass('bulb-glow-pink');
    $('#bulb_orange').addClass('bulb-glow-orange');
    $('body').addClass('peach');
    $(this).fadeOut('slow').delay(5000).promise().done(function () {
      $('#play').fadeIn('slow');
    });
  });

  $('#play').click(function () {
    var audio = $('.song')[0];
    audio.play();
    $('#bulb_yellow').addClass('bulb-glow-yellow-after');
    $('#bulb_red').addClass('bulb-glow-red-after');
    $('#bulb_blue').addClass('bulb-glow-blue-after');
    $('#bulb_green').addClass('bulb-glow-green-after');
    $('#bulb_pink').addClass('bulb-glow-pink-after');
    $('#bulb_orange').addClass('bulb-glow-orange-after');
    $('body').css('backgroud-color', '#FFF');
    $('body').addClass('peach-after');
    $(this).fadeOut('slow').delay(6000).promise().done(function () {
      $('#bannar_coming').fadeIn('slow');
    });
  });

  $('#bannar_coming').click(function () {
    $('.bannar').addClass('bannar-come');
    $(this).fadeOut('slow').delay(6000).promise().done(function () {
      $('#balloons_flying').fadeIn('slow');
    });
  });

  function loopOne() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopOne();
    });
  }
  function loopTwo() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopTwo();
    });
  }
  function loopThree() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopThree();
    });
  }
  function loopFour() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFour();
    });
  }
  function loopFive() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFive();
    });
  }
  function loopSix() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSix();
    });
  }
  function loopSeven() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b7').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSeven();
    });
  }
  function loopEight() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b8').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopEight();
    });
  }

  $('#balloons_flying').click(function () {
    $('.balloon-border').animate({ top: -500 }, 8000);

    // agrega el 8 a la rotación
    $('#b1,#b4,#b5,#b7,#b8').addClass('balloons-rotate-behaviour-one');
    $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');

    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();
    loopEight();

    $(this).fadeOut('slow').delay(5000).promise().done(function () {
      $('#cake_fadein').fadeIn('slow');
    });
  });

  $('#cake_fadein').click(function () {
    $('.cake').fadeIn('slow');
    $(this).fadeOut('slow').delay(3000).promise().done(function () {
      $('#light_candle').fadeIn('slow');
    });
  });

  $('#light_candle').click(function () {
    $('.fuego').fadeIn('slow');
    $(this).fadeOut('slow').promise().done(function () {
      $('#wish_message').fadeIn('slow');
    });
  });

  $('#wish_message').click(function () {
    vw = $(window).width() / 2;

    // detener y renombrar (incluye b8)
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
    $('#b1').attr('id', 'b11');
    $('#b2').attr('id', 'b22');
    $('#b3').attr('id', 'b33');
    $('#b4').attr('id', 'b44');
    $('#b5').attr('id', 'b55');
    $('#b6').attr('id', 'b66');
    $('#b7').attr('id', 'b77');
    $('#b8').attr('id', 'b88');

    // centrado perfecto para 8 globos
    $('#b11').animate({ top: 240, left: vw - 350 }, 500);
    $('#b22').animate({ top: 240, left: vw - 250 }, 500);
    $('#b33').animate({ top: 240, left: vw - 150 }, 500);
    $('#b44').animate({ top: 240, left: vw - 50 }, 500);
    $('#b55').animate({ top: 240, left: vw + 50 }, 500);
    $('#b66').animate({ top: 240, left: vw + 150 }, 500);
    $('#b77').animate({ top: 240, left: vw + 250 }, 500);
    $('#b88').animate({ top: 240, left: vw + 350 }, 500);

    $('.balloons').css('opacity', '0.9');
    $('.balloons h2').fadeIn(3000);

    $(this).fadeOut('slow').delay(3000).promise().done(function () {
      $('#story').fadeIn('slow');
    });
  });

  $('#story').click(function () {
    $(this).fadeOut('slow');
    $('.cake').fadeOut('fast').promise().done(function () {
      $('.message').fadeIn('slow');
    });

    function msgLoop(i) {
      var total = $('.message p').length;

      // Si llegamos al final, mostramos el video
      if (i >= total) {
        // ocultar el último visible por si acaso
        $('.message p').fadeOut('slow');

        // mostrar video final
        $('#finalVideoSection').fadeIn('slow', function () {
          var v = document.getElementById('finalVideo');
          if (v) {
            v.muted = false; // ponelo en true si querés facilitar autoplay en móviles
            v.loop = true;
            v.play().catch(function () { /* algunos navegadores bloquean autoplay */ });
          }
        });

        // opcional: volver a mostrar el queque
        $('.cake').fadeIn('fast');
        return;
      }

      // Oculta el anterior (si i==0 no hay anterior)
      if (i > 0) {
        $(".message p:nth-child(" + i + ")").fadeOut('slow');
      }

      // Muestra el actual
      $(".message p:nth-child(" + (i + 1) + ")")
        .fadeIn('slow')
        .delay(1200)
        .promise()
        .done(function () {
          msgLoop(i + 1);
        });
    }

    // INICIAR
    msgLoop(0);
  });
});
