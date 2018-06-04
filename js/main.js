/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Hi, I'm Jerome Baek.", "I'm Web Developer."],
      typeSpeed: 100,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });


  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //


  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });


  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };

  // ========================================================================= //
  //  pieChart
  // ========================================================================= //

  var pieChart = function() {
    $('.chart').easyPieChart({
      scaleColor: false,
      lineWidth: 4,
      lineCap: 'butt',
      barColor: '#FF9000',
      trackColor: "#f5f5f5",
      size: 160,
      animate: 1000
    });
  };

  // ========================================================================= //
  //  swipe next btn 5초마다 클릭.
  // ========================================================================= //

  var circle_chart_event = function() {
    var c = document.getElementById('cir-next-btn');
    c.click();
  };

  // ========================================================================= //
  //  로딩바
  // ========================================================================= //

  var loaderPage = function() {
    $(".page_loader").fadeOut("slow");
  };

  // ========================================================================= //
  //  언어설정
  // ========================================================================= //

  var locale_check = function() {
    $("#locale_check").on("change", function() {
      var language = $("#locale_check").val();
      console.log(language);
      if(language === "ko") {
        var ko_sel_check = $("#locale_check").children()[0].getAttribute("selected");
        if(ko_sel_check === null) {
          location.href="http://jeromebaek-portfolio-ko.ml";
        }
      } else {
        var en_sel_check = $("#locale_check").children()[1].getAttribute("selected");
        console.log(en_sel_check);
        if(en_sel_check === null) {
          location.href="http://jeromebaek-portfolio-en.ml";
        }
      }
    });
  };

  // ========================================================================= //
  //  이력서 더보기 버튼 이벤트
  // ========================================================================= //
  var moreResume = function() {
     $("#moreResume").on("click", function() {
        location.href="blog-grid.html";
    });
  }

  // Call the functions
  magnifPopup();
  pieChart();
  loaderPage();
  locale_check();
  moreResume();
  setInterval(function() {
    document.getElementById('cir-next-btn').click();
  }, 4000);
});
